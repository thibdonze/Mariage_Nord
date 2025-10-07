// src/components/Participation.js
import React from "react";
import Section from "./Section";

const Participation = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto text-gray-800 mt-6 text-center space-y-6">
        {/* --- Participation --- */}
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Votre présence à nos côtés est déjà le plus beau des cadeaux. ❤️
        </p>

        {/* --- Photo --- */}
        <div className="my-6">
          <img
            src="/photo.jpg"
            alt="Nous"
            className="w-full sm:w-1/2 mx-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Pour celles et ceux qui souhaiteraient écrire un mot, glisser une
          carte, ou contribuer à notre voyage de noces — un séjour mêlant aventure et moments les pieds dans l'eau 🌴 — une urne sera mise à
          disposition le jour du mariage. Que ce soit un message, un souvenir,
          un clin d'œil ou un petit coup de pouce pour notre voyage, chaque attention
          comptera pour nous.
        </p>

        {/* --- Virement / IBAN discret --- */}
        <div className="text-sm text-gray-400 mt-6 space-y-1">
          <p>Vous pouvez également contribuer à notre voyage de noces par virement :</p>
          <p>IBAN Suisse : CH84 0022 8228 1604 7240 Q</p>
          <p>IBAN France : FR76 2823 3000 0122 8094 9212 528</p>
        </div>
      </div>
    </Section>
  );
};

export default Participation;
