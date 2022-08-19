import { Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import { scrollTo } from 'lib/helpers'
import { navLinks } from '../lib/links'
import Link from 'next/link'
import ThemeButton from './ThemeButton'

interface Props {
  logo?: string
  title?: string
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

export default function Header(props: Props) {
  const { state, setState } = props
  const { theme, setTheme } = useTheme()

  function handleMobileNav() {
    setState((prevState) => ({
      ...prevState,
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="px-base fixed z-50 flex h-20 w-full items-center justify-between bg-light/90 py-4 filter backdrop-blur-sm dark:bg-dark/90">
      <button
        onClick={() => scrollTo('home', null, -80)}
        className="relative hidden h-12 w-12 cursor-pointer transition-all duration-700 ease-linear hover:text-primary lg:flex"
      >
        <Image
          className="rounded-full object-cover"
          src="/images/mebw.webp"
          alt="Image of Sean"
          layout="fill"
          sizes="20vw"
          priority
        />
      </button>

      <button aria-label="Toggle Mobile Menu" className="lg:hidden">
        <Hamburger
          label="Show Menu"
          rounded
          color={theme === 'light' ? 'black' : 'white'}
          size={24}
          toggled={state.isMobileNavOpen}
          toggle={handleMobileNav}
        />
      </button>

      <div className="hidden items-center justify-center gap-12 lg:flex xl:gap-20">
        {navLinks.map((link) => (
          <button
            key={link.title}
            className="a transform transition-all duration-700 dark:hover:scale-110"
            onClick={() => scrollTo(link.url)}
          >
            {link.title}
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
      </div>
      <ThemeButton handleTheme={handleTheme} theme={theme} />
    </nav>
  )
}
