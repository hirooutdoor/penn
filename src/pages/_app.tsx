import { ThemeProvider, useTheme } from 'next-themes';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { useAuth } from 'src/lib/firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? (
    <>
      <div className='fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center'>
        <div
          className='animate-spin rounded-full h-10 w-10 border-4 border-penn-green'
          style={{ borderTopColor: 'transparent' }}
        ></div>
        <h2 className='text-center ml-4 text-penn-green dark:text-white text-xl font-semibold'>
          Loading...
        </h2>
      </div>
    </>
  ) : (
    children
  );
};

const contextClass = {
  success: 'bg-blue-600',
  error: 'bg-red-600',
  info: 'bg-gray-700',
  warning: 'bg-orange-400',
  default: 'bg-black text-white ',
  dark: 'bg-white text-gray-600',
};

function MyApp({ Component, pageProps }: AppProps) {
  // const {theme, setTheme} = useTheme();
  // useEffect(() => {
  //   localStorage.setItem('theme', `${theme}`)
  //   const localTheme = localStorage.getItem('theme')
  //   console.log(localTheme);
  // }, [])

  return (
    <ThemeProvider attribute='class'>
      <RecoilRoot>
        <Auth>
          <>
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition={Zoom}
              closeButton={false}
              toastClassName={() =>
                // contextClass[(theme == 'light'? 'default': 'info')] +
                contextClass['info'] +
                ' relative flex p-1 min-h-10 rounded-md justify-between m-2 cursor-pointer'
              }
              bodyClassName={() => ' flex  text-sm font-md block p-3'}
            />
            <Component {...pageProps} />
          </>
        </Auth>
      </RecoilRoot>
    </ThemeProvider>
  );
}
export default MyApp;
