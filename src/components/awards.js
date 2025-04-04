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
    <section className="bg-dark w-full py-10 mx-auto sm:py-16 lg:py-20">
      <div className="container rounded-xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-display-2xl sm:text-3xl font-bold text-white mb-8">Nos Clients Privilégiés</h2>
        <p className="text-gray-300 mb-10 max-w-2xl text-display-xs mx-auto">Nous sommes fiers de collaborer avec ces organisations exceptionnelles, les aidant à atteindre leurs objectifs et à franchir de nouveaux sommets.</p>
        
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
        <div className="hidden sm:grid md:grid grid-cols-3 md:grid-cols-5 gap-4  bg-neutral-900 rounded-3xl">
          {data.allAwardsJson.nodes.map((node) => (
            <AwardItem
              key={node.id}
              logo={node.logo.publicURL}
              title={node.title}
              year={node.year}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Awards;