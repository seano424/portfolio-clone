import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Squash } from 'hamburger-react'
import useShowMobileNav from 'hooks/useShowMobileNav'

const MenuIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState('white')
  const [showMobileNav, setShowMobileNav] = useShowMobileNav()

  useEffect(() => {
    setColor(theme === 'dark' ? 'white' : 'black')
  }, [theme])

  return (
    <button aria-label="Toggle Mobile Menu" className="lg:hidden">
      <Squash
        label="Show Menu"
        rounded
        color={color}
        size={24}
        toggled={showMobileNav}
        toggle={setShowMobileNav}
      />
    </button>
  )
}

export default MenuIcon
