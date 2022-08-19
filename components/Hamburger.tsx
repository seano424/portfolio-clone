import { Dispatch, SetStateAction } from 'react'
import { Squash as Burger } from 'hamburger-react'

interface Props {
  theme: string
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

const Hamburger = (props: Props) => {
  const { theme, state, setState } = props
  function handleMobileNav() {
    setState((prevState) => ({
      ...prevState,
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }
  return (
    <button aria-label="Toggle Mobile Menu" className="lg:hidden">
      <Burger
        label="Show Menu"
        rounded
        color={theme === 'light' ? 'black' : 'white'}
        size={24}
        toggled={state.isMobileNavOpen}
        toggle={handleMobileNav}
      />
    </button>
  )
}

export default Hamburger
