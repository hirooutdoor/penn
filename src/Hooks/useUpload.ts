import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { storage, auth } from 'src/lib/firebase/firebase';
import { avatarImageState, progressState } from 'src/store/state';
import { updateProfile } from '@firebase/auth';
import { toast } from 'react-toastify';

export const useUpload = () => {
  const [progress, setProgress] = useRecoilState(progressState);
  const [avatarImage, setAvatarImage] = useRecoilState(avatarImageState);
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
    return {handleFileChange}
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
  return { progress, avatarImage, setAvatarImage, hiddenFileInput, handleFileClick, handleFileChange };
}

