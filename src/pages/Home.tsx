import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import introduction from "../markdown/Introduction.md?raw";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth > 768 ? true : false
  );

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main
        className={`flex-1 overflow-auto pt-24 pb-32 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="prose prose-lg prose-indigo max-w-none px-4 md:px-8">
          <ReactMarkdown>{introduction}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default Home;
