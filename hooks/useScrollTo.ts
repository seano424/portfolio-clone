import { scroller } from 'react-scroll'

const useScrollTo = (name, duration = 1000, offset = 20) => {
  scroller.scrollTo(name, {
    duration: duration,
    delay: 100,
    smooth: true,
    offset: offset,
  })
}

export default useScrollTo
