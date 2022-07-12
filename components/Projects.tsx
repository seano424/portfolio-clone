import { projects } from 'utils/projects'
import ProjectCard from './ProjectCard'

interface Props {
  heading: string
}

export default function Projects(props: Props) {
  const { heading = 'Selected Projects' } = props
  return (
    <section
      id="projects"
      className="py-base px-base border-t border-neutral-100 dark:border-dark-secondary"
    >
      <h2 className="h2 mb-20 font-black drop-shadow-2xl">{heading}</h2>
      {projects.map((project, i) => (
        <ProjectCard index={i} key={i} {...project} />
      ))}
    </section>
  )
}
