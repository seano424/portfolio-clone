import Image from 'next/image'
import Link from 'next/link'
import GitHub from '../public/icons/GitHub'
import { projects } from 'lib/portfolio'
import { Element } from 'react-scroll'

export default function Projects() {
  return (
    <Element name="projects">
      <section className="px-base py-base bg-gray-100 dark:bg-gray-900">
        <h2 className="h2 mb-4 text-center sm:mb-16">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Recent{' '}
          </span>
          Projects
        </h2>
        {projects.map((project, i) => (
          <article
            key={i}
            className="mb-10 grid grid-cols-1 gap-5 lg:mb-40 lg:grid-cols-8 lg:gap-20 xl:mb-20 xl:p-10"
          >
            {/* Content */}
            <div className="flex flex-col justify-center gap-4 text-center lg:col-span-4 lg:text-left xl:col-span-3">
              <h3 className="h3 font-extrabold uppercase tracking-tighter text-secondary dark:text-white">
                {project.title}
              </h3>
              <div className="flex flex-col gap-4">
                <p className="p">{project.description}</p>
              </div>
              <div className="hidden items-center justify-center gap-4 lg:flex lg:justify-start">
                <Link href={project.siteUrl}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="button text-sm dark:bg-light dark:text-black lg:text-xl"
                  >
                    Visit Site
                  </a>
                </Link>
                <Link href={project.githubUrl}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-full border-4 p-3"
                  >
                    <span className="sr-only">GitHub</span>
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

            {/* Image */}
            <div className="container relative h-[320px] w-full rounded-lg lg:col-span-4 xl:col-span-5 xl:h-[450px]">
              <Image
                className="rounded-lg object-cover object-top"
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
