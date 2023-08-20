import React from "react";
import Actu from "./Actu";

const Communique = () => {
  return (
    <div className="flex flex-col items-center  max-w-7xl mx-auto mt-20 mb-24 px-2 ">
      <p className="mb-4 text-[30px] text-center text-gray-600 dark:text-gray-100 font-bold tracking-wide">
        Nos actualités
      </p>
      <div className="flex flex-col lg:flex-row sm:flex-row space-x-6 items-center justify-center flex-wrap">
        <Actu
          date="02 février 2023"
          title="Réunions de travail à Kintélé"
          subtitle="Travaux d'avancement sur l'édification du processus d'attribution des fonds de...

"
        />
          <Actu
          date="11 février 2023"
          title="Réunions de travail à Bzv"
          subtitle="Travaux d'avancement sur l'édification du processus d'attribution des fonds de...

"
        />
          <Actu
          date="15 mars 2023"
          title="Réunions de travail à Pointe-N..."
          subtitle="Travaux d'avancement sur l'édification du processus d'attribution des fonds de...

"
        />
          <Actu
          date="22 avril 2023"
          title="Consultation partenaires à Paris"
          subtitle="Travaux d'avancement sur l'édification du processus d'attribution des fonds de...

"
        />
          <Actu
          date="15 mai 2023"
          title="Compte-rendu réunions"
          subtitle="Travaux d'avancement sur l'édification du processus d'attribution des fonds de...

"
        />
      </div>
    </div>
  );
};

export default Communique;
