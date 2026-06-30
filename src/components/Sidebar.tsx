import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSidebar } from "../context/useSidebar";
import { setVisit, isNew, getVisits } from "../utils/visitTracker";
import { sections } from "../data/sections";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen, expandedSection, setExpandedSection } =
    useSidebar();

  const currentPath = location.pathname.split("/")[1];

  const visits = useMemo(() => getVisits(), []);

  const routeToSection = useMemo(() => {
    const map: Record<string, string> = {};
    sections.forEach((section) => {
      section.items.forEach((item) => {
        if ("href" in item) {
          const segment = (item as { href: string }).href
            .replace(/^\//, "")
            .split("/")[0];
          map[segment] = section.path;
        }
      });
    });
    return map;
  }, []);

  const scrollObserverRef = useRef<MutationObserver | null>(null);

  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const spyObserverRef = useRef<IntersectionObserver | null>(null);
  const spySetupObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (currentPath) {
      setExpandedSection(routeToSection[currentPath] ?? currentPath);
    }
  }, [currentPath, setExpandedSection, routeToSection]);

  useEffect(() => {
    spyObserverRef.current?.disconnect();
    spySetupObserverRef.current?.disconnect();

    const section = sections.find((s) => s.path === currentPath);
    const scrollItems =
      section?.items.filter((item) => !("href" in item)) ?? [];
    if (scrollItems.length === 0) return;

    const setup = () => {
      const elements = scrollItems
        .map((item) => document.getElementById(item.path))
        .filter((el): el is HTMLElement => Boolean(el));

      if (elements.length === 0) return false;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
          if (visible.length > 0) {
            setActiveItemId(visible[0].target.id);
          }
        },
        { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
      );

      elements.forEach((el) => observer.observe(el));
      spyObserverRef.current = observer;
      return true;
    };

    if (setup()) return;

    const mutationObserver = new MutationObserver(() => {
      if (setup()) mutationObserver.disconnect();
    });
    spySetupObserverRef.current = mutationObserver;
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(
      () => mutationObserver.disconnect(),
      5000,
    );

    return () => window.clearTimeout(timeout);
  }, [currentPath, location.pathname]);

  useEffect(() => {
    return () => {
      scrollObserverRef.current?.disconnect();
      spyObserverRef.current?.disconnect();
      spySetupObserverRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setIsOpen]);

  const handleScrollTo = (sectionPath: string, id: string) => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }

    if (currentPath !== sectionPath) {
      navigate(`/${sectionPath}`);
    }

    const scrollNow = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return Boolean(el);
    };

    if (scrollNow()) return;

    scrollObserverRef.current?.disconnect();
    const observer = new MutationObserver(() => {
      if (scrollNow()) observer.disconnect();
    });
    scrollObserverRef.current = observer;
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 5000);
  };

  return (
    <>
      <Navbar />

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 md:hidden z-100"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        id="sidebar-nav"
        aria-label="Navigation principale"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none transform transition-transform duration-300 ease-in-out w-64 z-300 select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col min-h-full">
          <ul className="flex-1 space-y-1">
            {sections.map((section) => {
              const isActive =
                (routeToSection[currentPath] ?? currentPath) === section.path;
              const showNew = isNew(section.path, section.lastUpdated, visits);
              const Icon = section.icon;

              return (
                <li key={section.path}>
                  <NavLink
                    to={`/${section.path}`}
                    onClick={(e) => {
                      setVisit(section.path);
                      if (window.innerWidth < 768) {
                        e.preventDefault();
                        setExpandedSection(
                          expandedSection === section.path
                            ? null
                            : section.path,
                        );
                        navigate(`/${section.path}`);
                      }
                    }}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? `${section.activeColor} ring-1 ring-inset ring-white/15`
                        : `text-gray-200 ${section.hoverColor}`
                    }`}
                  >
                    <span
                      className={`text-base shrink-0 transition-all duration-300 ${
                        isActive
                          ? `${section.iconColor} scale-110`
                          : `text-gray-400 ${section.hoverIconColor} group-hover:scale-110`
                      }`}
                    >
                      <Icon />
                    </span>
                    <span className="font-medium text-sm flex-1">
                      {section.title}
                    </span>
                    {showNew && (
                      <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                        NEW
                      </span>
                    )}
                  </NavLink>
                  {expandedSection === section.path &&
                    section.items.length > 0 && (
                      <ul className="mt-1 ml-4 pl-3 border-l border-gray-700/60 space-y-0.5 pb-1">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            {"href" in item ? (
                              <NavLink
                                to={
                                  (
                                    item as {
                                      path: string;
                                      title: string;
                                      href: string;
                                    }
                                  ).href
                                }
                                onClick={() => {
                                  if (window.innerWidth < 768) setIsOpen(false);
                                }}
                                className={({ isActive }) =>
                                  `block w-full text-left px-2 py-1.5 rounded text-xs transition-colors duration-300 ${
                                    isActive
                                      ? "text-white bg-white/5"
                                      : `text-gray-400 ${section.hoverItemColor}`
                                  }`
                                }
                              >
                                {item.title}
                              </NavLink>
                            ) : (
                              <button
                                onClick={() =>
                                  handleScrollTo(section.path, item.path)
                                }
                                className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors duration-300 ${
                                  activeItemId === item.path
                                    ? "text-white bg-white/5"
                                    : `text-gray-400 ${section.hoverItemColor}`
                                }`}
                              >
                                {item.title}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-3 pb-36 md:pb-16 border-t border-gray-700 flex flex-col gap-1">
            <NavLink
              to="/legal"
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded transition-colors ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              Mentions légales & Confidentialité
            </NavLink>
            <NavLink
              to="/licenses"
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded transition-colors ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              Licences
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
