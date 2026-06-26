"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects, filterCategories } from "@/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="section-kicker mb-3">FIG. 03 — PROJECTS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Projects in production
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hands-on DevOps & cloud builds — from CI/CD pipelines to Kubernetes deployments and infrastructure automation.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={cn(
                "px-4 py-1.5 rounded-full font-mono-custom text-xs uppercase tracking-wider border transition-all",
                active === cat.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted-foreground border-border hover:border-wire dark:hover:border-wire-dark hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bracket-card rounded-md border border-border bg-card p-6 flex flex-col hover:border-wire dark:hover:border-wire-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="grid place-items-center w-12 h-12 rounded bg-foreground text-background text-xl flex-shrink-0">
                    {project.icon}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded border border-border hover:border-wire dark:hover:border-wire-dark text-muted-foreground hover:text-wire dark:hover:text-wire-dark transition-colors"
                  >
                    <GithubIcon size={15} />
                  </a>
                </div>

                <h3 className="font-display font-semibold text-base mb-4 leading-snug">{project.title}</h3>

                {/* PSI */}
                <dl className="flex flex-col gap-3 mb-5 flex-1">
                  {[
                    { dt: "Problem", dd: project.problem },
                    { dt: "Solution", dd: project.solution },
                    { dt: "Impact", dd: project.impact },
                  ].map(({ dt, dd }) => (
                    <div key={dt}>
                      <dt className="font-mono-custom text-[10px] uppercase tracking-widest text-signal font-semibold mb-0.5">
                        {dt}
                      </dt>
                      <dd className="text-xs text-muted-foreground leading-relaxed">{dd}</dd>
                    </div>
                  ))}
                </dl>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-custom text-[10px] px-2 py-0.5 rounded border border-border bg-muted text-wire dark:text-wire-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono-custom text-xs text-foreground font-semibold hover:text-signal transition-colors"
                >
                  View on GitHub
                  <ExternalLink size={11} />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
