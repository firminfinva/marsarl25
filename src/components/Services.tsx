import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Cog, 
  GraduationCap, 
  FileText, 
  Users, 
  BarChart3,
  Shield,
  Building2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Prestations Intellectuelles",
      description: "Conseil stratégique, études de faisabilité, audits organisationnels et financiers",
      features: ["Conseil en management", "Études de marché", "Audits financiers", "Évaluation de projets"]
    },
    {
      icon: Cog,
      title: "Services Techniques Spécialisés",
      description: "Solutions techniques adaptées aux besoins spécifiques de votre entreprise",
      features: ["Ingénierie technique", "Supervision de travaux", "Contrôle qualité", "Assistance technique"]
    },
    {
      icon: GraduationCap,
      title: "École Humanitaire",
      description: "Formation diplômante et professionnelle pour le développement des compétences",
      features: ["Formation diplômante", "Formation professionnelle", "Certification", "E-learning"]
    }
  ];

  const additionalServices = [
    { icon: FileText, title: "Évaluations & Études", description: "Évaluations de projets et études sectorielles" },
    { icon: Users, title: "Recrutement", description: "Sélection et placement de personnel qualifié" },
    { icon: BarChart3, title: "Gestion de Projets", description: "Suivi et évaluation de programmes" },
    { icon: Shield, title: "Audit & Conformité", description: "Audits organisationnels et de conformité" },
    { icon: Building2, title: "Gouvernance", description: "Amélioration de la gouvernance d'entreprise" }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes pour accompagner votre croissance et optimiser votre performance
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services Grid */}
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Services Complémentaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;