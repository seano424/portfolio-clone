const navLinks = [
  {
    title: 'About',
    url: 'about',
  },
  {
    title: 'Projects',
    url: 'projects',
  },
  {
    title: 'Contact',
    url: 'contact',
  },
  {
    title: 'Resume',
    url: 'resume',
  },
]

const mobileNavLinks = [
  {
    title: 'Home',
    url: 'home',
  },
  {
    title: 'Projects',
    url: 'projects',
  },
  {
    title: 'About',
    url: 'about',
  },
  {
    title: 'Contact',
    url: 'contact',
  },
  {
    title: 'Resume',
    url: 'resume',
  },
]

const socialLinks = [
  {
    name: 'Twitter Link',
    classes:
      'hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:hover:text-white dark:text-secondary',
    href: 'https://twitter.com/sea_oreilly',
    icon: 'Twitter',
  },
  {
    name: 'GitHub Link',
    classes:
      'hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200 dark:hover:text-primary',
    href: 'https://github.com/seano424',
    icon: 'GitHub',
  },
  {
    name: 'LinkedIn Link',
    classes:
      'hover:text-secondary transition-all duration-700 ease-linear text-primary dark:text-blue-200 dark:hover:text-white',
    href: 'https://www.linkedin.com/in/sea-oreilly/',
    icon: 'LinkedIn',
  },
]

const projects = [
  {
    image: '/images/feedback-board.png',
    githubUrl: '/',
    siteUrl: '/',
    title: 'Tik Tok Clone',
    tech: ['TypeScript', 'NextJS', 'TailwindCSS', 'TypeScript'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/images/feedback-board.png',
    githubUrl: '/',
    siteUrl: '/',
    title: 'Artist Site',
    tech: ['React', 'Sanity CMS', 'NextJS', 'TailwindCSS'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]



export { navLinks, mobileNavLinks, socialLinks, projects }
