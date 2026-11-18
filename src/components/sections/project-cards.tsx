import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { floorProjects } from "@/lib/projects"

export function ProjectCards({ service, heading = "Completed Projects" }: { service?: string; heading?: string }) {
  const projects = service ? floorProjects.filter(project => project.service.href === service) : floorProjects

  return (
    <section className="section-white py-14 sm:py-20 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">{heading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-accent hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-text">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image src={project.photos[0].src} alt={project.photos[0].alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600">{project.location || "Showroom"}</p>
                <h3 className="mt-2 font-heading font-semibold text-xl text-gray-900">{project.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-accent-text font-medium">View Project <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
