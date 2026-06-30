import React from "react";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import { terms, type TermKey } from "../data/terms";

const Resources: React.FC = () => {
  return (
    <PageLayout
      title="Ressources"
      description="Documentation et glossaire pour aller plus loin en finance."
    >
      <Container gap="lg">
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
                      <p className="font-medium text-yellow-300">Saxo Banque</p>
                      <p className="text-sm text-gray-400">
                        Documentation complète sur les produits et services
                        d'investissement
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
                        Le subreddit francophone dédié aux finances personnelles
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
                        personnelles et l'investissement.
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
                <a
                  href="https://www.justetf.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors duration-200 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <FaExternalLinkAlt className="text-yellow-400" />
                    <div>
                      <p className="font-medium text-yellow-300">justETF</p>
                      <p className="text-sm text-gray-400">
                        Moteur de recherche et comparateur d'ETF, fiches
                        détaillées et outils d'analyse de portefeuille.
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
                        l'investissement et la fiscalité.
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
                        How to Day Trade for a Living - Andrew Aziz
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
                        How To Swing Trade - Brian Pezim
                      </p>
                      <p className="text-sm text-gray-400">
                        Focus sur le swift trading, la discipline et la maîtrise
                        des émotions dans le trading actif.
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
                  .localeCompare(terms[b as TermKey].title.toLowerCase()),
              )
              .map((key) => {
                const term = terms[key as TermKey];
                return (
                  <li key={key}>
                    <strong>
                      {term.title.charAt(0).toUpperCase() + term.title.slice(1)}
                    </strong>{" "}
                    : {term.definition}
                  </li>
                );
              })}
          </ul>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Resources;
