import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Services from "../components/services";
import Awards from "../components/awards";
import About from "../components/about";
import Works from "../components/works";
import Intro from "../components/intro";
import InteriorDesignHero from "../components/InteriorDesignHero";
import ServicesPage from "../components/ServicesPage";
import ContactPage from "../components/ContactPage";
import PricingPage from "../components/PricingPage";
import PageTarifs from "../components/PageTarifs";

const IndexPage = () => (
  <Layout>
    {/* <Seo /> */}

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
