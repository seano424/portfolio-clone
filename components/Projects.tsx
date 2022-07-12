import Card from './Card'
import Image from 'next/image'
import {} from '@heroicons/react/solid'
import AltCard from './AltCard'
import { projects } from 'utils/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-base px-base border-t border-neutral-100 dark:border-dark-secondary">
      <h2 className="h2 mb-20 font-black drop-shadow-2xl">Selected Projects</h2>
      {projects.map((project, i) => (
        <AltCard index={i} key={project.title} {...project} />
      ))}
    </section>
  )
}
