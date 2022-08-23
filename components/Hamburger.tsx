import { useContext } from 'react'
import { MobileContext } from 'contexts/MobileContext'
import { useTheme } from 'next-themes'
import { Squash as Burger } from 'hamburger-react'

const Hamburger = () => {
  const { theme } = useTheme()
  const { open, toggle } = useContext(MobileContext)

  return (
    <button aria-label="Toggle Mobile Menu" className="lg:hidden">
      <Burger
        label="Show Menu"
        rounded
        color={theme === 'light' ? 'black' : 'white'}
        size={24}
        toggled={open}
        toggle={toggle}
      />
    </button>
  )
}

export default Hamburger
