

export default function AboutSection() {
    return (
        <section className="py-12 bg-white-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h4 className="text-blue-500">A PROPOS DE NOUS</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez Afrix Global</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                    {/* Div pour l'image avec ombre */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="shadow-[-10px_10px_9px_rgba(0,0,0,0.1)] border-1 border-[rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-90 h-90 md:w-96 md:h-96">
                            <img src="./../logo.png" alt="Description Afrix-Global"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Div pour le texte */}
                    <div className="w-full md:w-1/2">
                        <p className="text-lg md:text-xl text-gray-700 mb-4">
                            Afrix-Global est une organisation dédiée à la formation et à l'insertion professionnelle
                             dans le secteur du numérique. Nous offrons 
                             des programmes de formation innovants et adaptés 
                             aux besoins du marché, visant à préparer les individus 
                             aux métiers les plus demandés du secteur digital.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700">
                            Notre mission est de fournir des opportunités 
                            d'apprentissage accessibles et de qualité, en 
                            mettant l'accent sur le développement des compétences
                             pratiques et l'employabilité. Nous collaborons avec 
                             des entreprises et des experts du secteur pour garantir 
                             que nos formations répondent aux exigences actuelles et 
                             futures du marché du travail.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}