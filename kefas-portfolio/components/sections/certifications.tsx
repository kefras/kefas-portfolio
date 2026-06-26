"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-kicker mb-3">FIG. 04 — CERTIFICATIONS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Credentials & Badges
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Continuous learning across AWS, Linux, Kubernetes and cloud-native systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bracket-card rounded-md border border-border bg-card p-5 hover:border-wire dark:hover:border-wire-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{cert.badge}</div>
              <h3 className="font-display font-semibold text-sm leading-snug mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-mono-custom text-[10px] uppercase tracking-wider text-muted-foreground">
                  {cert.date}
                </span>
                {cert.verify && cert.verify !== "#" && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono-custom text-[10px] uppercase tracking-wider text-signal font-semibold hover:opacity-80 transition-opacity"
                  >
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
