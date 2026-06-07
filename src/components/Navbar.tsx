import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollLinks = [
    { label: "Projets", href: "#projets" },
    { label: "Compétences", href: "#competences" },
    { label: "Parcours", href: "#parcours" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-3xl mx-auto h-12 px-5 flex items-center justify-between bg-foreground text-background rounded-full shadow-lg">
        <Link to="/" className="font-mono text-sm font-bold tracking-tight text-background">
          M.SADIO
        </Link>

        {isHome && (
          <>
            <div className="hidden md:flex items-center gap-8">
              {scrollLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-background"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </>
        )}

        {!isHome && (
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors"
          >
            ← Retour
          </Link>
        )}
      </div>

      {isOpen && isHome && (
        <div className="md:hidden mt-2 max-w-3xl mx-auto bg-foreground text-background rounded-2xl shadow-lg px-6 py-4 flex flex-col gap-4">
          {scrollLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest text-background/70 hover:text-background"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
