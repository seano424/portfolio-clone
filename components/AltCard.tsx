import Image from 'next/image'

interface Props {
  image: string
  githubUrl: string
  siteUrl: string
  title: string
  tech: string[]
  description: string
  index: number
}

export default function AltCard(props: Props) {
  const {
    image = '/images/feedback-board.png',
    githubUrl = '/',
    siteUrl = '/',
    title = 'Project Name',
    tech = ['React', 'TypeScript', 'NextJS', 'TailwindCSS'],
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    index,
  } = props

  const odd = index % 2 !== 0

  return (
    <div
      className={`flex relative justify-end mb-36 shadow-lg rounded-lg ${
        odd && 'flex-row-reverse'
      }`}
    >
      <div className={`w-7/12 absolute h-full ${odd ? 'right-0' : 'left-0'}`}>
        <div
          className={`relative h-full w-full cursor-pointer ${
            odd ? 'rounded-l-lg' : 'rounded-r-lg'
          }`}
        >
          <Image
            src={image}
            alt="Project Image"
            layout="fill"
            className={`object-cover z-10`}
          />
        </div>
      </div>
      <div
        className={`w-7/12 h-full relative flex flex-col gap-8 px-10 py-20 dark:bg-dark-secondary dark:text-light rounded-lg ${
          odd ? 'items-start' : 'items-end'
        }`}
      >
        <div className={`flex flex-col ${odd ? 'items-start' : 'items-end'}`}>
          <p className="font-mono">Featured Project</p>
          <h4 className="h4">{title}</h4>
        </div>
        <p
          className={`p-5 max-w-md shadow-2xl bg-light dark:bg-dark-secondary dark:text-light rounded-lg z-20 ${
            odd ? '-ml-5 text-left' : '-mr-5 text-right'
          }`}
        >
          {description}
        </p>
        <div
          className={`flex flex-col ${odd ? 'items-start' : 'items-end'} gap-4`}
        >
          <ul className="flex gap-8">
            {tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <ul className="flex items-center gap-8">
            <a
              href={githubUrl}
              className=""
              aria-label=""
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href={siteUrl}
              className=""
              aria-label=""
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
