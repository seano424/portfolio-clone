import Link from 'next/link'
import { Element } from 'react-scroll'

export default function AboutMe() {
  return (
    <Element name="about">
      <section className="py-base px-base">
        <h3 className="h3 text-center text-secondary">About Me</h3>
        <h2 className="h2 text-center mb-8">Here's my story</h2>
        <div className="text-2xl flex flex-col gap-6 leading-[40px] text-slate-800 dark:text-light/90 lg:text-[1.7rem] lg:leading-[50px]">
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
            as well as dabbling in photography 📸. You can find me on{' '}
            <Link href="/">
              <a className="text-secondary hover:underline transition-all duration-300">
                Twitter
              </a>
            </Link>{' '}
            or{' '}
            <Link href="/">
              <a className="text-emerald-700 hover:underline transition-all duration-300">
                GitHub!
              </a>
            </Link>
          </p>
        </div>
      </section>
    </Element>
  )
}
