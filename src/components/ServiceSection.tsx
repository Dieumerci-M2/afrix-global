import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ServiceSection() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h4 className="text-blue-500">NOS SERVICES</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ce que nous offrons</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service1.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Développement Web</h4>
                            <p className="text-sm text-gray-600">
                                Formation en développement web (HTML, CSS, Javascript, PHP, React JS, Vue JS, Django)
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service2.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Developpement Mobile</h4>
                            <p className="text-sm text-gray-600">
                                Developpement d'application mobile (Flutter et React Native)
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service3.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Marketing Digital</h4>
                            <p className="text-sm text-gray-600">
                                Formation sur les fondamentaux du Marketing Digital 
                                (Social Media Marketing, Content Marketing, Marketing d’Influence, ...)
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service4.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Consultation informatique</h4>
                            <p className="text-sm text-gray-600">
                                Des solutions sur mesure pour un avenir digital optimisé
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service5.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Communication visuelle</h4>
                            <p className="text-sm text-gray-600">
                                Apprentissage des outils Adobe 
                                (Photoshop, Premiere pro, Lightroom, Illistrator, XD, ...)
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden p-0 group hover:shadow-xl transition-all duration-300 shadow-[ -10px_10px_0_rgba(0,0,0,0.15)]">
                        <CardHeader className="p-0">
                            <img
                            src="./../images/service6.jpg"
                            alt="service img"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        </CardHeader>
                        
                        <CardContent className="p-4">
                            <h4 className="text-lg font-semibold">Rédaction de Contenu</h4>
                            <p className="text-sm text-gray-600">
                                Nous vous aidons à créer du contenu percutant et
                                 personnalisé pour attirer, engager et convertir votre audience
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}