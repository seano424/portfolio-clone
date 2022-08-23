import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
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
  )
}

export default ThemeButton
