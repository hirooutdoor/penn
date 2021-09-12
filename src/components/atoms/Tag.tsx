import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Tag = ({children}: Props) => {
  return (
      <div className='text-xs inline-flex leading-sm px-3 py-1 bg-gray-200 text-penn-dark rounded-full dark:bg-gray-400'>{children}</div>
  );
};
