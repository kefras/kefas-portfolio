"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className={cn(
        "max-w-6xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-md transition-all duration-300",
        scrolled && "bg-background/90 backdrop-blur-md border border-border shadow-sm"
      )}>
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span className="grid place-items-center w-7 h-7 rounded bg-foreground text-background text-xs font-mono-custom font-bold">
            KF
          </span>
          <span>Kefas<span className="text-signal">.</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono-custom text-xs uppercase tracking-wider text-muted-foreground hover:text-wire dark:hover:text-wire-dark transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal group-hover:w-full transition-all duration-200" />
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav("#contact")}
            className="hidden md:inline-flex items-center px-3 py-1.5 rounded border border-border text-sm font-semibold hover:border-wire dark:hover:border-wire-dark transition-colors"
          >
            Let&apos;s talk
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded border border-transparent hover:border-border transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded border border-transparent hover:border-border transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute left-4 right-4 top-[calc(100%+4px)] bg-background border border-border rounded-md shadow-lg p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-3 py-2 rounded font-mono-custom text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
