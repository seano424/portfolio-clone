import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
import { scrollTo } from 'lib/functions'
import { navLinks } from '../lib/links'

interface Props {
  logo?: string
  title?: string
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

export default function Navbar(props: Props) {
  const { state, setState } = props
  const [navState, setNavState] = useState({
    color: 'white',
    icon: null,
  })
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setNavState(() => ({
      color: theme === 'dark' ? 'white' : 'black',
      icon:
        theme === 'dark' ? (
          <SunIcon className="w-7 transition-opacity duration-500 delay-75 ease-linear" />
        ) : (
          <MoonIcon className="w-7 text-fuchsia-400 transition-opacity duration-500 delay-75 ease-linear" />
        ),
    }))
  }, [theme])

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
    <nav className="fixed h-20 z-50 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm flex justify-between items-center w-full py-4 px-base">
      <ul>
        <li className="hidden lg:flex uppercase font-bold text-2xl hover:text-primary transition-all duration-700 ease-linear">
          <button
            onClick={() => scrollTo('home')}
            className="relative h-12 w-12 cursor-pointer"
          >
            <Image
              className="object-cover rounded-full"
              src="/images/mebw.webp"
              alt="Image of Sean"
              layout="fill"
              sizes="20vw"
              priority
            />
          </button>
        </li>
        <li id="hamburger" className="lg:hidden">
          <Hamburger
            label="Show Menu"
            rounded
            color={navState.color}
            size={24}
            toggled={state.isMobileNavOpen}
            toggle={handleMobileNav}
          />
        </li>
      </ul>
      <ul className="gap-12 xl:gap-20 hidden lg:flex items-center justify-center">
        {navLinks.map((link) => (
          <li
            className="transform transition-all duration-700 dark:hover:scale-110"
            key={link.title}
          >
            <button className="a" onClick={() => scrollTo(link.url)}>
              {link.title}
            </button>
          </li>
        ))}
      </ul>
      <ul
        id="themeButton"
        className="flex items-center gap-8 uppercase font-bold text-2xl"
      >
        <li className="flex w-10 h-10 justify-center items-center">
          <button
            aria-label="Button to change color theme"
            onClick={handleTheme}
          >
            <AnimatePresence initial={false}>
              <div className="flex ">
                <m.div
                  key={`theme-${theme}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {navState.icon}
                </m.div>
              </div>
            </AnimatePresence>
          </button>
        </li>
      </ul>
    </nav>
  )
}
