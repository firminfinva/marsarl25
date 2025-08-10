import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="pt-16 min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence en
            <span className="block bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
              Prestations Intellectuelles
            </span>
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
            "Sans vous, nous n'existons pas, c'est donc votre performance qui donne un sens à notre existence !!!"
          </p>
          
          {/* Description */}
          <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            MARS DRC SARL est un cabinet d'expertise spécialisé dans les prestations intellectuelles 
            et la production des services techniques au profit des entreprises du secteur public et privé.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            >
              Nous contacter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">4+</h3>
              <p className="text-white/70">Années d'Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-white/70">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">RDC</h3>
              <p className="text-white/70">Présence Nationale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;