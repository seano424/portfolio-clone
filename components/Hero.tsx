import Image from 'next/image'
import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'
import { socialLinks } from 'utils/constants'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-base flex text-center flex-col items-center justify-center gap-10 pb-20 pt-32 md:py-base"
    >
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
              {link.icon === 'GitHub' && <GitHub className="w-8 h-8" />}
              {link.icon === 'Twitter' && <Twitter className="w-8 h-8" />}
              {link.icon === 'LinkedIn' && <LinkedIn className="w-8 h-8" />}
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
  )
}
