import React, { useEffect, useState } from "react";
import { SidebarContext } from "./useSidebar";
import { storage } from "../utils/storage";

const readBoolean = (key: string, fallback: boolean): boolean => {
  const stored = storage.get(key);
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
    storage.set("sidebarIsOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const resetSidebar = () => {
    setExpandedSection(null);
  };

  const [isAdvanced, setIsAdvanced] = useState<boolean>(() =>
    readBoolean("sidebarAdvancedMode", false),
  );

  useEffect(() => {
    storage.set("sidebarAdvancedMode", JSON.stringify(isAdvanced));
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
