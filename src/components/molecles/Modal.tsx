import React from 'react';
import Image from 'next/image';
import { googleLogin } from 'src/lib/firebase/auth';
import Logo from './Logo';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: Props) => {
  const { show, setShow } = props;
  const closeModal: React.MouseEventHandler = () => {
    setShow(false);
  };
  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div className='z-50'>
      {show ? (
        <div
          className='fixed inset-0 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
            <div
              className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
              aria-hidden='true'
              onClick={closeModal}
            ></div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>

            {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='flex justify-end pr-2 pt-2'>
                <button
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  onClick={closeModal}
                >
                  <span className='sr-only'>Close menu</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <div className='flex justify-center'>
                <Image src='/share.svg' alt='app image' height={200} width={200} />
              </div>
              <div className='bg-white px-4 pb-4 '>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Pennは技術メモ共有プラットフォームです。日々の学びで得た知見やアイデアをアウトプットしましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 pt-3 pb-6 sm:px-6 sm:flex-col sm:justify-center items-start'>
                <a
                  className='cursor-pointer flex items-center justify-center px-4 py-2 mt-4 mb-8 mx-20 space-x-2 transition-colors duration-300 border border-gray-300 rounded-md group hover:bg-red-400 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-200'
                  onClick={handleGoogleLogin}
                >
                  <span className='flex items-center'>
                    <Image alt='google icon' src='/google-icon.svg' height={18} width={18} />
                  </span>
                  <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                    googleでログイン
                  </span>
                </a>
                <p className='text-sm'>
                  <a className='underline' href='#'>
                    利用規約
                  </a>
                  、
                  <a className='underline' href='#'>
                    プライバシーポリシー
                  </a>
                  に同意したうえでログインしてください。
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
