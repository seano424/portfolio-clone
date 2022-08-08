import { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Cursor from './Cursor'
interface Props {
  children: ReactNode
  title?: string
  logo?: string
}

export default function Layout(props: Props) {
  const { children, title = "Sean OReilly's Portfolio" } = props
  const [state, setState] = useState({
    isMobileNavOpen: false,
    mounted: false,
  })

  useEffect(() => {
    console.log(
      '\n',
      'Hello there!',
      '\n',
      'Want to reach out?!',
      '\n',
      'Shoot me an email @',
      '\n',
      'soreilly424@gmail.com',
      '\n',
      '🤗'
    )
  }, [])

  return (
    <div className="flex flex-col font-open min-h-screen bg-light dark:bg-dark dark:text-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar state={state} setState={setState} title={title} />
      <MobileMenu state={state} />
      <Cursor />
      <main className="relative">
        <div className="flex-1 w-full h-full">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
