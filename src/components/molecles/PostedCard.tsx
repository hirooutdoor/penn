import React from 'react';
import Image from 'next/image'

interface Props {}

const PostedCard = (props: Props) => {
  return (
    <>
      <div className='shadow-md group rounded-md bg-white flex justify-center items-center content-div cursor-pointer dark:border-penn-gray dark:bg-penn-darkGray '>
        <div>
          <Image className='rounded-t-md flex-shrink'
          src='https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
          alt='Avatar Image'
          width={200}
          height={100}
          layout='fixed'/>
          <div className='pb-8 pt-2 px-4 bg-white dark:border-penn-gray dark:bg-penn-darkGray rounded-b-md fd-cl '>
            <span className='block text-lg tracking-wide'>
              React Hooksとは
            </span>
            <span className='block text-sm'>
              Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostedCard;
