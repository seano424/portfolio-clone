import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import useShowMobileNav from 'hooks/useShowMobileNav'
import { mobileNavLinks } from 'lib/links'
import scrollTo from 'lib/scrollTo'

export default function Menu() {
  const [showMobileNav, setShowMobileNav] = useShowMobileNav()
  const handleNavigation = async (url) => {
    scrollTo(url, 900, -80)
    setShowMobileNav((prev) => !prev)
  }
  const mobileMenu = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: -600,
      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showMobileNav && (
        <m.div
          key="mobileMenu"
          variants={mobileMenu}
          initial="hidden"
          animate="show"
          exit="exit"
          className="px-base py-base fixed top-20 z-20  flex min-h-screen w-10/12 flex-col gap-8 bg-light/90 shadow-2xl filter backdrop-blur-sm dark:bg-dark/90 md:w-2/3 lg:hidden"
        >
          {mobileNavLinks.map((link, i) => (
            <button
              key={link.title}
              aria-label={`Scroll Button To Section ${link.title}`}
              className={`mobile-link
                ${i === 0 && 'duration-200'}
                ${i === 1 && 'duration-300'}
                ${i === 2 && 'duration-500'}
              `}
              onClick={() => handleNavigation(link.url)}
            >
              {link.title}
            </button>
          ))}
          <Link
            href="mailto:soreilly424@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <a className="mobile-link duration-700">Contact</a>
          </Link>
        </m.div>
      )}
    </AnimatePresence>
  )
}
