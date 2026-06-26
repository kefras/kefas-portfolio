"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-kicker mb-3">FIG. 05 — JOURNEY</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.border)_0_6px,transparent_6px_12px)]" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-6 pl-16 relative"
              >
                {/* Dot */}
                <div className="absolute left-0 top-0 grid place-items-center w-12 h-12 rounded border border-border bg-card text-wire dark:text-wire-dark text-lg flex-shrink-0">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bracket-card rounded-md border border-border bg-card p-5 flex-1">
                  <p className="font-mono-custom text-[10px] uppercase tracking-wider text-signal font-semibold mb-1">
                    {item.date}
                  </p>
                  <h3 className="font-display font-semibold text-sm mb-0.5">{item.role}</h3>
                  <p className="text-xs text-muted-foreground italic mb-3">{item.company}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
