import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-foreground rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #0F7173, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F05D5E, transparent 70%)", transform: "translate(-30%, 30%)" }} />

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#0F7173" }}>
                Get In Touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Build Something<br />
                <span className="italic font-medium text-white/60">Together</span>
              </h2>
              <p className="font-body text-base leading-[1.8] text-white/60 mb-10 max-w-lg">
                I'm always open to new opportunities, collaborations, and conversations.
                Feel free to reach out — I'd love to hear from you.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:jheninacapulong@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-body font-semibold text-foreground transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Mail size={15} /> Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/jhenina-capulong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-body font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://github.com/jheninacapulong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-body font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github size={15} /> GitHub <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <p className="font-body text-xs text-muted-foreground text-center mt-10">
          © 2026 Jhenina Capulong. Crafted with passion.
        </p>
      </div>
    </section>
  );
}