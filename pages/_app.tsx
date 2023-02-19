import '../public/styles/globals.css'
import type { AppProps } from 'next/app'
import ContextsWrapper from 'contexts/ContextsWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextsWrapper>
      <Component {...pageProps} />
    </ContextsWrapper>
  )
}