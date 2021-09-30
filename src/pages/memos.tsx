import React from 'react'
import { NextPage } from 'next'

import { Feed } from 'src/components/templates/Feed'
import SideBar from 'src/components/templates/SideBar'

const memos:NextPage = () => {
  return (
    <div className='dark:bg-black transition duration-500'>
          <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
            <main className='flex justify-between gap-10'>
              <SideBar />
              <Feed />

            </main>
          </div>
        </div>
  )
}

export default memos
