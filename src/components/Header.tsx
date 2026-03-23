"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FormInscription from "./FormInscription";
import Modal from "./Modal";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/apropos" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="h-20 border-b border-white/10 bg-afrix-dark/90 backdrop-blur-md">
          <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 flex items-center"
              aria-label="Accueil"
            >
              <Image
                src="/afrix.png"
                alt="Afrix Global Logo"
                width={140}
                height={40}
                priority
                className="h-auto w-[120px] sm:w-[135px] lg:w-[145px] object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`h-full px-3 py-7 text-base font-medium transition-colors ${
                      isActive
                        ? "border-b-2 border-afrix-blue text-afrix-blue"
                        : "text-white/85  hover:text-afrix-blue"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex h-12 px-6 bg-afrix-blue hover:bg-afrix-blue/85 cursor-pointer"
            >
              Inscrivez-vous
            </Button>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center text-white"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden border-b border-white/10 bg-afrix-dark/95 backdrop-blur-md transition-all duration-300 ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white/5 text-afrix-blue"
                        : "text-white/85 hover:bg-white/5 hover:text-afrix-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Button
              onClick={() => {
                setMobileOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-5 w-full h-12 bg-afrix-blue hover:bg-afrix-blue/85 cursor-pointer"
            >
              Inscrivez-vous
            </Button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormInscription />
      </Modal>
    </>
  );
}
