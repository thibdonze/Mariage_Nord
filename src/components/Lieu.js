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
                href="https://www.google.com/maps/search/?api=1&query=Église+Saint-Martin,+Thérouanne,+France"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Voir sur Google Maps
              </a>
            </p>

            {/* Carte Google Maps de l'Église */}
            <div className="flex justify-center mt-4">
              <iframe
                title="Carte de l'Église Saint-Martin de Thérouanne"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.869099923303!2d2.2269696769713764!3d50.73489497164071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd23963b1ef9d7%3A0xd3a6487f773c6f06!2s%C3%89glise%20Saint-Martin!5e0!3m2!1sfr!2sfr!4v1730227300000!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                className="rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --- Salle de la Poudrerie --- */}
          <div className="space-y-3 mt-10">
            <p className="font-semibold underline text-lg">Adresse de la salle :</p>
            <p>Salle de la Poudrerie, Rue de la Poudrerie, 62380 Esquerdes, France</p>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Salle+de+la+Poudrerie,+Rue+de+la+Poudrerie,+62380+Esquerdes,+France"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Voir sur Google Maps
              </a>
            </p>

            {/* Carte Google Maps de la salle */}
            <div className="flex justify-center mt-4">
              <iframe
                title="Carte de la Salle de la Poudrerie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.295234982567!2d2.2017084!3d50.7267091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd2300fd4c82b3%3A0xe2bc97ce9877f2e2!2sSalle%20de%20la%20Poudrerie!5e0!3m2!1sfr!2sfr!4v1730227200000!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                className="rounded-lg shadow-lg"
                allowFullScreen=""
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
