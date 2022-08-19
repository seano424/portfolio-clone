import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
import { scrollTo } from 'lib/helpers'
import { navLinks } from '../lib/links'
import Link from 'next/link'

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
      <ul>
        <li className="hidden text-2xl font-bold uppercase transition-all duration-700 ease-linear hover:text-primary lg:flex">
          <button
            onClick={() => scrollTo('home', null, -80)}
            className="relative h-12 w-12 cursor-pointer"
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
        </li>
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
      </ul>
      <ul className="hidden items-center justify-center gap-12 lg:flex xl:gap-20">
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
        <Link
          href="mailto:soreilly424@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <a className="a transform transition-all duration-700 dark:hover:scale-110">
            Get in touch
          </a>
        </Link>
      </ul>
      <button aria-label="Button to change color theme" onClick={handleTheme}>
        <AnimatePresence initial={false}>
          <div className="flex ">
            <m.div
              key={`theme-${theme}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
              ) : (
                <SunIcon className="w-7 transition-opacity delay-75 duration-500 ease-linear" />
              )}
            </m.div>
          </div>
        </AnimatePresence>
      </button>
    </nav>
  )
}
