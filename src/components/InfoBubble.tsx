import React from "react";

interface InfoBubbleProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  color?: string;
}

const InfoBubble: React.FC<InfoBubbleProps> = ({
  icon,
  title,
  children,
  color,
}) => {
  return (
    <section className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg space-y-3">
      <div className="flex items-center gap-3">
        <div className={`text-2xl ${color || "text-white"}`}>{icon}</div>
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="text-gray-400 space-y-2">{children}</div>
    </section>
  );
};

export default InfoBubble;
