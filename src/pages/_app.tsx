import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { useAuth } from 'src/lib/firebase/auth';

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? (
    <>
      <div className='fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900'></div>
      </div>
    </>
  ) : (
    children
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </ThemeProvider>
  );
}
export default MyApp;
