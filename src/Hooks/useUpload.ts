import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { storage, auth, db } from 'src/lib/firebase/firebase';
import { avatarImageState, currentUserState, progressState } from 'src/store/state';
import { updateProfile } from '@firebase/auth';
import { toast } from 'react-toastify';
import { addDoc, collection, getDocs, query, updateDoc, where } from '@firebase/firestore';
import { doc } from 'firebase/firestore';

type Data = {
  description: string;
  pid: string;
  displayName: string;
};

export const useUpload = () => {
  const [progress, setProgress] = useRecoilState(progressState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [avatarImage, setAvatarImage] = useRecoilState(avatarImageState);
  const [isEditing, setIsEditing] = useState(false);
  const user = auth.currentUser;

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleFileClick = () => {
    hiddenFileInput.current?.click();
    // selectFiles({ accept: 'image/*', multiple: false }, ({ name, size, source, file }: any) => {
    //   console.log('Files Selected', { name, size, source, file });
    // });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files![0];
    // setAvatarImage(file);
    uploadFiles(file);
    return { handleFileChange };
  };

  const uploadFiles = (file: any) => {
    if (!file) return;
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (err) => alert(err.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setAvatarImage(url); //一度クライアントサイドでステート保持したらそれが表示されるようにしたい
          //Authユーザーのプロフィール更新（photoURLのみ）
          updateProfile(user!, { photoURL: url })
            .then(() => {
              toast.success('プロフィール写真を変更しました');
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      },
    );
  };

  const authUserCollectionRef = collection(db, 'users');
  const q = query(authUserCollectionRef, where('uid', '==', user?.uid));
  const getAuthUserInfo = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      console.log(doc.id, ' => ', data);
      const { displayName, description, photoURL } = data;
      // setCurrentUser({ displayName: displayName, description: description, photoURL: photoURL });
      // setAvatarImage(photoURL);
    });
  };
  // ログインユーザーのデータをfirestoreから取得
  const updateAuthUserInfo = async (data: Data) => {
    const userDoc = doc(db, 'users', user!.uid); // ログインユーザーのドキュメント（ドキュメント作成時にドキュメントIDとuidを同じにした）
    await updateDoc(userDoc, {
      displayName: data.displayName,
      description: data.description,
      photoURL: user?.photoURL,
    });
    setIsEditing(false);
    // querySnapshot.docs.map((doc:any) => {
    //   const data = doc.data();
    //   console.log(doc.id, ' => ', data);
    //   const { displayName, description, photoURL } = data;
    setCurrentUser({
      displayName: data.displayName,
      description: data.description,
      photoURL: user!.photoURL,
    });
    //   setAvatarImage(photoURL);
    // });
  };

  const handleUpdateComplete = (data: Data) => {
    updateAuthUserInfo(data);
    toast.success('プロフィールを更新しました');
    console.log(data);
  };

  const hiddenTextInput = useRef<HTMLInputElement>(null);

  const handleTextInputClick = () => {
    hiddenTextInput.current?.click();
    // selectFiles({ accept: 'image/*', multiple: false }, ({ name, size, source, file }: any) => {
    //   console.log('Files Selected', { name, size, source, file });
    // });
  };

  return {
    progress,
    avatarImage,
    setAvatarImage,
    hiddenFileInput,
    handleFileClick,
    handleFileChange,
    handleUpdateComplete,
    hiddenTextInput,
    handleTextInputClick,
    updateAuthUserInfo,
    isEditing,
    setIsEditing,
    currentUser,
    setCurrentUser,
  };
};
