import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <footer>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Démarrons votre espace de rêve avec nous
            </h3>
            <a
              href="/"
              className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline">
              Envoyez-nous un message
            </a>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">
                RABAT
              </p>
              <p className="text-body-sm font-light text-neutral-900">
                962 Fifth Avenue Str, 3ème étage 
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Écrivez-nous à
              </p>
              <a
                className="text-display-xs font-display font-light text-primary-600"
                href="mailto:contact@ndesign.ma">
                contact@ndesign.ma
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Si vous êtes pressé, appelez-nous rapidement
              </p>
              <a
                className="text-display-xs font-display font-light text-primary-600"
                href="tel:+212690090075">
                +212(6)900-900-75
              </a>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} N DESIGN 
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
              CONTACTEZ-NOUS
                            </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="h-10 w-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;