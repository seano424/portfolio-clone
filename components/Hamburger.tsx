import { useContext, useEffect, useState } from 'react'
import { MobileContext } from 'contexts/MobileContext'
import { useTheme } from 'next-themes'
import { Squash } from 'hamburger-react'

const Hamburger = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState('white')
  const { open, toggle } = useContext(MobileContext)

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
        toggled={open}
        toggle={toggle}
      />
    </button>
  )
}

export default Hamburger
