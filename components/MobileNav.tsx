'use client';

import { useState, useEffect } from "react"; // Changement d'import
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about', target: 'about', offset: -80 },
  { name: 'class', target: 'class', offset: -80 },
  { name: 'team', target: 'team', offset: 0 },
  { name: 'prices', target: 'prices', offset: -40 },
  { name: 'testimonial', target: 'testimonial', offset: 0 },
  { name: 'blog', target: 'blog', offset: 0 },
  { name: 'contact', target: 'contact', offset: 0 },
];

// Un vrai informaticien implémente correctement sa fonction ;)
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  // Détection si on est sur mobile (en dessous de 640px par exemple)
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            to={link.target}
            spy={true}
            smooth={true}
            offset={link.offset}
            // La classe active s'appliquera si l'élément est scrollé
            activeClass="active" 
            className="cursor-pointer hover:text-accent transition-all uppercase"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;