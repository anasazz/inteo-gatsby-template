import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Eyebrow from "./eyebrow";
import AwardBadge from "../images/award-badge.svg";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      aboutimagemobile: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <section id="about" className="relative overflow-hidden  py-16 sm:py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute -top-10 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-50 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-10 gap-16 items-center">
          {/* Content column */}
          <div className="lg:col-span-6 lg:pr-8 flex flex-col gap-6">
            <Eyebrow label="À PROPOS DE NOUS" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-2">
              Nous aidons à transformer votre{" "}
              <span className="italic text-blue-600">maison de rêve</span> en réalité
            </h2>
            
            <div className="w-20 h-1 bg-amber-400 mb-4"></div>
            
            <p className="md:text-body-lg text-body-md font-light text-whiteleading-relaxed">
              Depuis plus de dix ans, nous concevons des espaces uniques qui
              reflètent vos aspirations et votre style de vie. Notre équipe
              passionnée allie innovation et savoir-faire pour vous offrir des
              solutions sur mesure.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-whiteleading-relaxed">
              Que ce soit pour une maison familiale, une villa luxueuse ou un
              espace moderne, nous prenons en charge chaque étape du processus,
              de la conception à la réalisation finale. Notre engagement envers
              la qualité et l'excellence garantit des résultats durables et
              exceptionnels.
            </p>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-display font-medium text-blue-600">10+</p>
                <p className="text-sm text-gray-600 mt-1">Années d'expérience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-medium text-blue-600">150+</p>
                <p className="text-sm text-gray-600 mt-1">Projets réalisés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-medium text-blue-600">98%</p>
                <p className="text-sm text-gray-600 mt-1">Clients satisfaits</p>
              </div>
            </div>
          </div>
          
          {/* Image column with frame effect */}
          <div className="lg:col-span-6 relative">
            {/* Frame effect */}
            <div className="absolute -top-4 -left-4 w-full h-full z-0"></div>
            
            {/* Image container with shadow */}
            <div className="relative z-10 shadow-xl">
              <div className="hidden md:block">
                <GatsbyImage 
                  image={getImage(data.aboutimage)} 
                  alt="Conception intérieure" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:hidden">
                <GatsbyImage 
                  image={getImage(data.aboutimagemobile)} 
                  alt="Conception intérieure" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Award badge with improved positioning */}
              <div className="absolute -top-8 md:-top-12 lg:-top-14 left-1/2 -translate-x-1/2 transform rotate-12 transition-transform hover:rotate-0 duration-300">
                <img
                  src={AwardBadge}
                  alt="Badge de récompense"
                  className="w-20 md:w-24 lg:w-28 drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Accent dot pattern */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-amber-400"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;