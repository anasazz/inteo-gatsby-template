import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import bureauImg from '../images/bg/bureau.jpeg'
import espaceImg from '../images/bg/espace.jpeg'
import commercialImg from '../images/bg/commercial.jpeg'
import residenceImg from '../images/bg/resedance.jpeg'
const ServicesPage = () => {
  // Track which service card is expanded
  const [expandedService, setExpandedService] = useState(null);
  
  const services = [
    {
      id: 0,
      title: "Résidential Design",
      description: "Créez un sanctuaire personnel où l'art rencontre la fonctionnalité. Nos designs résidentiels transforment votre espace de vie en une expression raffinée de votre personnalité, alliant confort et élégance intemporelle.",
      feature: "plan de paiement flexible",
      image: residenceImg,
      icon: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" // Home/house icon,
     
    },
    {
      id: 1,
      title: "Commercial Design",
      description: "Transformez votre espace commercial en une expérience immersive qui captive votre clientèle. Notre approche allie esthétique distinctive et fonctionnalité stratégique pour créer des environnements qui renforcent votre marque.",
      feature: "garantie de budget fixe",
      image: commercialImg,
      icon: "M19,2H5C3.89,2 3,2.89 3,4V18C3,19.11 3.89,20 5,20H9L12,23L15,20H19C20.11,20 21,19.11 21,18V4C21,2.89 20.11,2 19,2M9,16H7V14H9V16M13,16H11V14H13V16M17,16H15V14H17V16M9,12H7V10H9V12M13,12H11V10H13V12M17,12H15V10H17V12Z" // Store/shop icon
    },
    {
      id: 2,
      title: "Bureaux Design",
      description: "Concevez des espaces de travail inspirants où productivité et bien-être coexistent harmonieusement. Nos designs de bureaux équilibrent fonctionnalité professionnelle et ambiance sophistiquée pour cultiver créativité et collaboration.",
      feature: "garantie de budget fixe",
      image: bureauImg,
      icon: "M4,3H20A2,2 0 0,1 22,5V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V5A2,2 0 0,1 4,3M4,7V10H8V7H4M10,7V10H14V7H10M20,10V7H16V10H20M4,12V15H8V12H4M4,20H8V17H4V20M10,12V15H14V12H10M10,20H14V17H10V20M20,20V17H16V20H20M20,12H16V15H20V12Z" // Office/workspace layout icon
    },
    {
      id: 3,
      title: "Espace Vert Design",
      description: "Fusionnez intérieur et extérieur dans une symphonie naturelle d'éléments vivants. Nos créations d'espaces verts apportent sérénité et vitalité à votre environnement, créant des havres de paix où nature et design s'entrelacent.",
      feature: "efficacité énergétique",
      image: espaceImg,
      icon: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
    },
  ]

  // Toggle expanded state for a service card
  const toggleExpand = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        duration: 0.8,
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.15,
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  const expandVariants = {
    collapsed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    expanded: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div id='services' className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-serif">
      {/* Header avec animation améliorée */}

      <motion.div 
          variants={titleVariants}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <h1 className="text-display-2xl md:text-display-2xl lg:text-display-2xl font-light tracking-wider text-center mb-8 md:mb-12">
            Nos <span className="text-[#d3f030] italic font-normal">Services</span>
          </h1>
          
          <p className="text-gray-300 text-display-lg md:text-display-2xl lg:text-display-xl max-w-full text-center mb-5 mx-auto tracking-wide font-light">
            Une expertise sur mesure pour transformer vos espaces en œuvres d'art fonctionnelles
          </p>
        </motion.div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
        className="text-center  px-4 relative overflow-hidden"
      >
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="opacity-10" width="100%" height="100%">
              <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
            </svg>
          </div>
        </div>

    
      </motion.div>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 pb-24 md:pb-32">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-24">
          {services.map((service) => (
            <motion.div
              key={service.id}
              custom={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 ${
                expandedService === service.id 
                  ? "scale-105 shadow-2xl ring-2 ring-yellow-400 ring-opacity-50" 
                  : "hover:scale-103 hover:shadow-xl"
              }`}
              onClick={() => toggleExpand(service.id)}
            >
              {/* Background image with improved overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: expandedService === service.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full min-h-72">
                {/* Icon with improved animation */}
                <motion.div 
                  animate={{ 
                    y: expandedService === service.id ? -10 : 0,
                    transition: { duration: 0.4 }
                  }}
                  className="mb-5 text-center"
                >
                  <svg 
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto text-yellow-400" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={service.icon} />
                  </svg>
                </motion.div>
                
                {/* Title with improved typography */}
                <motion.h3 
                  animate={{ 
                    y: expandedService === service.id ? -5 : 0,
                    transition: { duration: 0.4, delay: 0.1 }
                  }}
                  className="text-center uppercase text-display-xs md:text-2xl font-light tracking-wide mb-6"
                >
                  {service.title}
                </motion.h3>
                
                {/* Expanded content with improved animation */}
                <motion.div
                  variants={expandVariants}
                  initial="collapsed"
                  animate={expandedService === service.id ? "expanded" : "collapsed"}
                  className="overflow-hidden"
                >
                  <div className="pt-2">
                    {/* <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs md:text-sm mb-4 italic tracking-wide">
                      {service.feature}
                    </div> */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* <Link 
                      to="/contact" 
                      className="inline-block px-5 py-2 bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wide"
                    >
                      En savoir plus
                    </Link> */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  )
}

export default ServicesPage