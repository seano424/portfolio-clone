import { projects } from 'utils/projects'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  heading?: string
}

export default function Projects(props: Props) {
  const { heading = 'Selected Projects' } = props
  return (
    <section
      id="projects"
      className="py-base px-base bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="h2 mb-20 text-center leading-8">{heading}</h2>
      {projects.map((project, i) => (
        <article
          key={i}
          className="grid grid-cols-1 lg:grid-cols-8 gap-8 mb-40"
        >
          <div className="col-span-3 flex flex-col gap-8">
            <h4 className="h4">{project.title}</h4>
            <div className="flex flex-col gap-4">
              <p className="p">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Link href={project.siteUrl}>
                <a className="button dark:bg-light dark:text-black">
                  Visit {project.title}
                </a>
              </Link>
              <Link href={projects[0].githubUrl}>
                <a className="border-4 rounded-full p-3 flex justify-center items-center">
                  <svg
                    className="hover:text-primary hover:scale-105 transition-all duration-300 ease-linear text-emerald-500 dark:text-green-200 dark:hover:text-primary font-black h-8 w-8"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-5 shadow-2xl rounded-2xl">
            <Image
              className="object-cover rounded-2xl"
              src={project.image}
              alt={project.title}
              height="450"
              width="730"
            />
          </div>
        </article>
      ))}
    </section>
  )
}
