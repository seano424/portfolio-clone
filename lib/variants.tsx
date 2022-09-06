export const mobileMenuVariants = {
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

export const themeVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}
