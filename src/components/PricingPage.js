import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from 'lucide-react'

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">


      <main className="container mx-auto px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-display-2xl font-light tracking-wide">
            PRICING <span className="text-[#FFFF00] italic">plans</span>
          </h1>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>

        {/* Standard Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-3 text-xl text-display-lg">(5€/M²)</div>
            <h2 className="text-display-xl font-light tracking-wide">STANDARD</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Measurement Plan</li>
              <li>Demolition and Installation Plan</li>
              <li>Furniture Layout Plan</li>
              <li>Initial Material Suggestions</li>
              <li>Basic Layout Consultation</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">GET STANDARD PLAN</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Optimal Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-3 text-xl text-display-lg">(10€/M²)</div>
            <h2 className="text-display-2xl  font-light tracking-wide">OPTIMAL</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Full "Standard" Set</li>
              <li>Technical Documentation (plumbing, electrical, etc.)</li>
              <li>Furniture & Lighting Placement Plan</li>
              <li>Mood Board</li>
              <li>Material Selection Assistance</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">GET OPTIMAL PLAN</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-gray-700">
          <div className="md:col-span-1">
            <div className="text-[#FFFF00] mb-3 text-xl text-display-lg">(20€/M²)</div>
            <h2 className="text-display-2xl  font-light tracking-wide">PREMIUM</h2>
          </div>
          <div className="md:col-span-1">
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Full "Optimal" Set</li>
              <li>3D Visualizations (3-4 views per room)</li>
              <li>Lighting Scenarios for Ambiance</li>
              <li>Bespoke Furniture Suggestions</li>
              <li>Decor Styling Tips</li>
            </ul>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <Link to="/contact" className="flex items-center space-x-2 border border-white px-5 py-3">
              <span className="text-lg">GET PREMIUM PLAN</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PricingPage