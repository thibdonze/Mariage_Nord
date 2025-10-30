// src/components/Programme.js
import React from "react";
import Section from "./Section";

const Programme = () => {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-gray-800 mt-4 px-4 text-left">
        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Du "oui" à l'église aux éclats de rire de la soirée, voici le fil de cette journée que nous avons hâte de partager avec vous !
        </p>

        <ul className="space-y-4 sm:space-y-6 mb-10 sm:mb-14">
          <li>
            <p className="text-sm sm:text-xl">⛪ 14h30 — Cérémonie religieuse à l’Église de Thérouanne</p>
          </li>
          <li>
            <p className="text-sm sm:text-xl">🕓 16h00 — Accueil des invités à la Salle de la Poudrerie à Esquerdes</p>
          </li>
          <li>
            <p className="text-sm sm:text-xl">🥂 16h30 — Cocktail</p>
          </li>
          <li>
            <p className="text-sm sm:text-xl">🍽️ 19h00 — Dîner</p>
          </li>
          <li>
            <p className="text-sm sm:text-xl">🎉 23h00 — Soirée dansante</p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Programme;
