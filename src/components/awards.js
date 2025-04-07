import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AwardItem from "./awardItem";

const Awards = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        nodes {
          id
          title
          year
          logo {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <section className="bg-dark w-full  mx-auto  lg:py-20">
      <div className="container rounded-xl text-center mx-auto px-4 sm:px-6 lg:px-8 ">
      
        {/* Mobile: Single row with all items */}
        <div className="flex sm:hidden  bg-neutral-900 rounded-3xl py-2">
          {data.allAwardsJson.nodes.map((node) => (
            <AwardItem
              key={node.id}
              logo={node.logo.publicURL}
              title={node.title}
              year={node.year}
            />
          ))}
        </div>

        {/* Tablet & Desktop: Grid layout with 5 items per row */}
        <div className="hidden sm:grid md:grid grid-cols-3 md:grid-cols-4 gap-4  bg-neutral-900 rounded-3xl">
          {data.allAwardsJson.nodes.map((node) => (
            <AwardItem
              key={node.id}
              logo={node.logo.publicURL}
              title={node.title}
              year={node.year}
            />
          ))}
        </div>
        <div className="text-center mt-5">
          <h1 className="text-display-2xl font-light tracking-wide">
            Nos <span className="text-[#d3f030] italic">Clients</span>
          </h1>
        </div>
       
        <p className="text-gray-300 mt-5 max-w-2xl text-display-xs mx-auto">Nous sommes fiers de collaborer avec ces organisations exceptionnelles, les aidant à atteindre leurs objectifs et à franchir de nouveaux sommets.</p>
        
      </div>
    </section>
  );
};

export default Awards;