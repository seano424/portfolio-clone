import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, LightningBoltIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
import { themeVariants } from 'lib/variants'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    setIcon(() =>
      theme === 'dark' ? (
        <LightningBoltIcon className="w-7 text-cyan-300 transition-opacity delay-75 duration-500 ease-linear" />
      ) : (
        <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
      )
    )
  }, [theme])

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <m.button
        aria-label="Button to change color theme"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        key={`theme-${theme}`}
        variants={themeVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {icon}
      </m.button>
    </AnimatePresence>
  )
}

export default ThemeButton
