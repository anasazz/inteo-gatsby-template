import React, { useState } from "react"
import { Link } from "gatsby"
import LandingHero from "./intro"
import { motion } from "framer-motion"

const VideoVR = () => {


  return (
    <div className="min-h-screen bg-black text-white font-serif">
      

      <main className="container mx-auto px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
        {/* Navigation interactive des services - optimisée pour mobile */}
       
        <h1 className="text-center text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6">DESIGN STUDIO</h1>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-2xl rounded-lg overflow-hidden"
          >
            <LandingHero />
          </motion.div>
        {/* Section Expérience Virtuelle */}
        <section className="mb-16 md:mb-24  ">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-yellow-400 italic mb-2 text-display-xs md:text-display-2xl ">notre technologie exclusive</span>
            <h2 className="text-display-lg md:text-display-xl lg:text-display-2xl font-light mb-4 md:mb-6 tracking-wide">EXPÉRIENCE DE VISITE VIRTUELLE</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-display-xs md:text-display-sm px-4">
              Visualisez votre espace transformé avant le début des travaux grâce à nos technologies 
              de modélisation 3D et de réalité virtuelle à la pointe de l'innovation.
            </p>
          </motion.div>


          
        
        </section>

   
      </main>
    </div>
  )
}

export default VideoVR