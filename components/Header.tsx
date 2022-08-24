import Link from 'next/link'
import ThemeButton from './ThemeButton'
import Hamburger from './Hamburger'
import Avatar from './Avatar'
import useScrollTo from 'hooks/useScrollTo'

export default function Header() {
  return (
    <nav className="px-base fixed z-50 flex h-20 w-full items-center justify-between bg-light/90 py-4 filter backdrop-blur-sm dark:bg-dark/90">
      <Avatar />
      <Hamburger />
      <section className="hidden items-center justify-center gap-12 lg:flex">
        <button
          className="a transform transition-all duration-700 dark:hover:scale-110"
          onClick={() => useScrollTo('home', null, -80)}
        >
          Home
        </button>
        <button
          className="a transform transition-all duration-700 dark:hover:scale-110"
          onClick={() => useScrollTo('projects')}
        >
          Projects
        </button>
        <button
          className="a transform transition-all duration-700 dark:hover:scale-110"
          onClick={() => useScrollTo('about')}
        >
          About
        </button>
        <Link
          href="mailto:soreilly424@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <a className="a transform transition-all duration-700 dark:hover:scale-110">
            Get in touch
          </a>
        </Link>
      </section>
      <ThemeButton />
    </nav>
  )
}
