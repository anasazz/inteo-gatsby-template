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
    }
  `);

  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="À PROPOS DE NOUS" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              Nous aidons à transformer votre{" "}
              <span className="italic">maison de rêve</span> en réalité
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Depuis plus de dix ans, nous concevons des espaces uniques qui
              reflètent vos aspirations et votre style de vie. Notre équipe
              passionnée allie innovation et savoir-faire pour vous offrir des
              solutions sur mesure.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Que ce soit pour une maison familiale, une villa luxueuse ou un
              espace moderne, nous prenons en charge chaque étape du processus,
              de la conception à la réalisation finale. Notre engagement envers
              la qualité et l'excellence garantit des résultats durables et
              exceptionnels.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage image={getImage(data.aboutimage)} alt="Conception intérieure" />
            <img
              src={AwardBadge}
              alt="Badge de récompense"
              className="absolute left-[42%] -top-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;