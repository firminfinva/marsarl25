import { Card, CardContent } from "@/components/ui/card";

const PastWork = () => {
  const projects = [
    {
      id: 1,
      title: "Formation en Gestion de Projet",
      description: "Formation de 50 cadres d'entreprises sur les techniques modernes de gestion de projet.",
      date: "Mars 2024",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Audit Financier - Société KIVU SA",
      description: "Audit complet des états financiers et recommandations stratégiques pour l'optimisation des performances.",
      date: "Février 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Recrutement Cadres Dirigeants",
      description: "Processus de recrutement de 15 cadres dirigeants pour une multinationale basée à Kinshasa.",
      date: "Janvier 2024",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Étude de Faisabilité - Projet Minier",
      description: "Étude technique et financière pour l'implantation d'une nouvelle exploitation minière au Katanga.",
      date: "Décembre 2023",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Formation en Leadership",
      description: "Programme de développement du leadership pour 80 managers de niveau intermédiaire.",
      date: "Novembre 2023",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Évaluation de Programme Social",
      description: "Évaluation d'impact d'un programme de développement communautaire dans la province du Nord-Kivu.",
      date: "Octobre 2023",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nos Récentes Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise 
            et de notre engagement envers l'excellence dans chaque mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Vous avez un projet ? Nous sommes là pour vous accompagner.
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            Discuter de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastWork;