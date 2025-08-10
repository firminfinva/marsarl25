import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "Kinshasa, République Démocratique du Congo" },
    { icon: Phone, text: "+243 XXX XXX XXX" },
    { icon: Mail, text: "info@marsarl.org" },
    { icon: Globe, text: "www.marsarl.org" }
  ];

  const services = [
    "Prestations Intellectuelles",
    "Services Techniques",
    "Formation & École Humanitaire",
    "Recrutement",
    "Audit & Évaluation"
  ];

  const quickLinks = [
    "Accueil",
    "Qui sommes-nous",
    "Nos Services",
    "Offres d'emplois",
    "Contact"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">MARS DRC</h3>
                <p className="text-primary-foreground/80">SARL</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Cabinet d'expertise spécialisé dans les prestations intellectuelles 
              et services techniques pour la bonne gouvernance et le développement durable.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm text-primary-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Restez Informé</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 MARS DRC SARL. Tous droits réservés.
            </div>
            <div className="text-sm text-primary-foreground/60">
              RCCM: CD/KNG/RCCM/20-B-01450 | ID.NAT: 01-H5300-N63283Y
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;