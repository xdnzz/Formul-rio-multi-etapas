import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {FormProvider} from '../src/context/formcontext'

function MyApp({ Component, pageProps }: AppProps) {
  return <FormProvider><Component {...pageProps} /></FormProvider>
}

export default MyApp
