import React, { SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Popover = ({ isOpen, setIsOpen }: Props) => {
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
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-0'
        >
          Your Profile
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-1'
        >
          Settings
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm text-gray-700'
          role='menuitem'
          tabIndex={-1}
          id='user-menu-item-2'
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
