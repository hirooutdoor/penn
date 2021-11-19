import { ref, uploadBytesResumable } from '@firebase/storage';
import React from 'react';
import { useRecoilState } from 'recoil';
import { storage } from 'src/lib/firebase/firebase';
import { progressState } from 'src/store/state';


export const uploadFiles = (file:any) => {
  if (!file) return;
  const storageRef = ref(storage, `/images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', (snapshot) => {
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  });
};
