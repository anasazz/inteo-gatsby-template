import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
<div id="#services">
  <div className="container mx-auto">
    <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
        <div className="lg:col-span-8">
          <Eyebrow label="NOS SERVICES" />
          <h2 className="font-display md:text-display-xl text-display-md pt-5">
            Nous offrons les <span className="italic">meilleures solutions</span>{" "}
            pour votre espace de rêve
          </h2>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-8">
        <ServiceItem
          icon={ArchitectureIcon}
          title="Conception architecturale et intérieure"
          description="Création de designs uniques qui allient esthétique et fonctionnalité, adaptés à vos besoins spécifiques."
        />
        <ServiceItem
          icon={RenovationIcon}
          title="Rénovation de bâtiments"
          description="Transformez vos espaces existants avec des solutions modernes et durables pour un résultat exceptionnel."
        />
        <ServiceItem
          icon={ConstructionIcon}
          title="Gestion de construction"
          description="Suivi complet de vos projets de construction, de la phase de planification jusqu'à la livraison finale."
        />
      </div>
    </div>
  </div>
</div>
  );
};
export default Services;
