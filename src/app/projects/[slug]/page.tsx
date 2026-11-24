import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { floorProjects } from "@/lib/projects"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/phone"

const siteUrl = "https://proshieldepoxy.com"

export const dynamicParams = false
export function generateStaticParams() {
  return floorProjects.map(project => ({ slug: project.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = floorProjects.find(item => item.slug === slug)
  if (!project) notFound()
  const title = `${project.title} | ProShield Epoxy`
  const url = `${siteUrl}/projects/${slug}`
  return {
    title, description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title, description: project.description, url, images: [project.photos[0].src] },
    twitter: { card: "summary_large_image", title, description: project.description, images: [project.photos[0].src] },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = floorProjects.find(item => item.slug === slug)
  if (!project) notFound()

  const url = `${siteUrl}/projects/${slug}`
  const projectPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: project.title,
    description: project.intro,
    about: {
      "@type": "Service",
      name: project.title,
      provider: { "@id": `${siteUrl}/#business` },
    },
    ...(project.location ? { contentLocation: { "@type": "City", name: project.location } } : {}),
    image: project.photos.map(photo => ({
      "@type": "ImageObject",
      contentUrl: new URL(photo.src, siteUrl).href,
      caption: photo.caption,
      width: photo.width,
      height: photo.height,
    })),
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(projectPage).replace(/</g, "\\u003c"),
    }} />
    <PageHero badge={project.location || "Completed Project"} title={project.title} subtitle={project.intro} />
    <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
    <article className="section-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="text-sm font-medium text-accent-text underline">All Projects</Link>
        <dl className="mt-7 flex flex-wrap gap-x-12 gap-y-4 border-y border-gray-200 py-5">
          <div><dt className="text-sm text-gray-600">Installer</dt><dd className="mt-1 font-semibold text-gray-900">ProShield Epoxy</dd></div>
          {project.location && <div><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">{project.location}</dd></div>}
          <div><dt className="text-sm text-gray-600">Finish</dt><dd className="mt-1 font-semibold text-gray-900">{project.finish}</dd></div>
        </dl>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg bg-accent px-6 py-3 font-semibold text-navy hover:bg-accent-hover">Get a Free Quote</Link>
          <a href={PHONE_HREF} className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900">Call {PHONE_DISPLAY}</a>
        </div>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          {project.photos.map((photo, index) => <figure key={photo.src}>
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 768px) 100vw, 50vw" preload={index === 0} className="h-auto w-full rounded-xl border border-gray-200" />
            <figcaption className="mt-3 text-sm text-gray-600">{photo.caption}</figcaption>
          </figure>)}
        </div>
        <section className="mt-12 max-w-3xl">
          <h2 className="font-heading font-semibold text-2xl text-gray-900">The Finished Floor</h2>
          {project.details.map(detail => <p key={detail} className="mt-4 leading-relaxed text-gray-600">{detail}</p>)}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={project.service.href} className="font-medium text-accent-text underline">Explore {project.service.label}</Link>
            <Link href="/contact" className="inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-navy hover:bg-accent-hover">Get a Free Quote</Link>
          </div>
        </section>
      </div>
    </article>
  </>
}
