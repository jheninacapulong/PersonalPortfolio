import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolioData";

export default function Projects({ projectImages }) {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(135deg, #fff 0%, #E7ECEF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#0F7173" }}>
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Featured<br />
            <span className="italic font-medium text-foreground/60">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={projectImages[i]}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ backgroundColor: "#27293280", backdropFilter: "blur(2px)" }}
                >
                  <span className="flex items-center gap-2 text-white font-body text-sm font-semibold bg-white/20 px-4 py-2 rounded-full border border-white/30">
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-body font-semibold text-foreground leading-snug">{p.title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-body font-medium rounded-full"
                      style={{ backgroundColor: "#0F71731a", color: "#0F7173" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}