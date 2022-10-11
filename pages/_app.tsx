import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute="class">
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </LazyMotion>
  )
}

export default MyApp
