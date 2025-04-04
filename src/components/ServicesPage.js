import React from "react"
import { Link } from "gatsby"
import LandingHero from "./intro"

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      {/* Header with SERVICES and GET IN TOUCH */}
      <div className="text-center mb-8 md:mb-16 mt-8 md:mt-16 px-4">
          <h1 className="text-3xl md:text-display-2xl font-light tracking-wide">
            Services <span className="text-[#FFFF00] italic">plans</span>
          </h1>
        </div>

      <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Interior Design Section */}
        <section className="mb-8 md:mb-16 pb-4 md:pb-8 border-b border-gray-800 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-4 md:gap-0">
            <div className="w-full md:w-1/4 relative order-1 md:order-1">
              <div className="absolute -top-6 left-0 text-[#FFFF00] italic text-sm md:text-display-xs">
                flexible<br />payment plan
              </div>
              <div className="transform -rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5824616/pexels-photo-5824616.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Interior design planning"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/4 text-center px-0 md:px-4 order-3 md:order-2 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-display-2xl font-light mb-2 tracking-wide">INTERIOR DESIGN</h2>
              <p className="text-sm md:text-display-xs text-gray-300 leading-relaxed">
                Transforming spaces with thoughtful layouts, bespoke
                furnishings, and harmonious color palettes.
              </p>
            </div>
            
            <div className="w-full md:w-1/4 relative order-2 md:order-3">
              <div className="absolute -top-6 right-0 text-[#FFFF00] italic text-sm md:text-display-xs">
                fixed budget<br />guarantee
              </div>
              <div className="transform rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                  alt="Interior design example"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Space Planning Section */}
        <section className="mb-8 md:mb-16 pb-4 md:pb-8 border-b border-gray-800 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-4 md:gap-0">
            <div className="w-full md:w-1/4 relative order-1 md:order-1">
              <div className="transform -rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                  alt="Space planning blueprint"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/4 text-center px-0 md:px-4 order-3 md:order-2 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-display-2xl font-light mb-2 tracking-wide">SPACE PLANNING</h2>
              <p className="text-sm md:text-display-xs text-gray-300 leading-relaxed">
                Maximizing functionality while maintaining
                elegance in every square meter.
              </p>
            </div>
            
            <div className="w-full md:w-1/4 relative order-2 md:order-3">
              <div className="absolute -top-6 right-0 text-[#FFFF00] italic text-sm md:text-display-xs">
                fixed budget<br />guarantee
              </div>
              <div className="transform rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg" 
                  alt="Space planning implementation"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selection of Furniture Section */}
        <section className="mb-8 md:mb-16 pb-4 md:pb-8 border-b border-gray-800 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-4 md:gap-0">
            <div className="w-full md:w-1/4 relative order-1 md:order-1">
              <div className="absolute -top-6 left-0 text-[#FFFF00] italic text-sm md:text-display-xs">
                maximized space<br />efficiency
              </div>
              <div className="transform -rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg" 
                  alt="Furniture selection"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/4 text-center px-0 md:px-4 order-3 md:order-2 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-display-2xl font-light mb-2 tracking-wide">SELECTION OF FURNITURE</h2>
              <p className="text-sm md:text-display-xs text-gray-300 leading-relaxed">
                Sourcing unique pieces to add personality
                and style to your space.
              </p>
            </div>
            
            <div className="w-full md:w-1/4 relative order-2 md:order-3">
              <div className="absolute -top-6 right-0 text-[#FFFF00] italic text-sm md:text-display-xs">
                premium<br />materials only
              </div>
              <div className="transform rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg" 
                  alt="Premium furniture"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lighting Design Section */}
        <section className="mb-8 md:mb-16 pb-4 md:pb-8 border-b border-gray-800 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-4 md:gap-0">
            <div className="w-full md:w-1/4 relative order-1 md:order-1">
              <div className="transform -rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg" 
                  alt="Lighting design"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/4 text-center px-0 md:px-4 order-3 md:order-2 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-display-2xl font-light mb-2 tracking-wide">LIGHTING DESIGN</h2>
              <p className="text-sm md:text-display-xs text-gray-300 leading-relaxed">
                Elevating ambiance through strategic
                lighting solutions.
              </p>
            </div>
            
            <div className="w-full md:w-1/4 relative order-2 md:order-3">
              <div className="transform rotate-6 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg" 
                  alt="Strategic lighting"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Virtual Tour Experience Section in French */}
        <section className="mb-8 md:mb-16 p-4 md:p-8">
          <div className="text-center">
            <h2 className="text-display-lg md:text-display-2xl font-light mb-4 tracking-wide">EXPÉRIENCE DE VISITE VIRTUELLE</h2>
            <p className="text-sm md:text-display-xs text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4 md:mb-8">
              Visualisez votre espace transformé avant le début des travaux grâce à nos technologies de pointe de modélisation 3D et de réalité virtuelle.
            </p>
            <div className="shadow-lg max-w-4xl mx-auto">
         
                 <LandingHero />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ServicesPage