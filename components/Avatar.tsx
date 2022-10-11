import Image from 'next/image'
import scrollTo from 'lib/scrollTo'

const Avatar = () => {
  return (
    <button
      aria-label="Scroll To Home Button"
      onClick={() => scrollTo('home', null, -80)}
      className="relative hidden h-12 w-12 cursor-pointer transition-all duration-700 ease-linear hover:text-primary lg:flex"
    >
      <Image
        className="rounded-full object-cover"
        src="/images/wave.jpg"
        alt="Photo by Matt Paul Catalano on Unsplash"
        layout="fill"
        sizes="20vw"
        priority
      />
    </button>
  )
}

export default Avatar
