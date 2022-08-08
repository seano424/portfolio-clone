import Image from 'next/image'
import Link from 'next/link'
import GitHub from '../public/icons/GitHub'
import { projects } from 'utils/projects'
import { Element } from 'react-scroll'
interface Props {
  heading?: string
}

export default function Projects(props: Props) {
  const { heading = 'Selected Projects' } = props
  return (
    <Element name="projects">
      <section className="py-base px-base bg-gray-100 dark:bg-gray-900">
        <h2 className="h2 uppercase text-secondary my-20 tracking-tighter lg:mb-32 text-center lg:leading-8">
          {heading}
        </h2>
        {projects.map((project, i) => (
          <article
            key={i}
            className="grid grid-cols-1 lg:grid-cols-8 gap-8 mb-20 rounded-md shadow-md lg:shadow-none lg:mb-40"
          >
            <div className="col-span-8 lg:col-span-3 flex flex-col gap-8 text-center lg:text-left">
              <h4 className="h4 uppercase tracking-tighter font-black">
                {project.title}
              </h4>
              <div className="hidden lg:flex flex-col gap-4">
                <p className="p">{project.description}</p>
              </div>
              <div className="hidden lg:flex justify-center items-center gap-4 lg:justify-start">
                <Link href={project.siteUrl}>
                  <a className="button text-sm dark:bg-light dark:text-black lg:text-xl">
                    Visit {project.title}
                  </a>
                </Link>
                <Link href={projects[0].githubUrl}>
                  <a className="border-4 rounded-full p-3 flex justify-center items-center">
                    <GitHub className="hover:text-primary hover:scale-105 transition-all duration-300 ease-linear text-emerald-500 dark:text-green-200 dark:hover:text-primary font-black w-5 h-5 lg:h-8 lg:w-8" />
                  </a>
                </Link>
              </div>
              <ul className="flex justify-center gap-4 flex-wrap lg:justify-start">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-8 lg:col-span-5 shadow-2xl rounded-2xl">
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
    </Element>
  )
}
