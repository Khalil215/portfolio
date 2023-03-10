import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async(appContext: any)=>{
const appProps = await App.getInitialProps(appContext);
return {...appProps}
}