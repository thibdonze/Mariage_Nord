// src/components/Programme.js
import React from "react";
import Section from "./Section";

const Programme = () => {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-gray-800 mt-4 text-center px-4">
        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Pour que vous sachiez quand danser, quand trinquer et quand savourer... 
          voici le déroulé de ces deux jours que nous avons hâte de partager avec vous !
        </p>

        {/* --- Samedi --- */}
        <h3 className="text-lg sm:text-2xl font-playfair font-bold underline mb-1 sm:mb-2">
          Samedi 27 juin 2026
        </h3>
        <p className="text-sm sm:text-lg text-gray-700 italic mb-4 sm:mb-6">
          Tenue : chic
        </p>

        <ul className="space-y-4 sm:space-y-6">
          <li><p className="text-sm sm:text-xl">🕓 16h00 — Accueil des invités dans le parc du château.</p></li>
          <li><p className="text-sm sm:text-xl">💍 16h30 — Cérémonie laïque dans le parc du château.</p></li>
          <li><p className="text-sm sm:text-xl">🥂 17h30 — Cocktail dans le parc du château.</p></li>
          <li><p className="text-sm sm:text-xl">🍽️ 20h00 — Dîner sous le chapiteau.</p></li>
          <li><p className="text-sm sm:text-xl">🎉 00h00 — Soirée dansante dans le château.</p></li>
        </ul>

        {/* --- Dimanche --- */}
        <h3 className="text-lg sm:text-2xl font-playfair font-bold underline mt-12 sm:mt-16 mb-1 sm:mb-2">
          Dimanche 28 juin 2026
        </h3>
        <p className="text-sm sm:text-lg text-gray-700 italic mb-4 sm:mb-6">
          Tenue : chic décontractée
        </p>

        <ul className="space-y-4 sm:space-y-6">
          <li><p className="text-sm sm:text-xl">🥐 12h00 — Foodtruck dans le parc du château.</p></li>
        </ul>
      </div>
    </Section>
  );
};

export default Programme;
