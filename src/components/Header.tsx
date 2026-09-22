"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-14 w-14" />
          <span className="text-lg font-bold text-primary">oikos Catalyst</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Apply Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-transform duration-300 ${
                open ? "top-[7px] rotate-45" : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-transform duration-300 ${
                open ? "top-[7px] -rotate-45" : "top-[14px] rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      <nav
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
