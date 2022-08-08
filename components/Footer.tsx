import Link from 'next/link'
import { socialLinks, navLinks } from 'utils/constants'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import { scrollTo } from 'utils/functions'

export default function Footer() {
  return (
    <footer className="px-base py-base bg-light dark:bg-dark flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-5 justify-center lg:gap-10">
        {navLinks.map((link) => (
          <button
            key={link.title}
            className="text-dark dark:text-light hover:text-gray-600 text-lg lg:text-xl"
            onClick={() => scrollTo(link.url)}
          >
            {link.title}
          </button>
        ))}
      </div>
      <div className="flex gap-8 justify-center">
        {socialLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <a
              className={link.classes}
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon === 'GitHub' && <GitHub className="w-6 h-6 lg:w-8 lg:h-8" />}
              {link.icon === 'Twitter' && <Twitter className="w-6 h-6 lg:w-8 lg:h-8" />}
              {link.icon === 'LinkedIn' && <LinkedIn className="w-6 h-6 lg:w-8 lg:h-8" />}
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
