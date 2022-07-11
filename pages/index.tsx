import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ButtonScrollTompnTop from '@/components/ButtonScrollToTop'
import Projects from '@/components/Projects'

const Home = (props) => {
  const { quote } = props
  console.log(quote[0].quote)

  return (
    <Layout>
      <Hero />
      <Projects />
      {/* <ButtonScrollToTop /> */}
      <div className='h-[900px]'></div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const quote = await fetch('https://api.breakingbadquotes.xyz/v1/quotes').then(
    (res) => res.json()
  )

  return {
    props: {
      quote,
    },
  }
}

export default Home
