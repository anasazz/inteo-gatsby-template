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
      <div className="container bg-neutral-900 rounded-xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Inline (All items in one line, resized to fit) */}
        <div className="flex justify-center sm:hidden gap-2">
          {data.allAwardsJson.nodes.map((node) => (
            <AwardItem
              key={node.id}
              logo={node.logo.publicURL}
              title={node.title}
              year={node.year}
            />
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-2 lg:gap-10 xl:gap-12">
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
