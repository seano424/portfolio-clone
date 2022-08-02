import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-base flex text-center flex-col items-center justify-center gap-10 py-base"
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
      <SocialLinks />
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
