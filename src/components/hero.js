import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/cta-button.svg";
import VRScene from "./VRScene";
import Awards from "./awards";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Votre <span className="italic">maison</span> rêvée <br /> Nous la construisons pour vous.
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Imaginez avoir le pouvoir de créer votre maison parfaite, votre villa luxueuse ou même un espace futuriste – exactement comme vous l'avez toujours imaginé.
            Chez N DESIGN, nous nous spécialisons dans la transformation de vos désirs en modèles 3D époustouflants, et nous les construisons également dans la vraie vie.{" "}
          </p>
        </div>
      </div>
      <div className="relative">
        {/* Container for VRScene with fixed dimensions */}
        <div className="w-full h-[700px] relative"> {/* Adjust height as needed */}
          <VRScene />
        </div>
    
        {/* <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" /> */}
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;