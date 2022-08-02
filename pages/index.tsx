import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <section className="py-base px-base">
        <h3 className="h3 text-center text-secondary">About Me</h3>
        <h2 className="h2 text-center mb-8">Here's my story</h2>
        <div className="text-2xl flex flex-col gap-6 leading-[40px] text-slate-600">
          <p>
            I'm Sean, a passionate front-end developer specializing in React and
            JavaScript. My mission is to translate user-focussed designs into
            pixel-perfect websites or applications that run blazing fast.
          </p>
          <p>
            I’m currently working as a front-end developer at TrendyMinds where
            I help develop websites that combines powerful functionality with
            intuitive design to give clients the best user experience. We work
            mainly with Craft CMS and the LAMP stack, React (Next JS), and
            TailwindCSS.
          </p>
          <p>
            I am a graduate of the University of Kansas where I was a History
            Major and more recently from the Le Wagon Coding Bootcamp where we
            built full stack apps with Ruby on Rails and JavaScript. During my
            free time I love the great outdoors - diving 🤿, hiking 🏔, traveling
            🐫, going to the beach 🐳, reading fiction and various publications
            about the newest technology trends and other programming languages,
            and dabbling in photography 📸. You can find me on{' '}
            <Link href="/">
              <a className="text-secondary hover:underline transition-all duration-300">
                Twitter
              </a>
            </Link>{' '}
            or{' '}
            <Link href="/">
              <a className="text-emerald-600 hover:underline transition-all duration-300">
                GitHub
              </a>
            </Link>
          </p>
        </div>
      </section>

      <section className='py-base px-base'>
        <h2 className='h2'>Work Experience</h2>
        <h3 className='h3'>Here's a brief rundown of my recent experience </h3>
      </section>
      <Projects />
    </Layout>
  )
}

export default Home
