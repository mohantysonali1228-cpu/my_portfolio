
import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "MCA Student",
  },
  {
    icon: Code2,
    title: "Development",
    text: "React & Python",
  },
  {
    icon: Rocket,
    title: "Goal",
    text: "Build useful projects",
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-semibold text-violet-400">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            I am a passionate developer who enjoys learning new technologies
            and creating modern web applications. My interests include
            frontend development, Python, and artificial intelligence.
            I am always ready to learn, improve my skills, and work on
            challenging projects.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -7 }}
                className="glass rounded-2xl p-6"
              >
                <Icon className="mb-5 text-violet-400" size={30} />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
