import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-base flex flex-col gap-10 lg:gap-8 pt-32 lg:pt-48 lg:pb-20"
    >
      <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-10 lg:gap-0">
        <div className="flex flex-col gap-10 flex-1">
          <h1 className="h1 font-black text-center lg:text-left flex-1">
            Hi! 👋 I'm Sean. I build websites with modern tools and
            technologies.
          </h1>
          <SocialLinks />
        </div>
        <div className="relative h-64 w-64">
          <Image
            className="object-cover rounded-full"
            src="/images/mebw.webp"
            alt="Hero Image"
            layout="fill"
            sizes="20vw"
            priority
          />
        </div>
      </div>
      <div className="flex gap-10 justify-center lg:justify-start">
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
