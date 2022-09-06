import Link from 'next/link'
import ThemeButton from './ThemeButton'
import MenuIcon from './MenuIcon'
import Avatar from './Avatar'
import scrollTo from 'lib/scrollTo'

const navigation = ['home', 'projects', 'about']

export default function Header() {
  return (
    <nav className="px-base fixed z-50 flex h-20 w-full items-center justify-between bg-light/90 py-4 filter backdrop-blur-sm dark:bg-dark-secondary/90">
      <Avatar />
      <MenuIcon />
      <section className="hidden items-center justify-center gap-12 lg:flex">
        {navigation.map((location) => (
          <button
            key={location}
            aria-label={`Scroll To ${location} Button`}
            className="a transform capitalize transition-all duration-700 dark:hover:scale-110"
            onClick={() => scrollTo(location, null, -80)}
          >
            {location}
          </button>
        ))}
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
