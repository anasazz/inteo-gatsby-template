import React from "react"
import { ArrowUpRight } from 'lucide-react'

const PricingPage = () => {
  // Fonction pour créer un lien WhatsApp avec message
  const createWhatsAppLink = (plan) => {
    const message = encodeURIComponent(`Je suis intéressé(e) par votre plan ${plan}. Pouvez-vous me donner plus d'informations ?`);
    return `https://wa.me/212690090075?text=${message}`;
  };

  return (
    <div id='propositions' className="min-h-screen bg-black text-white font-serif">
      <main className="container mx-auto px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-display-xl font-light tracking-wide">
            Nos <span className="text-[#d3f030] italic">Propositions</span>
          </h1>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>

        {/* Standard Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            {/* <div className="text-[#d3f030] mb-3 text-xl text-display-lg">(5€/M²)</div> */}
            <h2 className="text-display-xl md:text-display-2xl  font-light tracking-wide">STANDARD</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Plan de mesure</li>
              {/* <li>Plan de démolition et d'installation</li> */}
              <li>Plan d'aménagement de mobilier</li>
              <li>Suggestions initiales de matériaux</li>
              <li>Consultation de base sur l'agencement</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <a href={createWhatsAppLink("STANDARD")} className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">OBTENIR LE PLAN STANDARD</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* Optimal Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            {/* <div className="text-[#d3f030] mb-3 text-xl text-display-lg">(10€/M²)</div> */}
            <h2 className="text-display-xl md:text-display-2xl  font-light tracking-wide">OPTIMAL</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Ensemble complet "Standard"</li>
              <li>Documentation technique (plomberie, électricité, etc.)</li>
              <li>Plan de placement de mobilier et d'éclairage</li>
              <li>Planche d'ambiance</li>
              <li>Assistance pour la sélection des matériaux</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <a href={createWhatsAppLink("OPTIMAL")} className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">OBTENIR LE PLAN OPTIMAL</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            {/* <div className="text-[#d3f030] mb-3 text-xl text-display-lg">(20€/M²)</div> */}
            <h2 className="text-display-xl md:text-display-2xl font-light tracking-wide">PREMIUM</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Ensemble complet "Optimal"</li>
              <li>Visualisations 360 </li>
              <li>Scénarios d'éclairage pour l'ambiance</li>
              <li>Suggestions de mobilier sur mesure</li>
              <li>Conseils de stylisme de décoration</li>
              <li>Visite virtuelle avec casque VR </li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <a href={createWhatsAppLink("PREMIUM")} className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">OBTENIR LE PLAN PREMIUM</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PricingPage