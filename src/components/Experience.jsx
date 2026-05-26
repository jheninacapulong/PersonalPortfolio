import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/lib/portfolioData";

const typeColors = {
  "Full-time": { bg: "#0F71731a", text: "#0F7173" },
  "Part-time": { bg: "#D8A47F1a", text: "#b07850" },
};

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(135deg, #fff 0%, #E7ECEF 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#0F7173" }}>
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Professional<br />
            <span className="italic font-medium text-foreground/60">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-[1.5px]" style={{ backgroundColor: "#0F71730d" }} />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div
                  className="absolute left-[15px] top-7 w-[21px] h-[21px] rounded-full border-4 border-background z-10"
                  style={{ backgroundColor: "#0F7173" }}
                />

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left bg-white rounded-2xl px-6 py-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-body font-semibold text-base text-foreground">{exp.role}</h3>
                        <span
                          className="px-2.5 py-0.5 text-xs font-body font-medium rounded-full"
                          style={typeColors[exp.type] || typeColors["Part-time"]}
                        >
                          {exp.type}
                        </span>
                        {exp.endDate === "Present" && (
                          <span className="px-2.5 py-0.5 text-xs font-body font-medium rounded-full" style={{ backgroundColor: "#F05D5E1a", color: "#F05D5E" }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm font-medium text-muted-foreground">{exp.company}</p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {exp.startDate} — {exp.endDate} · {exp.duration}
                      </p>
                    </div>
                    <ChevronDown
                      className="text-muted-foreground transition-transform duration-300 shrink-0 mt-1"
                      style={{ transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      size={18}
                    />
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 pt-4 space-y-2"
                        style={{ borderTop: "1px solid #e5e7eb" }}
                      >
                        {exp.responsibilities.map((r, j) => (
                          <li key={j} className="flex gap-3 text-sm font-body text-muted-foreground">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F05D5E" }} />
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}