// src/components/contact-page.js
import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from 'lucide-react'
import { useStaticQuery, graphql } from "gatsby";

const ContactPage = () => {
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
    <div className="min-h-screen bg-black text-white font-serif">
      {/* Header */}
      <main className="container mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex items-center">
          <h1 className="text-[#FFFF00] text-[10rem] md:text-[12rem] font-light leading-[0.9] tracking-tight">
            PRENEZ<br />CONTACT
          </h1>
        </div>

        <div className="flex flex-col justify-center space-y-16 text-white">
          <div>
            <h2 className="text-3xl mb-5 font-light">Contact</h2>
            <p className="text-xl mb-2">contact@ndesign.ma</p>
            <p className="text-xl">+212(6)900-900-75</p>
          </div>

          <div>
            <h2 className="text-3xl mb-5 font-light">Adresse</h2>
            <p className="text-xl mb-1">962 Fifth Avenue Str, 3ème étage</p>
            <p className="text-xl mb-1">Rabat, Maroc</p>
          </div>

          <div>
            <h2 className="text-3xl mb-5 font-light">Envoyez-nous un message</h2>
            <p className="text-xl mb-8">Pour discuter de votre projet, partagez vos idées et objectifs avec nous.</p>
            <Link to="https://wa.me/212690090075?text=Je suis intéressé(e). Pouvez-vous me donner plus d'informations ?" className="inline-block border border-white p-3">
              <ArrowUpRight size={28} />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Content */}
      <div className="md:my-20 my-10">
        <hr className="text-neutral-300"></hr>
      </div>
      <div className="container mx-auto px-8 py-10 flex justify-between items-center text-base">
        <div className="lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
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
              <p className="text-body-sm font-semibold tracking-widest text-neutral-100 pr-4">
                CONTACTEZ-NOUS
              </p>
              <hr className="w-16 text-neutral-100"></hr>
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
    </div>
  );
};

export default ContactPage;
