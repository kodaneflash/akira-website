import { Variants } from 'framer-motion'

// Common animation variants for Framer Motion
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const slideUpVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const slideDownVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const slideLeftVariants: Variants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const slideRightVariants: Variants = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const scaleInVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'backOut'
    }
  }
}

export const rotateInVariants: Variants = {
  hidden: {
    rotate: -180,
    scale: 0.8,
    opacity: 0
  },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'backOut'
    }
  }
}

export const bounceInVariants: Variants = {
  hidden: {
    scale: 0.3,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'backOut',
      type: 'spring',
      bounce: 0.4
    }
  }
}

// Stagger animations for containers
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
}

// Modal/overlay variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

export const overlayVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

// Navigation variants
export const navVariants: Variants = {
  closed: {
    x: '-100%',
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

// Card hover variants
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeIn'
    }
  }
}

// Button variants
export const buttonVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeIn'
    }
  }
}

// Loading spinner variants
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

// Text reveal variants
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

// Typewriter effect variants
export const typewriterVariants: Variants = {
  hidden: {
    width: 0
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'linear'
    }
  }
}

// Parallax variants (for scroll-linked animations)
export const parallaxVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}
