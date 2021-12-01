import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const SideMenu = ({ children }: Props) => {
  // const SideMenu = React.forwardRef(({children, href}:any,ref:any) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className={`flex gap-2 py-1 px-2 cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 ${isActive && `bg-penn-green bg-opacity-20 rounded-full` } `}>{children}</div>
    </>
  );
};

export default SideMenu;
