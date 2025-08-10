import { useState } from "react";
import { Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    {
      name: "À propos",
      href: "#",
      subItems: [
        { name: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
        { name: "Culture & Valeurs", href: "#culture-valeurs" },
      ],
    },
    { name: "Nos Services", href: "#services" },
    {
      name: "Opportunités",
      href: "#",
      subItems: [
        { name: "Offres d'emplois", href: "#emplois" },
        { name: "Formations", href: "#formations" },
        { name: "Appels d'offres", href: "#appels-offres" },
      ],
    },
    {
      name: "Ressources",
      href: "#",
      subItems: [
        { name: "Réalisations", href: "#realisations" },
        { name: "Partenaires", href: "#partenaires" },
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/lovable-uploads/9e5d4d77-0599-4c72-9e47-22a66839d27e.png"
                alt="MARS-DRC Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MARS-DRC</h1>
              {/* <p className="text-xs text-muted-foreground">SARL</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-background border shadow-lg rounded-lg z-50 transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleLinkClick(e, subItem.href)}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/20 transition-colors duration-200 cursor-pointer"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Admin Portal & Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/admin"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Admin Portal
            </a>
            <Button
              variant="default"
              className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-foreground border-b border-secondary">
                        {item.name}
                      </div>
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => handleLinkClick(e, subItem.href)}
                          className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200 cursor-pointer"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  variant="default"
                  className="w-full bg-gradient-primary text-white"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
