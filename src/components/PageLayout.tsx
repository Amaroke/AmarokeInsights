import React from "react";
import { Helmet } from "react-helmet-async";
import { useSidebar } from "../context/useSidebar";

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const SITE_NAME = "AmarokeInsights";

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const { isOpen } = useSidebar();
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
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
