import { AnimatePresence, m } from 'framer-motion'
import { mobileNavLinks } from 'utils/constants'

interface Props {
  state: {
    isMobileNavOpen: boolean
  }
}

export default function Menu(props: Props) {
  const { state } = props

  return (
    <AnimatePresence>
      {state.isMobileNavOpen && (
        <m.div
          key="modal"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          className="lg:hidden fixed top-20 bg-light/90 dark:bg-dark/90 filter backdrop-blur-sm min-h-screen z-50 w-3/4 md:w-1/2 flex justify-center py-base items-start"
        >
          <ul className="px-base pt-20 sm:py-base text-4xl sm:text-6xl font-black uppercase grid gap-8 sm:gap-16 tracking-tighter text-fuchsia-400">
            {mobileNavLinks.map((link, i) => (
              <li key={i}>
                <a
                  className={`hover:text-dark dark:hover:text-light transition-all ease-linear drop-shadow-2xl 
                    ${i === 0 && 'duration-200'}
                    ${i === 1 && 'duration-300'}
                    ${i === 2 && 'duration-500'}
                    ${i === 3 && 'duration-700'}
                  `}
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  )
}
