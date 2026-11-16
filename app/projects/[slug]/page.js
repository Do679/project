import Link from "next/link";
import { notFound } from "next/navigation";
import { cv } from "@/data/cv";

// A static site must know every project page at build time.
// This builds one page per project in data/cv.js.
export function generateStaticParams() {
  return cv.projects.map((p) => ({ slug: p.slug }));
}

// Any slug that is not in cv.js shows the 404 page.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = cv.projects.find((p) => p.slug === slug);
  return { title: `${project?.name} | ${cv.name}` };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params; // params is a Promise in Next.js 15+
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-16">
      <Link href="/#projects" className="text-sm text-gray-500 hover:underline">
        ← Back to projects
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{project.name}</h1>
            <p className="mt-2 text-gray-500">
        {project.organization} · {project.period} · {project.role} · {project.team}
      </p>
            <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Problem</h2>
          <p className="mt-1 leading-relaxed text-gray-700">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Action</h2>
          <p className="mt-1 leading-relaxed text-gray-700">{project.action}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Result</h2>
          <p className="mt-1 leading-relaxed text-gray-700">{project.result}</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded bg-gray-100 px-2 py-1 text-sm">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-4">
        {project.demo && (
          <a href={project.demo} className="underline">
            Live demo
          </a>
        )}
        {project.repo && (
          <a href={project.repo} className="underline">
            Source code
          </a>
        )}
      </div>
    </article>
  );
}
