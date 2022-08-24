import Image from 'next/image'
import useScrollTo from 'hooks/useScrollTo'

const Avatar = () => {
  return (
    <button
      onClick={() => useScrollTo('home', null, -80)}
      className="relative hidden h-12 w-12 cursor-pointer transition-all duration-700 ease-linear hover:text-primary lg:flex"
    >
      <Image
        className="rounded-full object-cover"
        src="/images/mebw.webp"
        alt="Image of Sean"
        layout="fill"
        sizes="20vw"
        priority
      />
    </button>
  )
}

export default Avatar
