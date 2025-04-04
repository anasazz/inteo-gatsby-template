import React, { useState } from "react"
import { Link } from "gatsby"
import LandingHero from "./intro"
import { motion } from "framer-motion"

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      id: 0,
      title: "DESIGN D'INTÉRIEUR",
      description: "Transformation complète de votre espace avec une approche artistique et fonctionnelle, créant une harmonie parfaite entre esthétique et praticité.",
      feature: "plan de paiement flexible",
      image: "https://images.pexels.com/photos/5824616/pexels-photo-5824616.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1,
      title: "PLANIFICATION D'ESPACE",
      description: "Optimisation intelligente de chaque centimètre carré pour créer des espaces qui reflètent votre style de vie et maximisent le potentiel de votre propriété.",
      feature: "garantie de budget fixe",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 2,
      title: "SÉLECTION DE MOBILIER",
      description: "Curation experte de pièces distinctives qui définissent votre style personnel tout en offrant confort et fonctionnalité sans compromis.",
      feature: "matériaux premium uniquement",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 3,
      title: "DESIGN D'ÉCLAIRAGE",
      description: "Création d'ambiances sur mesure grâce à des solutions d'éclairage stratégiques qui transforment l'atmosphère et mettent en valeur l'architecture.",
      feature: "efficacité énergétique",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-serif">
      {/* Header avec animation subtile */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-16 lg:py-24 px-4 relative"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        </div>
        <h1 className="text-display-xl md:text-display-2xl lg:text-display-3xl font-light tracking-widest relative z-10">
          NOS <span className="text-yellow-400 italic font-normal">SERVICES</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-display-xs md:text-display-sm">
          Une expertise sur mesure pour transformer vos espaces en œuvres d'art fonctionnelles
        </p>
      </motion.div>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
        {/* Navigation interactive des services - optimisée pour mobile */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12 border-b border-gray-800 pb-6 md:pb-8 overflow-x-auto">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-3 md:px-4 py-2 md:py-3 mx-1 md:mx-2 my-2 transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                activeService === index 
                  ? "text-yellow-400 border-b-2 border-yellow-400" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Affichage du service sélectionné */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5 overflow-hidden rounded-lg">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
              <div className="inline-block bg-yellow-400 text-black px-4 py-1 text-display-xs mb-4 italic">
                {services[activeService].feature}
              </div>
              <h2 className="text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6 tracking-wide">
                {services[activeService].title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-display-xs md:text-display-sm">
                {services[activeService].description}
              </p>
              <Link to="/contact" className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300">
                Demander plus d'informations
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Section Expérience Virtuelle */}
        <section className="mb-16 md:mb-24 pt-12 md:pt-16 border-t border-gray-800">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-yellow-400 italic mb-2 text-display-2xl">notre technologie exclusive</span>
            <h2 className="text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6 tracking-wide">EXPÉRIENCE DE VISITE VIRTUELLE</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-display-xs md:text-display-sm px-4">
              Visualisez votre espace transformé avant le début des travaux grâce à nos technologies 
              de modélisation 3D et de réalité virtuelle à la pointe de l'innovation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-2xl rounded-lg overflow-hidden"
          >
            <LandingHero />
          </motion.div>
        </section>

        {/* Témoignages */}
        <section className="mb-16 md:mb-24 pt-12 md:pt-16 border-t border-gray-800">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-yellow-400 italic mb-2 text-display-xs">ce que disent nos clients</span>
            <h2 className="text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6 tracking-wide">TÉMOIGNAGES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "Une transformation complète de notre appartement qui a dépassé toutes nos attentes. Un professionnalisme exemplaire.",
                author: "Sophie et Marc D."
              },
              {
                text: "Leur approche créative a parfaitement résolu nos problèmes d'espace tout en créant une ambiance élégante et chaleureuse.",
                author: "Jean-Philippe B."
              },
              {
                text: "La visite virtuelle nous a permis de visualiser exactement le résultat final. Un service d'une qualité exceptionnelle.",
                author: "Marie-Claire T."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 md:p-8 rounded-lg"
              >
                <p className="text-gray-300 italic mb-4 text-display-xs">{testimonial.text}</p>
                <p className="text-yellow-400 text-display-xs">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12 md:py-16 border-y border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6 tracking-wide">TRANSFORMONS VOTRE ESPACE</h2>
            <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-display-xs md:text-display-sm px-4">
              Nos experts sont prêts à vous accompagner dans votre projet de transformation. 
              Contactez-nous dès aujourd'hui pour une consultation personnalisée.
            </p>
            <Link to="/contact" className="inline-block px-8 md:px-12 py-3 md:py-4 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300 text-display-xs md:text-display-sm">
              Prendre Rendez-vous
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default ServicesPage