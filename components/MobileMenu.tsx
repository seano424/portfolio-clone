import { useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { mobileNavLinks } from 'lib/links'
import useShowMobileNav from 'hooks/useShowMobileNav'
import useOnClickOutside from 'hooks/useOnClickOutside'
import useScrollTo from 'hooks/useScrollTo'

export default function Menu() {
  const [showMobileNav, setShowMobileNav] = useShowMobileNav()
  const ref = useRef()
  useOnClickOutside(ref, () => setShowMobileNav((prev) => !prev))

  const handleNavigation = async (url) => {
    useScrollTo(url, 900, -80)
    setShowMobileNav((prev) => !prev)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showMobileNav && (
        <m.div
          ref={ref}
          key="mobileMenu"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -400,
            transition: {
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          className="fixed top-20 z-50 flex min-h-screen w-10/12 items-start justify-center bg-light/90 filter backdrop-blur-sm dark:bg-dark/90 md:w-1/2 lg:hidden"
        >
          <ul className="px-base mt-10 grid gap-8 sm:gap-16">
            {mobileNavLinks.map((link, i) => (
              <li key={i}>
                <button
                  className={`text-4xl font-black uppercase tracking-tighter text-fuchsia-400 drop-shadow-2xl transition-all ease-linear hover:text-dark dark:hover:text-light sm:text-6xl
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
            <Link
              href="mailto:soreilly424@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <a className="text-4xl font-black uppercase tracking-tighter text-fuchsia-400 drop-shadow-2xl transition-all ease-linear hover:text-dark dark:hover:text-light sm:text-6xl">
                Contact
              </a>
            </Link>
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  )
}
