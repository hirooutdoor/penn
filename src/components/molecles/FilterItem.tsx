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
        className={`block px-4 py-2  ${isActive ? ' border-t-2 border-penn-green text-penn-green' : ''}`}
      >
        {children}
      </p>
    </li>
  )
}

export default FilterItem
