import React, { SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { logout } from 'src/lib/firebase/auth';
import { auth } from 'src/lib/firebase/firebase';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Popover = ({ isOpen, setIsOpen }: Props) => {
  const user = auth.currentUser;

  const handleLogout = async (): Promise<void> => {
    await logout()
      .then(() => {
        user ? toast.success('ログアウトしました') : null;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div
        className='animate-fade-in-up origin-top-right absolute left-20 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
      >
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-75'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-0'
        >
          My Profile
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-75'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-1'
        >
          Settings
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-75'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-2'
          onClick={handleLogout}
        >
          Sign out
        </a>
      </div>
      {/* This is transparent background to trigger setIsOpen(false) */}
      <div
        className='fixed inset-0 '
        aria-hidden='true'
        onClick={() => isOpen && setIsOpen(false)}
      ></div>
    </div>
  );
};

export default Popover;
