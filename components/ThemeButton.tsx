import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
import { themeVariants } from 'lib/variants'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    setIcon(() =>
      theme === 'dark' ? (
        <SunIcon className="w-7 transition-opacity delay-75 duration-500 ease-linear" />
      ) : (
        <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
      )
    )
  }, [theme])

  return (
    <button
      aria-label="Button to change color theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        <div className="flex ">
          <m.div
            key={`theme-${theme}`}
            variants={themeVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {icon}
          </m.div>
        </div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeButton
