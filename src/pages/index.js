import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Awards from "../components/awards";

import InteriorDesignHero from "../components/InteriorDesignHero";
import ServicesPage from "../components/ServicesPage";
import PricingPage from "../components/PricingPage";

const IndexPage = () => (
  <Layout>
    <Seo />

    <InteriorDesignHero />



    
    <Hero />
    <Awards />
    {/* <About /> */}
    {/* <Metrics /> */}


    <PricingPage />


    <ServicesPage />
    {/* <Services /> */}
    {/* <Works /> */}
  </Layout>
);

export default IndexPage;
