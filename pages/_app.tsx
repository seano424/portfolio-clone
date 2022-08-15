import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LazyMotion>
  )
}

export default MyApp
