import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Code } from "lucide-react";

const stats = [
  { icon: Award, label: "Certifications", value: "30+" },
  { icon: Briefcase, label: "Work Experience", value: "3+" },
  { icon: Code, label: "Tech Skills", value: "12+" },
  { icon: GraduationCap, label: "Degree", value: "BS CS" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "linear-gradient(135deg, #fff 0%, #E7ECEF 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#0F7173" }}>
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Technology<br />
              <span className="italic font-medium text-foreground/60">Meets Creativity</span>
            </h2>
            <p className="font-body text-base leading-[1.8] text-muted-foreground mb-4">
              I'm a Computer Science graduate from Holy Angel University with a deep passion 
              for building impactful digital solutions. My journey spans data analytics, 
              software engineering, UX design, and social media strategy.
            </p>
            <p className="font-body text-base leading-[1.8] text-muted-foreground">
              From building AI-powered mobile applications to managing digital communities, 
              I thrive at the intersection of technical innovation and human-centered design.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-sm border border-border/40"
              >
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "#0F717315" }}>
                  <s.icon size={20} style={{ color: "#0F7173" }} />
                </div>
                <p className="font-heading text-4xl font-bold text-foreground">{s.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}