import { createContext, useCallback, useState } from 'react'

type ContextType = {
  toggle: () => void
  open: boolean
}

export const MobileContext = createContext<ContextType>({
  toggle: () => {},
  open: false,
})

const MobileContextProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen((previousState) => !previousState)
  }, [])

  return (
    <MobileContext.Provider value={{ open, toggle }}>
      {children}
    </MobileContext.Provider>
  )
}

export default MobileContextProvider
