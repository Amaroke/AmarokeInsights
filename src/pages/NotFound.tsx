import React from "react";
import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { useSidebar } from "../context/useSidebar";

const NotFound: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
          <FaCompass className="text-5xl text-blue-400" />
          <h1 className="text-3xl font-semibold text-white">
            404 — Page introuvable
          </h1>
          <p className="max-w-md text-gray-400">
            La page que tu cherches n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-500"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
