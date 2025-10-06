// src/components/Lieu.js
import React from "react";
import Section from "./Section";

const Lieu = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto text-gray-800 mt-4 text-center">
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
          <p>
            Le mariage aura lieu au <strong>Château de Séréville</strong>, situé à La Belliole, dans l’Yonne.
          </p>
          <p>
            Un cadre exceptionnel et bucolique, avec de magnifiques jardins et un parc pour profiter pleinement de cette journée unique.
          </p>
          <p>
            <span className="underline">Adresse</span> : Château de Séréville, 89150 La Belliole, France
          </p>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ch%C3%A2teau+de+S%C3%A9r%C3%A9ville,+89150+La+Belliole,France"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Voir sur Google Maps
            </a>
          </p>

          {/* Carte Google Maps interactive */}
          <div className="flex justify-center mt-4">
            <iframe
              title="Carte du Château de Séréville"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.123456!2d3.123456!3d48.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47xxxxxxxxxxxxxxx!2sCh%C3%A2teau%20de%20S%C3%A9r%C3%A9ville!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
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
    </Section>
  );
};

export default Lieu;
