import React, { createContext, useContext } from "react";

export interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  expandedSection: string | null;
  setExpandedSection: React.Dispatch<React.SetStateAction<string | null>>;
  resetSidebar: () => void;
  isAdvanced: boolean;
  toggleAdvanced: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};
