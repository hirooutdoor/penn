import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <>
      <Image
        className='h-8 w-8 rounded-full cursor-pointer'
        src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt="Avatar Image"
        width={30}
        height={30}
      />
    </>
  );
};

export default Avatar;
