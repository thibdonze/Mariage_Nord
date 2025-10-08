import React, { useState } from "react";
import Section from "./Section";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Les enfants sont-ils les bienvenus ?",
      answer: `Les enfants sont les bienvenus. Cependant, aucun service de garde n’est prévu sur place — 
      la surveillance reste donc à la charge des parents.`,
    },
    {
      question: "Quel est le dress code ?",
      answer: (
        <>
          <p className="mb-3">
            <span className="font-semibold">Jour 1 – Le grand jour :</span><br />
            On sort les belles tenues ! Pas de short, pas de tongs, pas de maillot de foot 
            (même si c’est celui de la dernière coupe du monde).<br />
            Pensez élégant et surtout à l’aise pour danser jusqu’au bout de la nuit.
          </p>
          <p>
            <span className="font-semibold">Jour 2 – Le repas du lendemain :</span><br />
            Un look décontracté mais soigné, parfait pour papoter, se régaler et prolonger la fête.
          </p>
        </>
      ),
    },
    {
      question: "La cérémonie aura-t-elle lieu à l’intérieur ou à l’extérieur ?",
      answer: `Si la météo est de notre côté, la cérémonie se déroulera en extérieur, sous le ciel bleu. 
      En cas de pluie, pas d’inquiétude : un plan B en intérieur est prévu.`,
    },
    {
      question: "À quelle heure dois-je arriver ?",
      answer: `Nous vous recommandons d’arriver 15 minutes avant le début de la cérémonie, 
      histoire que tout le monde soit installé, détendu et prêt à faire la fête à l’heure.`,
    },
    {
      question: "Quelle est la date limite pour confirmer ma présence (RSVP) ?",
      answer: `La date limite pour confirmer votre présence est fixée au 15 janvier 2025.`,
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <div className="max-w-3xl sm:max-w-4xl mx-auto text-gray-800 mt-6 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center">
          Foire aux questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-all"
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 pb-4 text-gray-700 leading-relaxed text-base sm:text-lg"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
