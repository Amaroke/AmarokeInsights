export const renderParagraphs = (text: string) =>
  text.split("\n").map((para, idx) => {
    const formatted = para.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <p
        key={idx}
        className="leading-relaxed"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {formatted}
      </p>
    );
  });
