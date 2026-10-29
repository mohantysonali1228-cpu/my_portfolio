
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "AI Resume Builder",
    category: "AI / Full Stack",
    description:
      "A resume-building application that helps users create professional, ATS-friendly resumes.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "",
    github: "",
  },
  {
    title: "Real Estate Website",
    category: "Frontend Development",
    description:
      "A responsive property website for browsing properties, agents, and real estate services.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "",
    github: "",
  },
  {
    title: "Grocery Store Website",
    category: "Web Development",
    description:
      "An online grocery shopping interface with product categories, a shopping cart, and login.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-semibold text-violet-400">
          MY RECENT WORK
        </p>

        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass flex flex-col rounded-2xl p-6"
            >
              <div className="mb-5 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-sky-500/20">
                <span className="text-5xl font-black text-white/80">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm text-violet-400">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-5 border-t border-white/10 pt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-violet-400"
                  >
                    <Code2 size={17} />
                    Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <Code2 size={17} />
                    Add GitHub link
                  </span>
                )}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-sky-400"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <ExternalLink size={17} />
                    Add demo link
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
