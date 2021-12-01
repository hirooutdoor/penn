import React from 'react';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const SideMenu = ({ children }: Props) => {
  // const SideMenu = React.forwardRef(({children, href}:any,ref:any) => {
  return (
    <>
      <div className='flex gap-2 cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105'>{children}</div>
    </>
  );
};

export default SideMenu;
