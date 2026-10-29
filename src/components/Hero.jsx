
import { motion } from "framer-motion";
import { ArrowDown, Download, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            ✨ Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Hi, I'm <span className="gradient-text">
            Sonali Mohanty</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Fullstack Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I build responsive websites and interactive user experiences
            using React, JavaScript, Python, and modern web technologies.
            I love turning ideas into beautiful digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20"
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/sonali mohanty c.v.PDF"
              download
              className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-violet-400"
            >
              <Code2 size={25} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-sky-400"
            >
              <Code2 size={25} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass flex h-72 w-72 items-center justify-center rounded-full border-2 border-violet-400/30 sm:h-96 sm:w-96"
          >
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-sky-400/20 text-8xl font-black sm:h-72 sm:w-72 sm:text-9xl">
              SM
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-violet-400"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
