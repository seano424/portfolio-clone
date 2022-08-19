import { Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'
// import { Squash as Hamburger } from 'hamburger-react'
import { scrollTo } from 'lib/helpers'
import Link from 'next/link'
import ThemeButton from './ThemeButton'
import Hamburger from './Hamburger'
import Avatar from './Avatar'

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

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="px-base fixed z-50 flex h-20 w-full items-center justify-between bg-light/90 py-4 filter backdrop-blur-sm dark:bg-dark/90">
      <Avatar />
      <Hamburger theme={theme} state={state} setState={setState} />
      <section className="hidden items-center justify-center gap-12 lg:flex xl:gap-20">
        <button
          className="a transform transition-all duration-700 dark:hover:scale-110"
          onClick={() => scrollTo('projects')}
        >
          Projects
        </button>
        <button
          className="a transform transition-all duration-700 dark:hover:scale-110"
          onClick={() => scrollTo('about')}
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
      <ThemeButton handleTheme={handleTheme} theme={theme} />
    </nav>
  )
}
