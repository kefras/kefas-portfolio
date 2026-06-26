"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const socials = [
  { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.twitter, icon: XIcon, label: "X" },
  { href: siteConfig.socials.whatsapp, icon: WhatsappIcon, label: "WhatsApp" },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card font-mono-custom text-xs uppercase tracking-widest text-muted-foreground mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ok dark:bg-ok-dark shadow-[0_0_0_3px_theme('colors.ok.soft')]" />
                <span className="font-semibold text-foreground">STATUS: OPEN TO WORK</span>
                <span className="text-border">/</span>
                <span>13+ Projects</span>
                <span className="text-border">/</span>
                <span>Abuja, NG</span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-foreground mb-4"
            >
              Kefas Etiku
              <br />
              Francis
            </motion.h1>

            <motion.p
              {...fadeUp(0.15)}
              className="font-mono-custom text-sm text-wire dark:text-wire-dark font-semibold tracking-wide mb-4"
            >
              Cloud & DevOps Engineer — Entry Level
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8"
            >
              Building scalable cloud infrastructure, automating deployments, and delivering reliable systems on AWS, Docker & Kubernetes.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded bg-foreground text-background font-semibold text-sm shadow-[3px_3px_0_theme('colors.signal.DEFAULT')] hover:shadow-[5px_5px_0_theme('colors.signal.DEFAULT')] hover:-translate-y-0.5 transition-all"
              >
                View Projects →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded border border-border bg-card font-semibold text-sm hover:border-wire dark:hover:border-wire-dark hover:-translate-y-0.5 transition-all"
              >
                ⬇️ Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded border border-border bg-card font-semibold text-sm hover:border-wire dark:hover:border-wire-dark hover:-translate-y-0.5 transition-all"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded border border-border hover:border-wire dark:hover:border-wire-dark text-muted-foreground hover:text-wire dark:hover:text-wire-dark hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-wire to-signal">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/images/headshot.png"
                    alt="Kefas Etiku Francis"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Decorative corner dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-signal opacity-70" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-wire dark:bg-wire-dark opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
