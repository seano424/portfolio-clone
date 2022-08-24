import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </LazyMotion>
  )
}

export default MyApp
