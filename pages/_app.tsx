import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {FormProvider} from '../src/context/formcontext';
import Theme from '../src/components/Theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  return <FormProvider><Theme><Component {...pageProps} /></Theme></FormProvider>
}

export default MyApp
