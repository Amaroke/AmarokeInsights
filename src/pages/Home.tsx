import React from "react";
import ReactMarkdown from "react-markdown";
import introduction from "../markdown/Introduction.md?raw";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen text-gray-300 bg-[#12121b]">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8 md:ml-64 pt-24">
        <div className="prose prose-lg prose-indigo max-w-none">
          <ReactMarkdown>{introduction}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default Home;
