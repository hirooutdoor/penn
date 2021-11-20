/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import Logo from '../molecles/Logo';
import WriteButton from 'src/components/atoms/WriteButton';
import SideMenu from '../molecles/SideMenu';
import MenuIcon from '../atoms/MenuIcon';
import MenuText from '../atoms/MenuText';
import DarkModeSwitch from '../molecles/DarkModeSwitch';
import Image from 'next/image';
import { logout } from 'src/lib/firebase/auth';
import { deleteUser } from '@firebase/auth';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';
import { auth } from 'src/lib/firebase/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Popover from '../organism/Popover';
import { useRecoilValue } from 'recoil';
import { avatarImageState } from 'src/store/state';

const SideBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const user = auth.currentUser;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const avatarImage = useRecoilValue(avatarImageState);

  const handleLogout = (): void => {
    logout()
      .then(() => {
        user ? toast.success('ログアウトしました') : null;
      })
      .catch((error) => console.error(error));
  };

  const handleHomePush = () => {
    user ? router.push('/') : null;
  };

  const handlePopover = () => {
    user && setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed mx-6 flex flex-col mt-10 gap-6 z-0'>
        <Logo />
        <WriteButton />
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <SideMenu>
          <MenuIcon>
            <Link href={user ? '#' : '/'} passHref>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </Link>
          </MenuIcon>
          <MenuText>
            <Link href={user ? '/community' : '/'}>Home</Link>
          </MenuText>
        </SideMenu>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <SideMenu>
          <MenuIcon>
            <Link href={user ? '/memos' : '#'} passHref>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </Link>
          </MenuIcon>
          <MenuText>
            <Link href={user ? '/memos' : '#'}>Memo</Link>
          </MenuText>
        </SideMenu>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <SideMenu>
          <MenuIcon>
            <Link href={user ? '/issues' : '#'} passHref>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              />
            </Link>
          </MenuIcon>
          <MenuText>
            <Link href={user ? '/issues' : '#'}>Issue</Link>
          </MenuText>
        </SideMenu>
        <SideMenu>
          <MenuIcon>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
            />
          </MenuIcon>
          <MenuText>Tsumiage</MenuText>
        </SideMenu>
        <SideMenu>
          <MenuIcon>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
            />
          </MenuIcon>
          <MenuText>Stock</MenuText>
        </SideMenu>
        <SideMenu>
          <MenuIcon>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </MenuIcon>
          <MenuText>More</MenuText>
        </SideMenu>
        <div className='flex flex-col items-center my-10 gap-6'>
          <DarkModeSwitch />
          <MenuIcon>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            />
          </MenuIcon>
          <div className='flex'>
            <img
              className={`h-8 w-8 rounded-full ${user && 'cursor-pointer'}`}
              src={user?.photoURL ? user.photoURL : '/nouser-icon.png'}
              alt='Avatar Image'
              width={30}
              height={30}
              onClick={handlePopover}
            />
            {isOpen && <Popover isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
          {user && (
            <button
              onClick={async () => {
                await deleteUser(user!);
                router.push('/');
              }}
              className='text-red-400'
            >
              🚨Dangerous🚨
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
