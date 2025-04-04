// src/components/page-tarifs.js
import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from 'lucide-react'

const PageTarifs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif overflow-hidden">
      <header className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex flex-wrap justify-start gap-3 md:gap-4">
        <button className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span>Articles connexes</span>
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <span>Enregistrer</span>
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <span>Permalien</span>
        </button>
      </header>

      <main className="container mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            TARIFS <span className="text-[#FFFF00] italic">forfaits</span>
          </h1>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12"></div>

        {/* Standard Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8 md:py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-2 md:mb-3 text-lg md:text-xl">(5€/M²)</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-wide">STANDARD</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-base md:text-lg">
              <li>Plan de mesure</li>
              <li>Plan de démolition et d'installation</li>
              <li>Plan d'aménagement des meubles</li>
              <li>Suggestions initiales de matériaux</li>
              <li>Consultation d'aménagement de base</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-start md:justify-end items-center mt-6 md:mt-0">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-4 py-2 md:px-5 md:py-3">
              <span className="text-base md:text-lg">OBTENIR LE FORFAIT STANDARD</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Optimal Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8 md:py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-2 md:mb-3 text-lg md:text-xl">(10€/M²)</div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide">OPTIMAL</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-base md:text-lg">
              <li>Ensemble "Standard" complet</li>
              <li>Documentation technique (plomberie, électricité, etc.)</li>
              <li>Plan de placement des meubles et de l'éclairage</li>
              <li>Planche d'ambiance</li>
              <li>Assistance à la sélection des matériaux</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-start md:justify-end items-center mt-6 md:mt-0">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-4 py-2 md:px-5 md:py-3">
              <span className="text-base md:text-lg">OBTENIR LE FORFAIT OPTIMAL</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8 md:py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-2 md:mb-3 text-lg md:text-xl">(20€/M²)</div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide">PREMIUM</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-base md:text-lg">
              <li>Ensemble "Optimal" complet</li>
              <li>Visualisations 3D (3-4 vues par pièce)</li>
              <li>Scénarios d'éclairage pour l'ambiance</li>
              <li>Suggestions de mobilier sur mesure</li>
              <li>Conseils de décoration</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-start md:justify-end items-center mt-6 md:mt-0">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-4 py-2 md:px-5 md:py-3">
              <span className="text-base md:text-lg">OBTENIR LE FORFAIT PREMIUM</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PageTarifs