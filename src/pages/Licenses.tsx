import React from "react";
import { FaCode } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const libs = [
  { name: "React", version: "19", license: "MIT", author: "Meta Platforms, Inc." },
  { name: "React DOM", version: "19", license: "MIT", author: "Meta Platforms, Inc." },
  { name: "React Router", version: "7", license: "MIT", author: "Remix Software Inc." },
  { name: "Recharts", version: "3", license: "MIT", author: "recharts group" },
  { name: "React Flow (@xyflow)", version: "12", license: "MIT", author: "webkid GmbH" },
  { name: "React Icons", version: "5", license: "MIT", author: "Ionic Team & contributors" },
  { name: "Formspree React", version: "3", license: "MIT", author: "Formspree, Inc." },
  { name: "Tailwind CSS", version: "4", license: "MIT", author: "Tailwind Labs Inc." },
];

const fonts = [
  {
    name: "Plus Jakarta Sans",
    license: "SIL Open Font License 1.1",
    author: "Tokotype, commandé par Google",
  },
];

const Licenses: React.FC = () => {
  return (
    <PageLayout
      title="Licences"
      description="Licences des bibliothèques et ressources utilisées par AmarokeInsights."
      noindex
    >
      <Container gap="sm">
        <InfoBubble icon={<FaCode />} title="Bibliothèques open-source" color="text-blue-400">
          <p className="text-sm mb-3">
            Ce site est construit avec les bibliothèques open-source suivantes,
            toutes distribuées sous licence{" "}
            <span className="text-white font-semibold">MIT</span>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-300 border-b border-gray-600">
                  <th className="pb-2 pr-4">Bibliothèque</th>
                  <th className="pb-2 pr-4">Version</th>
                  <th className="pb-2 pr-4 hidden sm:table-cell">Auteur</th>
                  <th className="pb-2">Licence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {libs.map((lib) => (
                  <tr key={lib.name}>
                    <td className="py-2 pr-4 text-white">{lib.name}</td>
                    <td className="py-2 pr-4 text-gray-400">v{lib.version}</td>
                    <td className="py-2 pr-4 hidden sm:table-cell">{lib.author}</td>
                    <td className="py-2">
                      <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
                        {lib.license}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            La licence MIT autorise l'utilisation, la copie, la modification et
            la distribution du logiciel sans restriction, sous réserve de
            conserver l'avis de copyright original.
          </p>
        </InfoBubble>

        <InfoBubble icon={<span className="text-lg">Aa</span>} title="Polices de caractères" color="text-purple-400">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-300 border-b border-gray-600">
                  <th className="pb-2 pr-4">Police</th>
                  <th className="pb-2 pr-4 hidden sm:table-cell">Auteur</th>
                  <th className="pb-2">Licence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {fonts.map((font) => (
                  <tr key={font.name}>
                    <td className="py-2 pr-4 text-white">{font.name}</td>
                    <td className="py-2 pr-4 hidden sm:table-cell">{font.author}</td>
                    <td className="py-2">
                      <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded">
                        {font.license}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            La licence SIL OFL 1.1 autorise l'utilisation, l'étude, la
            modification et la redistribution des polices, y compris dans des
            produits commerciaux, à condition de ne pas les vendre seules.
          </p>
        </InfoBubble>
      </Container>
    </PageLayout>
  );
};

export default Licenses;
