import React, { useRef, useState } from 'react';

import { updateProfile } from '@firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { updateDoc, doc } from '@firebase/firestore';
import { storage, auth, db } from 'src/lib/firebase/firebase';

import { avatarImageState, currentUserState, progressState } from 'src/store/state';
import { useRecoilState } from 'recoil';

import { Data } from 'src/types/types';

import { toast } from 'react-toastify';

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

  // avatarImageに情報を保持して表示
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files![0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarImage(reader.result as string);
      console.log(reader.result as string);
    };
    !isEditing && handleUploadFiles(file);//Save Buttonクリック実行時に実行したい

  };

  // inputよりアップロードされた画像をStorageに保存し、Storageから取得した画像をログインユーザーのアバター画像(avatarImage)に情報を保持
  const handleUploadFiles = (file: any) => {
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
        // Storageに保存した画像のURLを取得
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setAvatarImage(url);
          console.log(url);
          updateProfile(user!, { photoURL: url }) //ログインユーザーのphotoURLを取得した値に更新
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

  // Firestoreにあるログインユーザーのデータをアップデート
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

  //フォームから取得した内容をupdateAuthUserInfo関数に渡して更新完了
  const handleUpdateComplete = (data: Data) => {
    updateAuthUserInfo(data);
    toast.success('プロフィールを更新しました');
    console.log(data);
  };

  const hiddenTextInput = useRef<HTMLInputElement>(null);

  const handleTextInputClick = () => {
    hiddenTextInput.current?.click();
    setIsEditing(false)
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
    handleUploadFiles,
  };
};
