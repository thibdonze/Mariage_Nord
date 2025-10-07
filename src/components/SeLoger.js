// src/components/SeLoger.js
import React from "react";
import Section from "./Section";

const SeLoger = () => {
  return (
    <Section>
      <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center mt-4 text-gray-800">
        <p className="mb-6 text-sm sm:text-base italic text-gray-600">
          Cette liste est loin d'être exhaustive. Il existe de nombreux autres logements à Sens et dans les environs (hôtels, Airbnb, gîtes, etc.) situés à moins de 20 km du château.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Chambres d'hôtes */}
          <div className="flex-1 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Chambres d'hôtes
            </h3>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <li>
                <strong>La Ferme des Rousseaux</strong><br />
                89150 La Belliole — 600 m<br />
                <a href="http://www.booking.com/hotel/fr/ferme-les-rousseaux.fr.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien Booking</a>
              </li>
              <li>
                <strong>La Dîme</strong><br />
                89150 Fouchères — 5 km
              </li>
              <li>
                <strong>Clos Mélusine</strong><br />
                89140 Lixy — 10 km<br />
                <a href="http://www.clos-melusine.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>La Grange des Blins</strong><br />
                89150 Jouy — 15 km<br />
                <a href="http://www.lagrangedesblins.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>La Bergerie des Anges</strong><br />
                45210 Le Bignon-Mirabeau — 15 km<br />
                <a href="http://www.labergeriedesanges.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>Les Trémières</strong><br />
                77710 Lorrez-le-Bocage — 20 km<br />
                <a href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/les-tremieres-77g10143" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien Gîtes de France</a>
              </li>
              <li>
                <strong>Les 3 Roses</strong><br />
                89500 Villeneuve-sur-Yonne — 25 km<br />
                <a href="https://www.booking.com/searchresults.fr.html?aid=2405612&label=brave_nonbrand_organic_trigger_33bbf676-98fd-4780-a85d-abfc75863c4c_0&highlighted_hotels=2433419&redirected=1&city=-1476981&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=7aab58c8c8cece2dfa10d004364829eb" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien Booking</a>
              </li>
              <li>
                <strong>Les Lucanes</strong><br />
                89510 Véron — 25 km<br />
                <a href="http://www.leslucanes.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>Le Moulin de Cochepie</strong><br />
                89500 Villeneuve-sur-Yonne — 30 km<br />
                <a href="http://www.lemoulindecochepie.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>Les Acacias</strong><br />
                77710 Treuzy-Levelay — 30 km<br />
                <a href="http://www.acacias-fontainebleau.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
            </ul>
          </div>

          {/* Gîtes */}
          <div className="flex-1 text-center mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Gîtes
            </h3>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <li>
                <strong>Chalet-Gîte</strong><br />
                45210 Bazoches-sur-le-Betz — 10 km<br />
                <a href="https://www.airbnb.fr/rooms/831868" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Airbnb</a>
              </li>
              <li>
                <strong>Gîte du Hameau</strong><br />
                77940 Blennes — 15 km<br />
                <a href="https://giteduhameau.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>La Calmerie</strong><br />
                89500 Chaumot — 15 km<br />
                <a href="http://www.lacalmerie.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>Maison Bourgeoise de Mérinville</strong><br />
                45210 Mérinville — 15 km<br />
                <a href="https://www.airbnb.fr/rooms/4619136" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Airbnb</a>
              </li>
              <li>
                <strong>Moulin de Charme</strong><br />
                45320 Saint-Hilaire-les-Andrésis — 15 km<br />
                <a href="https://www.airbnb.fr/rooms/2524273" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Airbnb</a>
              </li>
              <li>
                <strong>Gîtes des Lagneaux</strong><br />
                89500 Chaumot — 15 km<br />
                <a href="https://www.gites-de-france.com/fr/bourgogne-franche-comte/yonne/gites-des-lagneaux-h89g028655" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien Gîtes de France</a>
              </li>
              <li>
                <strong>Le petit moulin</strong><br />
                89100 Nailly — 15 km<br />
                <a href="https://www.lepetitmoulin-nailly.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Site web</a>
              </li>
              <li>
                <strong>La Villarderie</strong><br />
                77710 Lorrez-le-Bocage — 20 km<br />
                <a href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/la-villarderie-77g96" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien Gîtes de France</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SeLoger;
