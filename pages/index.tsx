import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Layout from '@/components/Layout'
import { LazyMotion, domAnimation } from 'framer-motion'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'

const Home = () => {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute="class">
        <RecoilRoot>
          <Layout>
            <Hero />
            <Projects />
            <AboutMe />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </LazyMotion>
  )
}

export default Home
