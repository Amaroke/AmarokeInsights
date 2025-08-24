import React from "react";
import ReactMarkdown from "react-markdown";
import introduction from "../markdown/Introduction.md?raw";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col text-gray-300">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8 ml-64 bg-[#12121b]">
          <div className="prose prose-lg prose-indigo max-w-none">
            <ReactMarkdown>{introduction}</ReactMarkdown>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
