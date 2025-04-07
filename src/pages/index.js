import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Awards from "../components/awards";

import InteriorDesignHero from "../components/InteriorDesignHero";
import ServicesPage from "../components/ServicesPage";
import PricingPage from "../components/PricingPage";
import VideoVR from "../components/VideoVr";

const IndexPage = () => (
  <Layout>
    <Seo />

    <VideoVR />

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
