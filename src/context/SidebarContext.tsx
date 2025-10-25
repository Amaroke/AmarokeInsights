import React, { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  expandedSection: string | null;
  setExpandedSection: React.Dispatch<React.SetStateAction<string | null>>;
  resetSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

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

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleSidebar,
        expandedSection,
        setExpandedSection,
        resetSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};
