import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      name: "Banque Centrale du Congo",
      logo: "/placeholder.svg",
      description: "Partenaire institutionnel principal",
    },
    {
      name: "Ministère des Finances",
      logo: "/placeholder.svg",
      description: "Collaboration sur les projets de réforme",
    },
    {
      name: "Entreprises Publiques",
      logo: "/placeholder.svg",
      description: "SNEL, REGIDESO, SONAS, etc.",
    },
    {
      name: "ONG Internationales",
      logo: "/placeholder.svg",
      description: "USAID, Banque Mondiale, FMI",
    },
    {
      name: "Entreprises Privées",
      logo: "/placeholder.svg",
      description: "PME et grandes entreprises",
    },
    {
      name: "Universités & Institutions",
      logo: "/placeholder.svg",
      description: "Partenariats académiques",
    },
  ];

  return (
    <section id="partenaires" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous travaillons avec les principales institutions et entreprises du
            secteur public et privé en République Démocratique du Congo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Découvrez comment nous collaborons avec nos partenaires pour
            <br className="hidden sm:block" />
            créer des solutions durables et impactantes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
