import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MenuIcon = ({ children }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-penn-gray cursor-pointer'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      {children}
    </svg>
  );
};

export default MenuIcon;
