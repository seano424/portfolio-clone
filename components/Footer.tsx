import Link from 'next/link'
import { socialLinks, navLinks } from 'utils/constants'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'

export default function Footer() {
  return (
    <footer className="px-base py-base bg-light dark:bg-dark flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.url}>
            <a className="text-xl text-dark dark:text-light hover:text-gray-600">
              {link.title}
            </a>
          </Link>
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
              {link.icon === 'GitHub' && <GitHub className="w-8 h-8" />}
              {link.icon === 'Twitter' && <Twitter className="w-8 h-8" />}
              {link.icon === 'LinkedIn' && <LinkedIn className="w-8 h-8" />}
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
