import Image from "next/image";
import PhotoEnsembleAfrix from "@/public/images/imageenseble_Afrix.webp";
export default function PhotoEnsemble() {
  return (
    <div className="w-full h-100 bg-afrix-dark ">
      <div className="w-full h-full mb-12 overflow-hidden">
        <Image
          src={PhotoEnsembleAfrix}
          alt="phot d'ensemble"
          className="object-cover opacity-65 hover:opacity-55 transition-all duration-300"
        />
      </div>
    </div>
  );
}
