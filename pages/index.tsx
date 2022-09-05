import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Layout from '@/components/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <AboutMe />
    </Layout>
  )
}

export default Home
