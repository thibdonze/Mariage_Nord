// src/components/Participation.js
import React from "react";
import Section from "./Section";

const Participation = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto text-gray-800 mt-6 text-center space-y-6">
        {/* --- Participation --- */}
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Votre présence à nos côtés est déjà le plus beau des cadeaux. Mais si
          vous souhaitez nous offrir un petit quelque chose en plus, nous
          serions ravis que vous participiez à la réalisation de notre voyage de
          noces. Un voyage entre aventure et détente les pieds dans le sable.
          Pour ce faire, il vous suffira d'effectuer un virement sur l’un des
          comptes suivants :
        </p>

        <div className="space-y-4">
          <ul className="space-y-4">
            <li>
              <p className="text-lg sm:text-xl font-bold bg-gray-100 py-2 px-4 rounded-lg select-all shadow-sm">
                IBAN Suisse : CH84 0022 8228 1604 7240 Q
              </p>
            </li>
            <li>
              <p className="text-lg sm:text-xl font-bold bg-gray-100 py-2 px-4 rounded-lg select-all shadow-sm">
                IBAN France : FR76 2823 3000 0122 8094 9212 528
              </p>
            </li>
          </ul>
        </div>

        <p className="text-base sm:text-lg text-gray-700 mt-6">
          Pour celles et ceux qui préfèreraient écrire un mot, glisser une
          carte, ou offrir un cadeau à leur manière, une urne sera mise à
          disposition le jour du mariage. Que ce soit un message, un souvenir,
          un clin d'œil ou un coup de pouce pour notre voyage, chaque attention
          comptera pour nous. Merci pour votre générosité et votre soutien ! ❤️
        </p>
      </div>
    </Section>
  );
};

export default Participation;
