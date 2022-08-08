import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Projects />
    </Layout>
  )
}

export default Home
