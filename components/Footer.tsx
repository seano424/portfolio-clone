import Link from 'next/link'
import { socialLinks, navLinks } from 'lib/links'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import { scrollTo } from 'lib/functions'

export default function Footer() {
  return (
    <footer className="px-base py-base flex flex-col items-center justify-center gap-8 bg-light dark:bg-dark">
      <div className="flex justify-center gap-5 lg:gap-10">
        {navLinks.map((link) => (
          <button
            key={link.title}
            className="text-lg text-dark hover:text-gray-600 dark:text-light lg:text-xl"
            onClick={() => scrollTo(link.url)}
          >
            {link.title}
          </button>
        ))}
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
