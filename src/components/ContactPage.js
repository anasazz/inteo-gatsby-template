// src/components/contact-page.js
import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from 'lucide-react'
import { useStaticQuery, graphql } from "gatsby";
import TopBar from "./TopBar";

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
          <h1 className="text-[#FFFF00] text-[4rem] lg:text-[9rem] md:text-[9rem]   font-light leading-[0.9] tracking-tight">
            PRENEZ<br />CONTACT
          </h1>
        </div>

        <div className="flex flex-col justify-center space-y-16 text-white">
          <div>
            <h2 className="text-display-lg mb-5 font-light">Contact</h2>
            <p className="text-display-xs mb-2">contact@ndesign.ma</p>
            <p className="text-display-xs">+212(6)900-900-75</p>
          </div>

          {/* <div>
            <h2 className="text-display-lg mb-5 font-light">Adresse</h2>
            <p className="text-display-xs mb-1">962 Fifth Avenue Str, 3ème étage</p>
            <p className="text-display-xs mb-1">Rabat, Maroc</p>
          </div> */}

          <div>
            <h2 className="text-display-lg mb-5 font-light">Envoyez-nous un message</h2>
            <p className="text-display-xs mb-8">Pour discuter de votre projet, partagez vos idées et objectifs avec nous.</p>
            <Link to="/contact-form" className="inline-block border border-white p-3">
              <ArrowUpRight size={28} />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Content */}
      <div className="md:my-20 my-10">
        <hr className="text-neutral-300"></hr>
      </div>
      <TopBar />
    </div>
  );
};

export default ContactPage;
