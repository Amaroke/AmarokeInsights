import React, { useEffect, useState } from "react";
import { SidebarContext } from "./useSidebar";

const readBoolean = (key: string, fallback: boolean): boolean => {
  const stored = localStorage.getItem(key);
  if (stored === null) return fallback;
  try {
    return JSON.parse(stored) === true;
  } catch {
    return fallback;
  }
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(() =>
    readBoolean("sidebarIsOpen", false),
  );
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("sidebarIsOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const resetSidebar = () => {
    setExpandedSection(null);
  };

  const [isAdvanced, setIsAdvanced] = useState<boolean>(() =>
    readBoolean("sidebarAdvancedMode", false),
  );

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
