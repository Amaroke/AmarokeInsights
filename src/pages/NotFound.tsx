import React from "react";
import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import PageLayout from "../components/PageLayout";

const NotFound: React.FC = () => {
  return (
    <PageLayout title="Page introuvable" noindex>
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
    </PageLayout>
  );
};

export default NotFound;
