import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { searchIndex } from "../data/searchIndex";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevQuery, setPrevQuery] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.subtitle?.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  if (!isOpen) return null;

  const goTo = (to: string) => {
    navigate(to);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const entry = results[activeIndex];
      if (entry) goTo(entry.to);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-500 flex items-start justify-center pt-24 px-4 backdrop-blur-sm backdrop-brightness-50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recherche"
        className="w-full max-w-lg bg-[#12121b] border border-white/20 rounded-xl shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700">
          <FaSearch className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Rechercher une page, un outil..."
            className="flex-1 bg-transparent outline-none text-gray-100 placeholder:text-gray-500"
          />
          <kbd className="hidden sm:block text-xs text-gray-500 border border-gray-600 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        <ul className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-gray-500">Aucun résultat</li>
          )}
          {results.map((entry, index) => (
            <li key={`${entry.to}-${entry.title}`}>
              <button
                type="button"
                onClick={() => goTo(entry.to)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                  index === activeIndex
                    ? "bg-white/10 text-white"
                    : "text-gray-300"
                }`}
              >
                <span className="text-sm font-medium">{entry.title}</span>
                {entry.subtitle && (
                  <span className="text-xs text-gray-500">
                    {entry.subtitle}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
};

export default SearchModal;
