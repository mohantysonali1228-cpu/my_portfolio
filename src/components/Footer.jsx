
import { Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-violet-400"
          >
            <Code2 size={20} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-sky-400"
          >
            <Code2 size={20} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-lg border border-white/10 p-2 hover:border-violet-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
