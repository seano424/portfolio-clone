import Link from 'next/link'
import { socialLinks, navLinks } from 'lib/links'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import scrollTo from 'lib/scrollTo'

export default function Footer() {
  return (
    <footer className="px-base py-base flex flex-col items-center justify-center gap-8 bg-light dark:bg-dark">
      <div className="flex flex-wrap justify-center gap-5 text-center md:gap-10">
        <button
          aria-label="Scroll To Home Button"
          className="transform text-lg text-dark duration-700 hover:text-gray-600 dark:text-light dark:hover:scale-110 lg:text-xl"
          onClick={() => scrollTo('home', 1600, -80)}
        >
          Back To Top
        </button>
        {navLinks.map((link) => (
          <button
            aria-label={`Scroll To ${link.title} Button`}
            key={link.title}
            className="transform text-lg text-dark duration-700 hover:text-gray-600 dark:text-light dark:hover:scale-110 lg:text-xl"
            onClick={() => scrollTo(link.url, null, -80)}
          >
            {link.title}
          </button>
        ))}
        <Link
          href="mailto:soreilly424@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <a className="transform text-lg text-dark transition-all duration-700 hover:text-gray-600 dark:text-light dark:hover:scale-110 lg:text-xl">
            Get in touch
          </a>
        </Link>
      </div>
      <div className="flex justify-center gap-8">
        {socialLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <a
              className={link.classes}
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon === 'GitHub' && (
                <GitHub className="h-6 w-6 lg:h-8 lg:w-8" />
              )}
              {link.icon === 'Twitter' && (
                <Twitter className="h-6 w-6 lg:h-8 lg:w-8" />
              )}
              {link.icon === 'LinkedIn' && (
                <LinkedIn className="h-6 w-6 lg:h-8 lg:w-8" />
              )}
            </a>
          </Link>
        ))}
      </div>
      <p className="text-center text-base text-dark dark:text-light">
        &copy; 2022 Sean O'Reilly. Front-end Developer. 🐋
      </p>
    </footer>
  )
}
