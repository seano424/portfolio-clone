import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'
import MobileContextProvider from 'contexts/MobileContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute="class">
        <MobileContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MobileContextProvider>
      </ThemeProvider>
    </LazyMotion>
  )
}

export default MyApp
