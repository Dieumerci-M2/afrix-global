
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function HeroSection() {
  return (
    <Carousel className="relative w-full h-[100vh]">
      <CarouselContent>
        <CarouselItem className="relative w-full h-[100vh]">
          <img src="./../images/hero1.jpg" alt="Hero Image 1" className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black-500 bg-opacity-20 flex items-center justify-center">
          <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                  Bienvenue chez Afrix-Global
                </h1>
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                  Rejoignez nos programmes et démarrez votre parcours vers un futur
                  professionnel numérique réussi.
                </p>
                <div className="pt-2">
                  <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    DECOUVRIR
                  </Button>
                </div>
              </div>
          </div>
          </div>
        </CarouselItem>
        <CarouselItem className="relative w-full h-[100vh]">
          <img src="./../images/hero2.jpg" alt="Hero Image 2" className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                  Formez-vous aux métiers du numérique
                </h1>
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                  Acquérez des compétences recherchées et donnez vie à votre avenir digital.
                  Nos formations vous préparent aux métiers les plus porteurs du secteur.
                </p>
                <div className="pt-2">
                  <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    NOS FORMATIONS
                  </Button>
                </div>
              </div>
            </div>
            </div>
        </CarouselItem>
        <CarouselItem className="relative w-full h-[100vh]">
          <img src="./../images/hero3.jpg" alt="Hero Image 3" className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                  Excellence pédagogique & accompagnement personnalisé
                </h1>
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                  Bénéficiez d'un suivi individualisé, de projets concrets et d'un réseau 
                  professionnel pour maximiser vos chances de réussite.
                </p>
                <div className="pt-2">
                  <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    EN SAVOIR PLUS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* Navigation Buttons */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75
       rounded-full p-2 hover:bg-opacity-100 z-10 w-20 text-white" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 
      bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 z-10 w-20 text-white" />
    </Carousel>

  );
}