import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import * as Scroll from 'react-scroll'
import Card from '@/components/Card'

const Home = (props) => {
  const { quote } = props
  console.log(quote[0].quote)

  return (
    <Layout>
      <AnimatePresence initial={false}>
        <div>
          {/* About Me */}
          <m.section id="about" className="py-base">
            <div className="flex flex-col gap-10 lg:gap-8 lg:mt-10">
              <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-10 lg:gap-0">
                <div className="flex flex-col gap-10 flex-1">
                  <h1 className="h1 font-black text-center lg:text-left flex-1">
                    Hi! 👋 I'm Sean. I'm a front-end developer, designer, and
                    blogger.
                  </h1>
                  {/* SocialLinks */}
                  <div className="flex space-x-4 justify-center lg:justify-start lg:pl-4">
                    <a
                      rel="noreferrer"
                      aria-label="Twitter Link"
                      className="hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:text-white"
                      href="https://twitter.com/sea_oreilly"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="GitHub Link"
                      className="hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200"
                      href="https://github.com/seano424"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="LinkedIn Link"
                      className="hover:text-secondary transition-all duration-700 ease-linear text-primary dark:text-blue-200"
                      href="https://www.linkedin.com/in/sea-oreilly/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='relative h-64 w-64'>
                  <Image
                    className="object-cover rounded-full"
                    src="/images/mebw.jpeg"
                    alt="Hero Image"
                    layout='fill'
                    sizes="20vw"
                    priority
                  />
                </div>
              </div>
              <div className="flex gap-10 justify-center lg:justify-start">
                <Link href="/">
                  <a className="button">See my work</a>
                </Link>
                <Link href="/">
                  <a className="button bg-white dark:bg-light text-dark">
                    More About Me
                  </a>
                </Link>
              </div>
              <div className='mt-20 grid gap-5'>
                <h4 className="h4">
                  I love building things and working on projects.
                </h4>
                <p>Check out some of my more recent projects below.</p>
              </div>
            </div>
          </m.section>
          {/* Projects / Portfolio */}
          <m.section
            viewport={{ margin: '-450px' }}
            id="projects"
            className="py-base w-full border-8 border-red-50 px-10"
          >
            <h2 className="h2 text-center font-black italic mb-10 drop-shadow-lg">
              Projects
            </h2>
            <div className="gap-10 grid xl:grid-cols-2">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </m.section>
          <m.section
            viewport={{ margin: '-450px' }}
            id="contact"
            className="py-base h-[800px] w-full border-8 border-green-50"
          ></m.section>
          <m.section
            viewport={{ margin: '-450px' }}
            id="resume"
            className="py-base h-[800px] w-full border-8 border-blue-50"
          ></m.section>
          <button
            aria-label="Go to Top Button"
            className="p-4 mt-10 rounded-full cursor-pointer font-black dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse w-max mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </AnimatePresence>
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
