import React, { useEffect, useState } from "react";
import { SidebarContext } from "./useSidebar";

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("sidebarIsOpen");
    return stored ? JSON.parse(stored) : false;
  });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("sidebarIsOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const resetSidebar = () => {
    setExpandedSection(null);
  };

  const [isAdvanced, setIsAdvanced] = useState<boolean>(() => {
    const stored = localStorage.getItem("sidebarAdvancedMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebarAdvancedMode", JSON.stringify(isAdvanced));
  }, [isAdvanced]);

  const toggleAdvanced = () => setIsAdvanced((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleSidebar,
        expandedSection,
        setExpandedSection,
        resetSidebar,
        isAdvanced,
        toggleAdvanced,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
