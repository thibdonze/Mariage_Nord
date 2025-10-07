import React from "react";
import "./Section.css";

function Section({ title, children }) {
  return (
    <section
      className="section-with-frise max-w-4xl mx-auto px-4 sm:px-8 relative py-12 overflow-visible rounded-2xl"
      style={{ backgroundColor: "#fdfaf6" }}
    >
      {title && <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>}
      <div className="text-md space-y-1">{children}</div>
    </section>
  );
}

export default Section;
