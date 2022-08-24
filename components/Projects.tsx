import Image from 'next/image'
import Link from 'next/link'
import GitHub from '../public/icons/GitHub'
import { projects } from 'lib/projectData'
import { Element } from 'react-scroll'

export default function Projects() {
  return (
    <Element name="projects">
      <section className="px-base py-base bg-gray-100 dark:bg-gray-900">
        <h2 className="h2 mb-4 text-center sm:mb-16">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured{' '}
          </span>
          Projects
        </h2>
        {projects.map((project, i) => (
          <article
            key={i}
            className="mb-10 grid grid-cols-1 md:mb-40 md:grid-cols-8 md:gap-8 md:shadow-none xl:mb-20 xl:rounded-2xl xl:p-10"
          >
            <div className="col-span-8 flex flex-col gap-4 py-4 text-center md:col-span-4 md:text-left xl:col-span-3">
              <h3 className="h3 font-extrabold uppercase tracking-tighter text-secondary dark:text-white">
                {project.title}
              </h3>
              <div className="hidden flex-col gap-4 md:flex">
                <p className="p">{project.description}</p>
              </div>
              <div className="hidden items-center justify-center gap-4 md:flex md:justify-start">
                <Link href={project.siteUrl}>
                  <a className="button text-sm dark:bg-light dark:text-black md:text-xl">
                    Visit Site
                  </a>
                </Link>
                <Link href={projects[0].githubUrl}>
                  <a className="flex items-center justify-center rounded-full border-4 p-3">
                    <GitHub className="h-5 w-5 font-black text-emerald-500 transition-all duration-300 ease-linear hover:scale-105 hover:text-primary dark:text-green-200 dark:hover:text-primary md:h-8 md:w-8" />
                  </a>
                </Link>
              </div>
              <ul className="flex flex-wrap justify-center gap-4 md:justify-start">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="relative col-span-8 h-64 w-full rounded-2xl shadow-2xl md:col-span-4 md:h-[450px] xl:col-span-5">
              <Image
                className="rounded-xl object-cover"
                src={project.image}
                alt={project.title}
                layout="fill"
                priority
                sizes="(min-width: 75em) 50vw,
                90vw"
              />
            </div>
          </article>
        ))}
      </section>
    </Element>
  )
}
