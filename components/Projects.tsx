import Image from 'next/image'
import Link from 'next/link'
import GitHub from '../public/icons/GitHub'
import { projects } from 'utils/constants'
import { Element } from 'react-scroll'
interface Props {
  heading?: string
}

export default function Projects(props: Props) {
  const { heading = 'Featured Projects' } = props
  return (
    <Element name="projects">
      <section className="py-base bg-gray-100 dark:bg-gray-900 px-base">
        <h2 className="h2 pt-10 pb-5 uppercase text-secondary text-center lg:mb-32 lg:leading-8 xl:my-20">
          {heading}
        </h2>
        {projects.map((project, i) => (
          <article
            key={i}
            className="grid grid-cols-1 mb-10 xl:rounded-2xl xl:shadow-2xl lg:shadow-none lg:mb-40 lg:grid-cols-8 lg:gap-8 xl:mb-20 xl:p-10"
          >
            <div className="col-span-8 lg:col-span-3 flex flex-col gap-4 py-4 text-center lg:text-left">
              <h3 className="h3 uppercase">{project.title}</h3>
              <div className="hidden lg:flex flex-col gap-4">
                <p className="p">{project.description}</p>
              </div>
              <div className="hidden lg:flex justify-center items-center gap-4 lg:justify-start">
                <Link href={project.siteUrl}>
                  <a className="button text-sm dark:bg-light dark:text-black lg:text-xl">
                    Visit Site
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
            <div className="col-span-8 lg:col-span-5 shadow-2xl rounded-2xl relative w-full h-64 lg:h-[450px]">
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
