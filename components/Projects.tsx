import Card from "./Card"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-base w-full border-8 border-red-50 px-10 cno"
    >
      <h2 className="h2 text-center font-black italic mb-10 drop-shadow-lg">
        Projects
      </h2>
      <div className="gap-10 grid xl:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
