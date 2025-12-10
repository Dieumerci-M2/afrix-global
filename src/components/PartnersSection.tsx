import OptionLogo from "./partners/OptionLogo";
import AcaRdcLogo from "./partners/AcaRdcLogo";

export default function PartnersSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Ils expriment leurs satisfactions
        </h2>
        
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-6">TÉMOIGNAGES</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Utilise les composants */}
            <OptionLogo />
            <AcaRdcLogo />
          </div>
        </div>
      </div>
    </section>
  );
}