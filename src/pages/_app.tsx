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

  return isLoading ? <p>Loading...</p> : children;
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
