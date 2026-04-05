import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/afrix_logo_blanc.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const menuLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const formationLinks = [
  "Developpement Web",
  "Dev Mobile",
  "Marketing Digital",
  "Consultation Informatique",
  "Communication Visuelle",
  "Redaction de Contenus",
];

export default function Footer() {
  return (
    <footer className="w-full bg-afrix-dark text-white py-10 px-5 flex flex-col items-center justify-center ">
      <div className="w-full max-w-300 flex flex-col  items-center justify-center sm:flex-row md:justify-between flex-wrap gap-10 mb-8">
        {/* Block 1: Logo + desc + socials */}
        <div className="flex md:block flex-col items-center justify-center">
          <Image
            src={Logo}
            alt="Afrix Global Logo"
            width={150}
            height={40}
            className="mb-4 object-contain"
          />
          <p className="text-white/80 text-sm font-bold  leading-relaxed my-4">
            We Train. <br /> We Create. <br /> We Connect.
          </p>
          <div className="flex gap-4">
            <div className="w-[25px] h-[25px] flex justify-center items-center rounded-sm bg-white/80 hover:bg-white">
              <Link
                href="https://www.facebook.com/profile.php?id=61570369245195&locale=fr_FR"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-100/90 hover:text-afrix-blue/80 hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-black" />
              </Link>
            </div>
            <div className="w-[25px] h-[25px] flex justify-center items-center rounded-sm bg-white/80 hover:bg-white">
              <Link
                href="https://x.com/Afrix_Global"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-100/90 hover:text-afrix-blue/80 hover:scale-110 transition-transform"
              >
                <FaXTwitter className="text-black" />
              </Link>
            </div>
            <div className="w-[25px] h-[25px] flex justify-center items-center rounded-sm bg-white/80 hover:bg-white">
              <Link
                href="https://www.linkedin.com/company/afrix-global/posts/?feedView=all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-100/90 hover:text-afrix-blue/80 hover:scale-110 transition-transform"
              >
                <FaLinkedinIn className="text-black" />
              </Link>
            </div>
            <div className="w-[25px] h-[25px] flex justify-center items-center rounded-sm bg-white/80 hover:bg-white">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-white-100/90 hover:text-afrix-blue/80 hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-black" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-[60%] flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-0 md:justify-between  ">
          {/* Block 2: Menu */}
          <div className="flex md:block flex-col items-center justify-center text-center md:text-start">
            <h3 className="text-lg font-bold mb-4 text-white">Menu</h3>
            <ul className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-afrix-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Formations */}
          <div className="flex md:block flex-col items-center justify-center text-center md:text-start">
            <h3 className="text-lg font-bold mb-4 text-white">Formations</h3>
            <ul className="flex flex-col gap-2">
              {formationLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/formations"
                    className="text-white/80 hover:text-afrix-blue transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Block 4: Contact */}
          <div className="flex md:block flex-col items-center justify-center md:text-start">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>

            <div className="space-y-3 text-white/80 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                269, Avenue du Musée, Quartier Himbi
                <br />
                Commune de Goma, Ville de Goma
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:afrixinfocontact@gmail.com"
                  className="hover:text-afrix-blue transition-colors"
                >
                  afrixglobal@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+221123456789"
                  className="hover:text-afrix-green transition-colors"
                >
                  +243 975 179 099
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="w-[90%] border-white/20 my-5" />

      {/* Copyright */}
      <p className="text-white/70 text-sm text-center">
        &copy; 2026 Afrix Global. Tous droits reservés.
      </p>
    </footer>
  );
}
