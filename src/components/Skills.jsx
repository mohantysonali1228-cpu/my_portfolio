
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Node.js", "Express.js"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-semibold text-violet-400">WHAT I KNOW</p>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-6 text-xl font-bold">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.06 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-sm text-violet-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
