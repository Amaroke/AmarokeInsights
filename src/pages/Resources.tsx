import React from "react";
import { FaExternalLinkAlt, FaBookOpen, FaCalculator } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import { NavLink } from "react-router-dom";
import { terms, type TermKey } from "../data/terms";

const Resources: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-12 md:mb-0 mb-24">
          <section id="tools" className="scroll-mt-22">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Outils
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaCalculator />}
                title="Calcul d’intérêts composés"
                color="text-green-400"
              >
                <p className="leading-relaxed mb-3">
                  Simule la croissance d’un capital dans le temps grâce à
                  l’intérêt composé.
                </p>
                <NavLink
                  to="/compound-interest"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-xl transition-colors duration-200 font-medium"
                >
                  <FaCalculator className="text-green-400" />
                  <span>Ouvrir le calculateur</span>
                </NavLink>
              </InfoBubble>

              <InfoBubble
                icon={<FaCalculator />}
                title="Calcul de prêt"
                color="text-purple-400"
              >
                <p className="leading-relaxed mb-3">
                  Estime les mensualités, la durée et le coût total d’un
                  emprunt, en prenant en compte le taux et l’assurance.
                </p>
                <NavLink
                  to="/loan"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-xl transition-colors duration-200 font-medium"
                >
                  <FaCalculator className="text-purple-400" />
                  <span>Accéder au simulateur</span>
                </NavLink>
              </InfoBubble>
            </div>
          </section>

          <section id="documentation" className="scroll-mt-22">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Documentation
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaExternalLinkAlt />}
                title="Liens utiles"
                color="text-yellow-400"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.help.saxo/hc/fr-fr/categories/360004557111-Produits-et-services-d-investissement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaExternalLinkAlt className="text-yellow-400" />
                      <div>
                        <p className="font-medium text-yellow-300">
                          Saxo Banque
                        </p>
                        <p className="text-sm text-gray-400">
                          Documentation complète sur les produits et services
                          d’investissement
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>
                  <a
                    href="https://www.reddit.com/r/vosfinances/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaExternalLinkAlt className="text-yellow-400" />
                      <div>
                        <p className="font-medium text-yellow-300">
                          r/vosfinances
                        </p>
                        <p className="text-sm text-gray-400">
                          Le subreddit francophone dédié aux finances
                          personnelles
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Finary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaExternalLinkAlt className="text-yellow-400" />
                      <div>
                        <p className="font-medium text-yellow-300">
                          Chaîne YouTube Finary
                        </p>
                        <p className="text-sm text-gray-400">
                          Chaîne YouTube francophone axée sur les finances
                          personnelles et l’investissement.
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>
                  <a
                    href="https://www.service-public.gouv.fr/particuliers/vosdroits/N19803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaExternalLinkAlt className="text-yellow-400" />
                      <div>
                        <p className="font-medium text-yellow-300">
                          Service Public Français
                        </p>
                        <p className="text-sm text-gray-400">
                          Le site du gouvernement français pour les droits
                          concernant l'argent et les finances personnelles.
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>
                </div>
              </InfoBubble>
              <InfoBubble
                icon={<FaBookOpen />}
                title="Lectures recommandées"
                color="text-green-400"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.reddit.com/r/vosfinances/wiki/index/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaBookOpen className="text-green-400" />
                      <div>
                        <p className="font-medium text-green-300">
                          Wiki r/vosfinances
                        </p>
                        <p className="text-sm text-gray-400">
                          Guide collaboratif complet sur la gestion de budget,
                          l’investissement et la fiscalité.
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>

                  <a
                    href="https://books.google.fr/books/about/How_to_Day_Trade_for_a_Living.html?id=KOtUvgAACAAJ&redir_esc=y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaBookOpen className="text-green-400" />
                      <div>
                        <p className="font-medium text-green-300">
                          How to Day Trade for a Living — Andrew Aziz
                        </p>
                        <p className="text-sm text-gray-400">
                          Une introduction accessible au day trading, aux
                          stratégies et à la psychologie du trader.
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>

                  <a
                    href="https://books.google.fr/books/about/How_To_Swing_Trade.html?id=UIctvQEACAAJ&redir_esc=y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <FaBookOpen className="text-green-400" />
                      <div>
                        <p className="font-medium text-green-300">
                          How To Swing Trade — Brian Pezim
                        </p>
                        <p className="text-sm text-gray-400">
                          Focus sur le swift trading, la discipline et la
                          maîtrise des émotions dans le trading actif.
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">→</span>
                  </a>
                </div>
              </InfoBubble>
            </div>
          </section>

          <section id="glossary" className="scroll-mt-22 mb-16">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Glossaire
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {Object.keys(terms)
                .sort((a, b) =>
                  terms[a as TermKey].title
                    .toLowerCase()
                    .localeCompare(terms[b as TermKey].title.toLowerCase())
                )
                .map((key) => {
                  const term = terms[key as TermKey];
                  return (
                    <li key={key}>
                      <strong>{term.title}</strong> : {term.definition}
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resources;
