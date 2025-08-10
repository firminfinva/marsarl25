import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/lovable-uploads/9e5d4d77-0599-4c72-9e47-22a66839d27e.png"
                  alt="MARS-SARL Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">MARS-SARL</h3>
                <p className="text-sm text-muted-foreground">
                  Cabinet d'Expertise
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Cabinet d'expertise spécialisé dans les prestations
              intellectuelles et la production de services techniques pour les
              secteurs public et privé en RDC.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@marssarl.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+243999999999"
                className="text-muted-foreground hover:text-foreground"
              >
                <Phone size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Nos Services
            </h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Prestations Intellectuelles
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services Techniques
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Formations
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Liens Rapides
            </h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-foreground transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#realisations"
                  className="hover:text-foreground transition-colors"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-1 text-muted-foreground text-sm">
              <p>
                <Mail className="inline mr-2" size={16} /> contact@marssarl.com
              </p>
              <p>
                <Phone className="inline mr-2" size={16} /> +243 999 999 999
              </p>
              <p>
                <MapPin className="inline mr-2" size={16} /> Kinshasa, RDC
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 MARS-SARL. Tous droits réservés. | Cabinet d'Expertise en
            Prestations Intellectuelles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
