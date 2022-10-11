import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Cursor from './Cursor'

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false)

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
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-light font-open dark:bg-dark dark:text-blue-50">
      <Head>
        <title>Sean OReilly's Portfolio</title>
        <meta
          name="description"
          content="Sean OReilly's Web Development Portfolio"
          key="desc"
        />
        <meta
          property="og:title"
          content="Sean OReilly's Web Development Portfolio"
        />
        <meta
          property="og:description"
          content="Sean OReilly's Web Development Portfolio"
        />
        <meta property="og:image" content="/images/portfolio-1.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MobileMenu />
      {mounted && <Cursor />}
      <main>
        <div className="h-full w-full flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
