import { useState, useRef, useEffect } from "react";
import { terms, type TermKey } from "../data/terms";

const Term: React.FC<{ id: TermKey }> = ({ id }) => {
  const { title, definition } = terms[id];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (open && ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const margin = 8;
      const width = Math.min(260, window.innerWidth - 16);

      let left = rect.left + rect.width / 2 - width / 2;

      left = Math.max(
        margin,
        Math.min(left, window.innerWidth - width - margin),
      );

      const top = rect.top - 10;

      setPos({ top, left });
      setReady(true);
    } else {
      setReady(false);
    }
  }, [open]);
  useEffect(() => {
    const handleClick = () => setOpen(false);

    if (open) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <>
      <span
        ref={ref}
        className="underline underline-offset-2 decoration-dotted cursor-pointer font-semibold"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {title} <sup className="text-xs text-gray-400">?</sup>
      </span>

      {open && ready && (
        <div
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
