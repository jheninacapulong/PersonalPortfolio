import { motion } from "framer-motion";
import { skills } from "@/lib/portfolioData";

const skillCategories = [
  {
    title: "Programming & Data",
    items: ["Python", "Java", "SQL", "R", "HTML/CSS", "TensorFlow"],
  },
  {
    title: "Tools & Platforms",
    items: ["Power BI", "Figma", "Excel", "Flutter", "Git"],
  },
  {
    title: "Design & Strategy",
    items: ["UX Design", "Data Analytics", "Data Visualization", "Social Media Management"],
  },
  {
    title: "Networking & IT",
    items: ["Network Administration", "IT Support", "Cloud Computing", "Cyber Security"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#0F7173" }}>
            Skills
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Technical<br />
            <span className="italic font-medium text-foreground/60">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-border/40 shadow-sm"
            >
              <h3 className="font-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#0F7173" }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full font-body text-xs font-medium text-foreground/80 transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: "#E7ECEF", border: "1px solid #d0d5d9" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}