import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const messages = [
  'This is unexplored terrortory! I say, we better get back!',
  "It's looking like we may be lost 👀",
  "Oh my! What's over there!? Let's get outta here!",
]

export default function Custom404() {
  const [message, setMessage] = useState(null)
  useEffect(
    () => setMessage(messages[Math.floor(Math.random() * messages.length)]),
    []
  )

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Content */}
      <div className="py-base flex flex-1 flex-col items-center justify-center gap-10 bg-secondary px-10 text-center lg:w-1/2">
        <h1 className="text-5xl font-black text-white lg:text-7xl lg:leading-[1.2]">
          <span className="font-mono italic">404</span>
          <br />
          {message}
        </h1>
        <Link href="/">
          <a className="button bg-white font-mono font-black text-secondary">
            back to homebase!
          </a>
        </Link>
      </div>
      {/* Image */}
      <div className="py-base bg-blue-800/90 px-10 lg:w-1/2">
        <div className="relative h-[380px] w-full lg:h-full">
          <Image
            layout="fill"
            className="object-contain"
            src="/images/404.svg"
            alt="404 Image"
          />
        </div>
      </div>
    </div>
  )
}
