import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
          <h1 className='text-[80px] bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-blue-500 to-purple-500 font-extrabold'>
            Next.js x TypeScript x TailwindCSS x testing suite
          </h1>
          <h2 className='text-2xl max-w-md mx-auto'>
            A Next.js Boilerplate with TypeScript, Tailwind CSS and testing suite enabled
          </h2>
          <h3>TailwindCSS</h3>
        </div>
      </main>
    </>
  );
};

export default Home;
