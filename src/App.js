import { useState, useRef, useEffect } from "react";
import Countdown from "./components/Countdown";
import { ChevronDown } from "lucide-react";
import SeLoger from "./components/SeLoger";
import Programme from "./components/Programme";
import RSVP from "./components/RSVP";
import Lieu from "./components/Lieu";
import Participation from "./components/Participation";

function App() {
  const [activeTab, setActiveTab] = useState("programme");
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const handleWheel = (e) => {
      if (e.deltaY > 10 && mainRef.current) mainRef.current.scrollIntoView({ behavior: "smooth" });
    };
    hero?.addEventListener("wheel", handleWheel, { passive: true });
    return () => hero?.removeEventListener("wheel", handleWheel);
  }, []);

  const tabs = [
    { id: "programme", label: "Programme" },
    { id: "seloger", label: "Se Loger" },
    { id: "lieu", label: "Le lieu" },
    { id: "rsvp", label: "RSVP" },
    { id: "participation", label: "Pour notre mariage" }, // label mis à jour
  ];

  return (
    <div className="font-sans text-gray-800 mx-0 px-0 overflow-x-hidden">
      <section
        ref={heroRef}
        id="hero"
        className="relative h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Titre centré avec segment sous le texte */}
        <div className="relative z-10 text-center px-4">
          <div className="inline-block" style={{ fontFamily: "'Playfair Display', sans-serif" }}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-wide">
              Lise & Thibault
            </h1>
            <div className="border-b-2 border-white mt-2 w-full" />
          </div>
        </div>

        {/* Date responsive */}
        <div className="absolute left-0 right-0 text-center z-10 px-4 top-[60%] -translate-y-1/12">
          <p className="text-xl sm:text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', sans-serif" }}>
            27 juin 2026
          </p>
        </div>

        {/* Countdown responsive */}
        <div className="absolute left-0 right-0 text-center z-10 px-4 top-[80%] -translate-y-1/12">
          <Countdown targetDate="2026-06-27T16:00:00" />
        </div>


        {/* Chevron down */}
        <div className="absolute bottom-6 w-full flex justify-center z-10 px-4 animate-bounce text-white/80">
          <ChevronDown size={32} />
        </div>
      </section>

      <div ref={mainRef} id="main" className="font-playfair">
        <nav className="sticky top-0 z-10 bg-white shadow flex flex-wrap justify-center gap-2 py-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-full transition-all duration-200 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gray-800 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="px-4 pt-3 pb-1 font-playfair">
          {activeTab === "programme" && <Programme />}
          {activeTab === "seloger" && <SeLoger />}
          {activeTab === "rsvp" && <RSVP />}
          {activeTab === "lieu" && <Lieu />}
          {activeTab === "participation" && <Participation />}
        </main>

        <footer className="text-center text-sm text-gray-500 py-2">© 2026 Lise & Thibault</footer>
      </div>
    </div>
  );
}

export default App;
