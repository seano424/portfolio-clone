import { projects } from 'utils/projects'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  heading?: string
}

export default function Projects(props: Props) {
  const { heading = 'Selected Projects' } = props
  return (
    <section id="projects" className="py-base px-base bg-gray-100">
      <h2 className="h2 mb-20 text-center leading-8">{heading}</h2>
      {projects.map((project) => (
        <article
          key={project.title}
          className="grid grid-cols-1 lg:grid-cols-8 gap-8 mb-40"
        >
          <div className="col-span-3 flex flex-col gap-8">
            <h4 className="h4">{project.title}</h4>
            <div className="flex flex-col gap-4">
              <p className="p">{project.description}</p>
              <ul className="flex gap-4">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Link href={project.siteUrl}>
                <a className="button hover:text-gray-50 hover:scale-105 transition-all duration-150 ease-linear">
                  Visit {project.title}
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
