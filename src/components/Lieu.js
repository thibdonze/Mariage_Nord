// src/components/Lieu.js
import React from "react";
import Section from "./Section";

const Lieu = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto text-gray-800 mt-4 text-center">
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
          <p>
            Le mariage religieux aura lieu à l’<strong>Église Saint-Martin de Thérouanne</strong> (62).
          </p>
          <p>
            Après la cérémonie, nous nous retrouverons pour la réception à la <strong>Salle de la Poudrerie</strong>, située à Esquerdes (62).
          </p>

          {/* --- Église Saint-Martin --- */}
          <div className="space-y-3 mt-8">
            <p className="font-semibold underline text-lg">Adresse de l’église :</p>
            <p>Église Saint-Martin, Place de l’Église, 62129 Thérouanne, France</p>
            <p>
              <a
                href="https://goo.gl/maps/ejqk4xk3iG9rZqEJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Voir sur Google Maps
              </a>
            </p>

            <div className="flex justify-center mt-4">
              <iframe
                title="Carte de l'Église Saint-Martin de Thérouanne"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.652243153292!2d2.256!3d50.636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd004003eee3e9%3A0x8a06624735bbff02!2s%C3%89glise%20Saint-Martin%2C%2062129%20Th%C3%A9rouanne!5e0!3m2!1sfr!2sfr!4v1730459200000!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                className="rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --- Salle de la Poudrerie --- */}
          <div className="space-y-3 mt-10">
            <p className="font-semibold underline text-lg">Adresse de la salle :</p>
            <p>Salle des fêtes de la Poudrerie, Rue Bernard Chochoy, 62380 Esquerdes, France</p>
            <p>
              <a
                href="https://goo.gl/maps/ZtS64PqJScR9m9zj9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Voir sur Google Maps
              </a>
            </p>

            <div className="flex justify-center mt-4">
              <iframe
                title="Carte de la Salle des fêtes de la Poudrerie - Esquerdes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.170515732761!2d2.1752994151363957!3d50.70804197951407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc55d7025ed01d%3A0x7487cdd9167b4bfb!2sSalle%20des%20f%C3%AAtes%20de%20la%20Poudrerie!5e0!3m2!1sfr!2sfr!4v1730459954321!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                className="rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Lieu;
