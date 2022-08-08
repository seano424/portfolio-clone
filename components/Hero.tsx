import Image from 'next/image'
import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'
import { socialLinks } from 'utils/constants'
import { Element } from 'react-scroll'

export default function AboutMe() {
  return (
    <Element name="home">
      <section className="px-base flex text-center flex-col items-center justify-center gap-10 pb-20 pt-32 md:py-base">
        <div className="relative h-80 w-80">
          <Image
            className="object-cover rounded-full"
            src="/images/mebw.webp"
            alt="Hero Image"
            layout="fill"
            sizes="20vw"
            priority
          />
        </div>
        <h1 className="h1">
          Hi! 👋 My name is Sean. I build websites with modern tools and
          technologies!
        </h1>
        <div className="flex space-x-8 justify-center">
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <a
                className={link.classes}
                aria-label={link.name}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon === 'GitHub' && (
                  <GitHub className="w-8 h-8 hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200 dark:hover:text-primary" />
                )}
                {link.icon === 'Twitter' && (
                  <Twitter className="w-8 h-8 hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:hover:text-white dark:text-secondary" />
                )}
                {link.icon === 'LinkedIn' && (
                  <LinkedIn className="w-8 h-8 hover:text-secondary transition-all duration-700 ease-linear text-primary dark:text-blue-200 dark:hover:text-white" />
                )}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex gap-10 justify-center">
          <Link href="/">
            <a className="button">See my work</a>
          </Link>
          <Link href="/">
            <a className="button bg-white dark:bg-light text-dark">
              More About Me
            </a>
          </Link>
        </div>
      </section>
    </Element>
  )
}
