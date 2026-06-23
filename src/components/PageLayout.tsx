import React from "react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../context/useSidebar";

interface PageLayoutProps {
  title: string;
  description?: string;
  noindex?: boolean;
  children: React.ReactNode;
}

const SITE_NAME = "AmarokeInsights";
const SITE_URL = "https://amaroke.github.io/AmarokeInsights";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  "AmarokeInsights : apprendre la finance étape par étape — épargne, investissement, trading et cryptos, expliqués simplement.";

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  noindex,
  children,
}) => {
  const { isOpen } = useSidebar();
  const { pathname } = useLocation();

  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${pathname}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default PageLayout;
