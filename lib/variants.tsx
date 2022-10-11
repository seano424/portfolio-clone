export const mobileMenuVariants = {
  hidden: { x: -600 },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
  exit: {
    x: -600,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
}

export const themeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1.3,
    transition: {
      duration: 0.1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}
