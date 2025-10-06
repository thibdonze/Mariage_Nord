// src/components/RSVP.js
import React from "react";
import Section from "./Section";

const RSVP = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto text-gray-800 mt-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold">
          Répondez à notre invitation 🎉
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Merci de remplir le formulaire ci-dessous pour confirmer votre présence.<br />
          <span className="font-bold text-red-600">⚠️ Attention : un formulaire par invité.</span>
        </p>

        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__TD9YjVUMTVFM01ZWUg1QkJRTTBMQlhZSEFOOUdVMi4u" // ← à remplacer par ton lien de partage Forms
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg sm:text-xl shadow-md hover:bg-gray-700 transition-all duration-200"
        >
          Accéder au formulaire
        </a>
      </div>
    </Section>
  );
};

export default RSVP;
