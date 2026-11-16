import Image from "next/image";
import { cv } from "@/data/cv";
import { withBase } from "@/lib/withBase";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
// TODO: replace assets/avatar.svg with your own photo (e.g. assets/me.jpg).
// Importing the image (instead of using a "/public" path) keeps it working on GitHub Pages.
import avatar from "@/assets/avatar.svg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center">
        <Image
          src={avatar}
          alt={cv.name}
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold">{cv.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{cv.title}</p>
          <p className="mt-1 text-gray-500">{cv.location}</p>
          {cv.cvFile && (
            <a
              href={withBase(`/${cv.cvFile}`)}
              download
              className="mt-4 inline-block rounded bg-brand px-4 py-2 text-white"
            >
              Download CV
            </a>
          )}
        </div>
      </section>

      <Section id="about" title="About">
        <p className="leading-relaxed text-gray-700">{cv.summary}</p>
      </Section>

            <Section id="highlights" title="Career Highlights">
        <ul className="list-disc space-y-1 ps-5">
          {cv.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <ul className="space-y-4">
          {cv.education.map((e) => (
            <li key={e.degree}>
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="text-gray-600">
                {e.school} · {e.location} · {e.period}
              </p>
              <p className="text-gray-500">{e.details}</p>
            </li>
          ))}
        </ul>
      </Section>

            <Section id="certifications" title="Certifications">
        <p className="mb-4 text-sm text-gray-500">
          19 earned, 1 in progress. All issuers and credential IDs are fictional.
        </p>
        <ul className="space-y-3">
          {cv.certifications.map((c) => (
            <li key={c.name}>
              <span className="font-semibold">{c.name}</span>
              <span className="text-gray-600">
                {" "}
                · {c.issuer}
                {c.year && ` · ${c.year}`} · {c.status}
              </span>
              {c.id && (
                <span className="block text-sm text-gray-500">
                  Credential ID: {c.id}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>

            <Section id="patents" title="Patents">
        <ul className="space-y-3">
          {cv.patents.map((p) => (
            <li key={p.title}>
              <span className="font-semibold">{p.title}</span>
              <span className="text-gray-600">
                {" "}
                · {p.number} · {p.status}
              </span>
            </li>
          ))}
        </ul>
      </Section>

            <Section id="publications" title="Publications">
        <p className="mb-4 text-sm text-gray-500">
          Selected 6 of 9. Full list:{" "}
          <a href={cv.contact.scholar} className="underline">
            Google Scholar
          </a>
        </p>
        <ol className="list-decimal space-y-2 ps-5">
          {cv.publications.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      </Section>

            <Section id="speaking" title="Speaking and Media">
        <p className="mb-4 text-sm text-gray-500">Selected 8 of 31 talks.</p>
        <ul className="space-y-3">
          {cv.talks.map((t) => (
            <li key={t.title}>
              <span className="font-semibold">
                {t.type}: “{t.title}”
              </span>
              <span className="text-gray-600">
                {" "}
                · {t.event} · {t.city} · {t.year}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="mt-8 mb-3 text-lg font-semibold">Media</h3>
        <ul className="space-y-3">
          {cv.media.map((m) => (
            <li key={m.title}>
              <span className="font-semibold">
                {m.type}: “{m.title}”
              </span>
              <span className="text-gray-600">
                {" "}
                · {m.outlet} · {m.date}
              </span>
            </li>
          ))}
        </ul>
      </Section>

            <Section id="leadership" title="Leadership, Teaching and Volunteering">
        <p className="mb-4 text-sm text-gray-500">
          Held alongside the full-time roles above.
        </p>
        <ul className="space-y-4">
          {cv.leadership.map((l) => (
            <li key={l.role}>
              <h3 className="font-semibold">
                {l.role} · {l.organization}
              </h3>
              <p className="text-sm text-gray-500">{l.period}</p>
              <p className="text-gray-700">{l.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <ul className="space-y-6">
          {cv.experience.map((job) => (
            <li key={job.role + job.company}>
              <h3 className="font-semibold">
                {job.role} · {job.company}
              </h3>
                            <p className="text-sm text-gray-500">{job.location} · {job.period}</p>
              <ul className="mt-2 list-disc space-y-1 ps-5 text-gray-700">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
                            {job.tech.length > 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold">Technologies: </span>
                  {job.tech.join(", ")}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="space-y-3">
          {cv.skills.map((s) => (
            <p key={s.group}>
                            <span className="font-semibold">{s.group} ({s.level}, {s.years} years): </span>
              {s.items.join(", ")}
            </p>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements">
        <ul className="space-y-3">
          {cv.achievements.map((a) => (
            <li key={a.title}>
              <span className="font-semibold">{a.title}</span>
              <span className="text-gray-600"> · {a.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="languages" title="Languages">
        <ul className="space-y-2">
          {cv.languages.map((l) => (
            <li key={l.language}>
              <span className="font-semibold">{l.language}: </span>
              {l.level}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="interests" title="Interests">
        <ul className="list-disc space-y-1 ps-5">
          {cv.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </Section>
      <Section id="contact" title="Contact">
        <ul className="space-y-2">
          <li>
            <a href={`mailto:${cv.contact.email}`} className="underline">
              {cv.contact.email}
            </a>
          </li>
          <li>
            <a href={cv.contact.github} className="underline">
              GitHub
            </a>
          </li>
          <li>
            <a href={cv.contact.linkedin} className="underline">
              LinkedIn
            </a>
          </li>
                    <li>{cv.contact.phone}</li>
          <li>
            <a href={cv.contact.portfolio} className="underline">Portfolio</a>
          </li>
          <li>
            <a href={cv.contact.dribbble} className="underline">Dribbble</a>
          </li>
          <li>
            <a href={cv.contact.behance} className="underline">Behance</a>
          </li>
          <li>
            <a href={cv.contact.medium} className="underline">Medium</a>
          </li>
          <li>
            <a href={cv.contact.scholar} className="underline">Google Scholar</a>
          </li>
          <li>
            <a href={cv.contact.youtube} className="underline">YouTube</a>
          </li>
        </ul>
      </Section>
    </>
  );
}
