import Image from 'next/image'
import Link from 'next/link'
import { Element } from 'react-scroll'
import { socialLinks } from 'lib/links'
import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'
import scrollTo from 'lib/scrollTo'

export default function Hero() {
  return (
    <Element name="home">
      <section className="px-base relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-20 text-center sm:pt-32 xl:pt-28">
        <div className="tranform absolute -top-full bottom-0 -left-[123%] right-0 z-0 hidden -rotate-[20deg] bg-secondary/5 dark:hidden lg:block"></div>
        <div className="relative z-10 h-64 w-64 rounded-full shadow-2xl md:h-80 md:w-80">
          <Image
            className="rounded-full object-cover"
            src="/images/mebw.webp"
            alt="Hero Image"
            layout="fill"
            sizes="(min-width: 75em) 20vw,
            90vw"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col md:gap-8">
          <h1 className="h1 my-5">
            Hi! 👋 My name is Sean. I build websites with modern tools &
            technologies!
          </h1>
          <div className="flex min-h-[40px] justify-center space-x-8">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <a
                  className={link.classes}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon === 'GitHub' && (
                    <GitHub className="h-8 w-8 text-green-500 transition-all duration-300 ease-linear hover:text-primary dark:text-green-200 dark:hover:text-primary" />
                  )}
                  {link.icon === 'Twitter' && (
                    <Twitter className="h-8 w-8 text-blue-500 transition-all duration-200 ease-linear hover:text-primary dark:text-secondary dark:hover:text-white" />
                  )}
                  {link.icon === 'LinkedIn' && (
                    <LinkedIn className="h-8 w-8 text-primary transition-all duration-700 ease-linear hover:text-secondary dark:text-blue-200 dark:hover:text-white" />
                  )}
                </a>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row lg:gap-10">
            <button
              aria-label="Scroll To About Button"
              onClick={() => scrollTo('about', 1600, -40)}
              className="button mx-auto w-max bg-white text-dark dark:bg-light"
            >
              More About Me
            </button>
            <button
              aria-label="Scroll To Projects Button"
              onClick={() => scrollTo('projects', null, -70)}
              className="button mx-auto w-max"
            >
              See my work
            </button>
          </div>
        </div>
      </section>
    </Element>
  )
}
