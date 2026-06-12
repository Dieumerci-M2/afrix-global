"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface navigationLink {
  label: string;
  href: string;
  children?: navigationLink[];
}

const navigation: navigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      { href: "/talent-4-startups", label: "Talent 4 Startups" },
      { href: "/baobab-dev-program", label: "Baobab dev program" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/innovation-hub", label: "Innovation Hub" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubMenu(href);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div
        className={`mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8`}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/afrix.png"
            alt="logo afrix global"
            width={140}
            height={40}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            const isOpen = activeSubMenu === link.href;

            return (
              <div
                key={link.href}
                className={cn("relative flex items-center")}
                onMouseEnter={() => hasChildren && handleMouseEnter(link.href)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    pathname === link.href || isOpen
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {link.label}
                  {hasChildren && (
                    <span className="inline-flex items-center">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                      )}
                    </span>
                  )}
                </Link>

                {/* SOUS-MENU DROPDOWN */}
                {hasChildren && isOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-48  bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in slide-in-from-top-1 duration-150">
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-sm px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
                          pathname === child.href
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact
          </Link>
          <Link
            href="/programs"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Baobab
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-sm border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground"
              >
                Contact
              </Link>
              <Link
                href="/programs"
                onClick={() => setOpen(false)}
                className="rounded-sm bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Join Baobab
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
