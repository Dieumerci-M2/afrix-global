"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client"; // Ajuste le chemin selon ton installation
import { GrLanguage } from "react-icons/gr";

export default function LocaleSwitcher() {
  // 1. Récupérer la langue actuelle ('fr' ou 'en')
  const locale = useCurrentLocale();

  // 2. Récupérer la fonction pour changer de langue
  const changeLocale = useChangeLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    changeLocale(nextLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium  transition-colors dark:hover:bg-gray-800"
      aria-label="Changer de langue"
    >
      {/* Optionnel : Tu peux mettre des petits drapeaux ou simplement le texte */}
      <GrLanguage /> <span>{locale === "fr" ? " FR" : "EN"}</span>
    </button>
  );
}
