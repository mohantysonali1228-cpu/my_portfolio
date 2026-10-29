
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 font-semibold text-violet-400">
            LET'S CONNECT
          </p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Have a project or opportunity? Let's talk.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-8 md:grid-cols-2"
        >
          <div className="glass rounded-2xl p-7">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-4 leading-7 text-slate-400">
              I'm interested in development opportunities, internships,
              and exciting projects.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Mail className="text-violet-400" />
              <span className="break-all text-slate-300">
                mohantysonali1228@gmail.com
              </span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <MapPin className="text-violet-400" />
              <span className="text-slate-300">Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-7"
          >
            <input
              required
              aria-label="Your name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-400"
            />

            <input
              required
              type="email"
              aria-label="Your email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-400"
            />

            <textarea
              required
              rows="5"
              aria-label="Your message"
              placeholder="Your message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full resize-y rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-400"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-4 font-semibold transition hover:bg-violet-600"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
