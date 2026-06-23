import { useState, useRef, useEffect } from "react";
import { terms, type TermKey } from "../data/terms";

const Term: React.FC<{ id: TermKey }> = ({ id }) => {
  const { title, definition } = terms[id];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const margin = 8;
      const width = Math.min(260, window.innerWidth - 16);

      let left = rect.left + rect.width / 2 - width / 2;
      left = Math.max(
        margin,
        Math.min(left, window.innerWidth - width - margin),
      );

      setPos({ top: rect.top - 10, left });
      setReady(true);
    };

    updatePosition();

    let frame = 0;
    const onViewportChange = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updatePosition();
      });
    };

    window.addEventListener("scroll", onViewportChange, true);
    window.addEventListener("resize", onViewportChange);

    return () => {
      window.removeEventListener("scroll", onViewportChange, true);
      window.removeEventListener("resize", onViewportChange);
      if (frame) window.cancelAnimationFrame(frame);
      setReady(false);
    };
  }, [open]);
  useEffect(() => {
    const handleClick = () => setOpen(false);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKey);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const tooltipId = `term-${id}`;

  return (
    <>
      <button
        type="button"
        ref={ref}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        className="underline underline-offset-2 decoration-dotted cursor-pointer font-semibold text-inherit bg-transparent p-0"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {title} <sup className="text-xs text-gray-400">?</sup>
      </button>

      {open && ready && (
        <div
          id={tooltipId}
          role="tooltip"
          className="fixed z-50"
          style={{ top: pos.top, left: pos.left }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="bg-[#12121b] text-gray-200 text-sm p-3 rounded-lg shadow-lg border border-white/20 max-w-65">
            <strong className="block mb-1">{title}</strong>
            <p>{definition}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Term;
