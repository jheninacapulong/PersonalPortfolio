import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/portfolioData";
import CertModal from "./CertModal";

const filters = ["All","LinkedIn", "Cisco", "CompTIA", "DataCamp", "HubSpot"];

const categoryColors = {
  "Data Analytics / Data Science": "#0F71731a",
  "Python": "#D8A47F1a",
  "Cloud Computing": "#0F71731a",
  "Communication": "#F05D5E1a",
  "CompTIA": "#27293215",
  "Cyber Security": "#F05D5E1a",
  "Design": "#D8A47F1a",
  "Marketing": "#0F71731a",
  "Networks": "#27293215",
  "Programming": "#D8A47F1a",
};

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter.startsWith("All")) return certifications;
    return certifications.filter((c) => c.provider === activeFilter);
  }, [activeFilter]);

  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((c) => {
      if (!map[c.category]) map[c.category] = [];
      map[c.category].push(c);
    });
    return Object.entries(map);
  }, [filtered]);

  const isBoard = activeFilter === "All";

  return (
    <section id="certifications" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#0F7173" }}>
            Certifications
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            30+ Professional<br />
            <span className="italic font-medium text-foreground/60">Credentials</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-body transition-all duration-300"
              style={
                activeFilter === f
                  ? { backgroundColor: "#F05D5E", color: "#fff", boxShadow: "0 4px 14px #F05D5E30" }
                  : { backgroundColor: "#fff", color: "#272932", border: "1px solid #e0e0e0" }
              }
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isBoard ? (
            <motion.div
              key="board"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {grouped.map(([category, certs], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white rounded-2xl p-5 border border-border/40 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-body font-semibold text-sm text-foreground leading-snug">{category}</h3>
                    <span
                      className="text-xs font-body font-bold px-2 py-0.5 rounded-full shrink-0 ml-2"
                      style={{ backgroundColor: "#0F71731a", color: "#0F7173" }}
                    >
                      {certs.length}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {certs.map((c) => (
                      <button
                        key={c.title}
                        onClick={() => setSelectedCert(c)}
                        className="w-full text-left px-3 py-2 rounded-xl transition-all duration-200 hover:shadow-sm text-xs font-body text-foreground/80 hover:text-foreground leading-snug"
                        style={{ backgroundColor: categoryColors[category] || "#0F71731a" }}
                      >
                        {c.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((c, i) => (
                <motion.button
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  onClick={() => setSelectedCert(c)}
                  className="text-left bg-white rounded-2xl p-5 border border-border/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-20 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: categoryColors[c.category] || "#0F71731a" }}>
                    <span className="text-xs font-body font-semibold" style={{ color: "#0F7173" }}>{c.provider}</span>
                  </div>
                  <p className="font-body text-sm font-medium text-foreground leading-snug">{c.title}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{c.category}</p>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
    </section>
  );
}