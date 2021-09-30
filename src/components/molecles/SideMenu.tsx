import React from 'react';

interface Props {
  children: React.ReactNode
}

const SideMenu = ({children}: Props) => {
  return (
    <>
      <div className='flex gap-2 cursor-pointer'>
        {children}
      </div>
    </>
  );
};

export default SideMenu;
