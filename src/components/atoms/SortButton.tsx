import React from 'react'

interface Props {
  
}

const SortButton = (props: Props) => {
  return (
    <div>
      <div className="text-center">
        <div id="theme-toggle" className="relative inline-block m-8" data-state="auto">
          <div className="relative z-10 flex items-center h-4">
            <label className="w-16 h-6 pr-4 relative flex items-center justify-end">
              <input defaultValue="light" name="state-d" type="radio" className="opacity-0 absolute block w-full h-full inset-0 cursor-pointer" /> <span className="transition-opacity uppercase opacity-50 cursor-pointer">Life</span>
            </label>
            <label className="w-6 h-6 relative">
            </label>
            <label className="w-16 h-6 pl-4 relative flex items-center">
              <input defaultValue="dark" name="state-d" type="radio" className="opacity-0 absolute block w-full h-full inset-0 cursor-pointer" /> <span className="uppercase opacity-50 transition-opacity cursor-pointer">Tech</span>
            </label>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="track w-12 h-4 bg-gray-600 rounded-full shadow-inner" />
            <div className="thumb transition-all duration-300 ease-in-out absolute top-0 left-4 w-4 h-4  bg-white border-2 border-gray-800 rounded-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortButton
