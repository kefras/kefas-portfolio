import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.twitter, icon: XIcon, label: "X" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="grid place-items-center w-7 h-7 rounded bg-foreground text-background text-xs font-mono-custom font-bold">
                KF
              </span>
              <span>Kefas<span className="text-signal">.</span></span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Cloud & DevOps Engineer based in Abuja, Nigeria — building reliable, automated infrastructure.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-wire dark:hover:text-wire-dark transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground mb-4">Elsewhere</p>
            <div className="flex flex-col gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-wire dark:hover:text-wire-dark transition-colors">
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono-custom text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono-custom text-xs text-muted-foreground">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
