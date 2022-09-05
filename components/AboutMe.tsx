import Link from 'next/link'
import { Element } from 'react-scroll'

export default function AboutMe() {
  return (
    <Element name="about">
      <section className="py-base px-base">
        <div className="mb-8">
          <p className="h3 text-center text-secondary">About Me</p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-xl leading-[40px] text-slate-800 dark:text-light/90 lg:text-xl lg:leading-loose">
          <p>
            I'm Sean, a passionate front-end developer specializing in React and
            JavaScript. My mission is to translate user-focused designs into
            pixel-perfect websites and applications that run blazing fast.
          </p>
          <p>
            I’m currently working as a front-end developer at TrendyMinds where
            I help develop websites that combine powerful functionality with
            intuitive design to give clients the best user experience. We mainly
            work with Craft CMS, the LAMP stack, React (Next JS), and
            TailwindCSS.
          </p>
          <p>
            I am a graduate of the University of Kansas, where I was a History
            Major and more recently a graduate of the Le Wagon Coding Bootcamp
            where we built full-stack apps with Ruby on Rails and JavaScript.
            During my free-time I love the great outdoors - diving, hiking,
            traveling, going to the beach, reading fiction and various
            publications about the newest technology trends and other
            programming languages, as well as dabbling in photography. You can
            find me on{' '}
            <Link href="/">
              <a className="text-blue-700 transition-all duration-300 hover:underline">
                Twitter
              </a>
            </Link>{' '}
            or{' '}
            <Link href="/">
              <a className="text-emerald-700 transition-all duration-300 hover:underline">
                GitHub!
              </a>
            </Link>
          </p>
        </div>
      </section>
    </Element>
  )
}
