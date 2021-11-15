import React from 'react';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const SideMenu = ({ children }: Props) => {
  // const SideMenu = React.forwardRef(({children, href}:any,ref:any) => {
  return (
    <>
      <div className='flex gap-2 cursor-pointer'>{children}</div>
    </>
  );
};

export default SideMenu;
