import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { avatarImageState, isOnboardingState } from 'src/store/state';
import { logout } from 'src/lib/firebase/auth';
import { auth } from 'src/lib/firebase/firebase';
import { deleteUser } from 'firebase/auth';
import router from 'next/router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Callback, FileUpload, useFileUpload } from 'use-file-upload';

const Onboarding: NextPage = () => {
  const [isNext, setIsNext] = useState(false);
  const [isOnboarding, setIsOnboarding] = useRecoilState(isOnboardingState);
  const [avatarImage, setAvatarImage] = useRecoilState(avatarImageState);
  const [updatedUser, setUpdatedUser] = useState({ displayName: '', pid: '', description: '' });
  const [files, selectFiles] = useFileUpload();
  const user = auth.currentUser;

  useEffect(() => {
    setAvatarImage(user?.photoURL);
  }, []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: false,
  });

  useEffect(() => {
    setIsOnboarding(true);
  }, [setIsOnboarding]);

  const handleIsNext = () => {
    setIsNext(!isNext);
  };

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    // hiddenFileInput.current?.click();
    selectFiles({ accept: 'image/*', multiple: false }, ({ name, size, source, file }:any) => {
      console.log('Files Selected', { name, size, source, file });
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uploadedFile = e.target.files![0];
    setAvatarImage(uploadedFile); //[0]なくてもいい？ 指定の仕方を考え直す必要あるかも
  };

  const handleSignupCancel = async (): Promise<void> => {
    await deleteUser(user!)
      .then(() => {
        console.log(user);
        if (isOnboarding) {
          setIsOnboarding(false);
        }
        router.push('/');
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUpdatedUser((user) => ({ ...user, displayName: e.target.value }));
  };

  const handleUpdateUserPid = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUpdatedUser((user) => ({ ...user, pid: e.target.value }));
  };

  const handleUpdateUserDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setUpdatedUser((user) => ({ ...user, description: e.target.value }));
  };

  const completeSignup = async (): Promise<void> => {
    setIsOnboarding(false);
    try {
      await router.push('/community');
      toast.success('新規登録が成功しました！');
    } catch {
      (error: any) => console.error(error);
    }
  };

  const handleSignupComplete = (data: any) => {
    console.log(data);
    console.log('clicked!!');
    completeSignup();
    // updatedUser.description === '' ? null : completeSignup();
  };
  // console.log(`onboarding: ${isOnboarding}`);
  // console.log(`user description:"${updatedUser.description}"`);
  // console.log(`user: ${user}`);

  return (
    <div className=' p-5'>
      {!isNext ? (
        <div className='animate-fade-in-up text-center'>
          <h1 className='text-4xl font-bold text-penn-dark cursor-default'>Welcome to Penn!</h1>
          <Image src='/welcome.svg' alt='onboard image' height={350} width={350} />
          <h2 className='text-2xl mb-6 text-penn-dark font-semibold cursor-default'>
            What is your name?
          </h2>
          {/* normal form */}
          {/* <form className='mb-10' id='userName' action='submit'>
            <input
              className='w-60 p-2 mb-4 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
              type='text'
              placeholder='ニックネーム（例: Penn太郎）'
              required
              value={updatedUser?.displayName}
              onChange={handleUpdateUserName}
            />
            <div className='flex justify-center'>
              <p className='z-10 pt-2  text-penn-gray'>@</p>
              <input
                className='-ml-4 pl-4 w-64 p-2 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                type='text'
                placeholder='プロフィールURL(penn.jp/penn_taro)'
                required
                value={updatedUser?.pid}
                onChange={handleUpdateUserPid}
              />
            </div>
            <p className='' hidden>
              ユーザー名には半角英数字とアンダースコア（_）のみ使用できます
            </p>
          </form> */}
          {/* React Hook Form */}
          <form className='mb-10' id='userName' onSubmit={handleSubmit(handleIsNext)}>
            <input
              className='w-60 p-2 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
              type='text'
              placeholder='ニックネーム（例: Penn太郎）'
              {...register('displayName', { required: true, maxLength: 16 })}
            />
            <br />
            {errors.displayName?.types?.required && (
              <span className='text-sm text-red-500'>文字を入力してください</span>
            )}
            {errors.displayName?.types?.maxLength && (
              <span className='text-sm text-red-500'>16文字以内にしてください</span>
            )}
            <div className='flex justify-center'>
              <p className='z-10 pt-2  text-penn-gray'>@</p>
              <input
                className='-ml-4 pl-4 w-64 p-2 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                type='text'
                placeholder='プロフィールURL(penn.jp/penn_taro)'
                {...register('pid', { required: true, maxLength: 16 })}
              />
            </div>
            {errors.pid?.types?.required && (
              <span className='text-sm text-red-500'>文字を入力してください</span>
            )}
            {errors.pid?.types?.maxLength && (
              <span className='text-sm text-red-500'>16文字以内にしてください</span>
            )}
          </form>

          <div className='flex justify-center gap-10 mt-6'>
            <button
              className='text-gray-400 transition-all duration-500 hover:text-penn-gray outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-30 rounded-md'
              onClick={handleSignupCancel}
            >
              登録を中断する
            </button>
            <input
              form='userName'
              className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-50'
              type='submit'
              value='Next'
            />
          </div>
        </div>
      ) : (
        <div className='animate-fade-in-down'>
          <button
            className='text-gray-400 transition-all duration-500 ml-6 hover:text-penn-gray outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-30 rounded-md'
            onClick={handleIsNext}
            type='submit'
          >
            ← Go back
          </button>
          <div className='text-center'>
            <h1 className='text-4xl my-4 font-bold text-penn-dark cursor-default'>
              Setup your profile
            </h1>
            <Image
              className='rounded-full cursor-pointer'
              // src='/avatar.png'
              // src={`${avatarImage}`}
              src={files?.source.replace(/^...../g, '') || avatarImage} //replace(/^...../g, '')先頭の5文字を空文字に置換（blob:が邪魔なので。。。）
              alt='Avatar Image'
              width={100}
              height={100}
              layout='fixed'
            />
            <div>
              <button
                className='text-sm mb-4 text-gray-400 rounded cursor-pointer focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50'
                onClick={handleFileClick}
              >
                変更する
              </button>
              <input
                className='hidden'
                type='file'
                ref={hiddenFileInput}
                // onChange={handleFileChange}
                accept='image/*'
              />
            </div>
            {/* <form className='' id='description'> */}
            <form className='' onSubmit={handleSubmit(handleSignupComplete)}>
              {/* normal */}
              {/* <textarea
                className='bg-gray-100 rounded-md border border-gray-100 leading-normal resize-none w-96 h-40 py-2 px-3 my-8 font-medium outline-none transition-all duration-500 focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                name='body'
                placeholder='自己紹介'
                maxLength={180}
                value={updatedUser?.description}
                onChange={handleUpdateUserDescription}
                required
              ></textarea> */}

              {/* React Hook Form */}
              <textarea
                className='bg-gray-100 rounded-md border border-gray-100 leading-normal resize-none w-96 h-40 py-2 px-3 my-8 font-medium outline-none transition-all duration-500 focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                placeholder='自己紹介 （160文字以内）'
                maxLength={180}
                {...register('Description', { required: true, maxLength: 160 })}
              ></textarea>
              <br />
              {errors.Description?.types?.required && (
                <span className='text-sm text-red-500'>文字を入力してください</span>
              )}
              {errors.Description?.types?.maxLength && (
                <span className='text-sm text-red-500'>160文字以内にしてください</span>
              )}
              <div className='flex justify-center gap-10'>
                {/* normal */}
                {/* <button
                  className='inline-flex items-center justify-center mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-50'
                  form='description'
                  type='button'
                  onClick={handleSignupComplete}
                  // disabled={updatedUser?.description === '' ? true: false} //required設定しとけば別にいらない？
                >
                  Pennをはじめる
                </button> */}
                {/* react hook form */}
                <input
                  className='inline-flex items-center justify-center mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-50 cursor-pointer'
                  type='submit'
                  value='Pennを始める'
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
