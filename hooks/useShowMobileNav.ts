import { atom, useRecoilState } from 'recoil'

const showMobileNav = atom({
  key: 'showMobileNav',
  default: false,
})

const useShowMobileNav = () => useRecoilState(showMobileNav)

export default useShowMobileNav
