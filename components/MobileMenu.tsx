import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { mobileNavLinks } from 'lib/links'
import { scrollTo } from 'lib/functions'

interface Props {
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

export default function Menu(props: Props) {
  const { state, setState } = props

  async function delay(ms) {
    await new Promise((resolve) => setTimeout(() => resolve(null), ms))
  }

  function handleMobileNav() {
    setState((prevState) => ({
      ...prevState,
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }

  const handleNavigation = async (url) => {
    scrollTo(url, null, -60)
    handleMobileNav()
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {state.isMobileNavOpen && (
        <m.div
          key="modal"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -400,
            transition: {
              duration: .6,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          className="lg:hidden fixed top-20 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm min-h-screen z-50 w-10/12 md:w-1/2 flex justify-center items-start"
        >
          <ul className="px-base py-base grid gap-8 sm:gap-16">
            {mobileNavLinks.map((link, i) => (
              <li key={i}>
                <button
                  className={`hover:text-dark dark:hover:text-light transition-all ease-linear drop-shadow-2xl font-black uppercase tracking-tighter text-fuchsia-400 text-4xl sm:text-6xl
                    ${i === 0 && 'duration-200'}
                    ${i === 1 && 'duration-300'}
                    ${i === 2 && 'duration-500'}
                    ${i === 3 && 'duration-700'}
                  `}
                  onClick={() => handleNavigation(link.url)}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  )
}
