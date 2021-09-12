import React from 'react'

interface Props {
  isActive: boolean;
  children: React.ReactNode;
}

const FilterItem = (props: Props) => {

  const { children, isActive } = props;

  return (
    <li>
      <p
        className={`block py-2 cursor-pointer  ${isActive ? ' border-t-2 border-penn-green text-penn-green' : ''}`}
      >
        {children}
      </p>
    </li>
  )
}

export default FilterItem
