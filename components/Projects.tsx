import Image from 'next/image'
import Link from 'next/link'
import GitHub from '../public/icons/GitHub'
import { projects } from 'lib/projectData'
import { Element } from 'react-scroll'
interface Props {
  heading?: string
}

export default function Projects(props: Props) {
  const { heading = 'Featured Projects' } = props
  return (
    <Element name="projects">
      <section className="px-base py-base bg-gray-100 dark:bg-gray-900">
        <h2 className="h2 mb-16 text-center">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured{' '}
          </span>
          Projects
        </h2>
        {projects.map((project, i) => (
          <article
            key={i}
            className="mb-10 grid grid-cols-1 border-8 lg:mb-40 lg:grid-cols-8 lg:gap-8 lg:shadow-none xl:mb-20 xl:rounded-2xl xl:p-10"
          >
            <div className="col-span-8 flex flex-col gap-4 py-4 text-center lg:col-span-3 lg:text-left">
              <h3 className="h3 font-extrabold uppercase tracking-tighter text-secondary dark:text-white">
                {project.title}
              </h3>
              <div className="hidden flex-col gap-4 lg:flex">
                <p className="p">{project.description}</p>
              </div>
              <div className="hidden items-center justify-center gap-4 lg:flex lg:justify-start">
                <Link href={project.siteUrl}>
                  <a className="button text-sm dark:bg-light dark:text-black lg:text-xl">
                    Visit Site
                  </a>
                </Link>
                <Link href={projects[0].githubUrl}>
                  <a className="flex items-center justify-center rounded-full border-4 p-3">
                    <GitHub className="h-5 w-5 font-black text-emerald-500 transition-all duration-300 ease-linear hover:scale-105 hover:text-primary dark:text-green-200 dark:hover:text-primary lg:h-8 lg:w-8" />
                  </a>
                </Link>
              </div>
              <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="relative col-span-8 h-64 w-full rounded-2xl shadow-2xl lg:col-span-5 lg:h-[450px]">
              <Image
                className="object-cover xl:rounded-xl"
                src={project.image}
                alt={project.title}
                layout="fill"
              />
            </div>
          </article>
        ))}
      </section>
    </Element>
  )
}
