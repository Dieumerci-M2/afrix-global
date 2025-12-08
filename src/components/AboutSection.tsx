
export default function AboutSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* TITRE */}
                <div className="text-center mb-12">
                    <h4 className="text-blue-600 font-semibold tracking-wide">A PROPOS DE NOUS</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Découvrez Afrix Global</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 flex justify-center relative">

                        {/* Image principale */}
                        <div className="w-full h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <img src="./../images/service1.jpg" alt="Afrix Global" className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Petite image superposée en bas à droite */}
                        <div className="absolute -bottom-5 -right-0 w-40 h-60 md:w-48 md:h-58 rounded-xl overflow-hidden shadow-xl bg-white border-4 border-gray-100">
                            <img src="./../logo.png" alt="Service" className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* --- TEXTE --- */}
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Afrix-Global est une organisation dédiée à la formation et à l'insertion
                            professionnelle dans le secteur du numérique. Nous offrons des programmes
                            innovants adaptés aux besoins du marché digital.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Notre mission est de fournir des opportunités d'apprentissage accessibles,
                            pratiques et orientées vers l'emploi. Nous collaborons avec des
                            entreprises et des experts du secteur pour garantir des formations
                            alignées aux exigences actuelles du marché.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    );
}