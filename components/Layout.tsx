import { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import Header from './Header'
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
    setState((prevState) => ({
      ...prevState,
      mounted: true,
    }))
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-light font-open dark:bg-dark dark:text-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header state={state} setState={setState} title={title} />
      <MobileMenu state={state} setState={setState} />
      {state.mounted && <Cursor />}
      <main className="relative top-20">
        <div className="h-full w-full flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
