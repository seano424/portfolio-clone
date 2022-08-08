import { scroller } from 'react-scroll'

export const scrollTo = (name) => {
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: 20,
  })
}
