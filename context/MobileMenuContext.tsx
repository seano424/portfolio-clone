import { createContext, ReactNode } from 'react'

type MobileMenu = {
  open: boolean
}

const defaultMobileMenu: MobileMenu = {
  open: false,
}

export const MobileMenuContext = createContext(defaultMobileMenu)
export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MobileMenuContext.Provider value={defaultMobileMenu}>
      {children}
    </MobileMenuContext.Provider>
  )
}
