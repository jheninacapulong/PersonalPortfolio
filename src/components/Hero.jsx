import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = ["Data Analytics.", "IT Help Desk.", "Social Media Management.", "Administrative Support."];

/**
 * @param {{ heroImage: string }} props
 */
export default function Hero({ heroImage }) {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout = null;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Blurred gradient orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0F717340, transparent 70%)" }} />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F05D5E40, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-5 gap-12 items-center py-32 lg:py-0">
        {/* Text — 3 cols */}
        <motion.div
          className="lg:col-span-3 space-y-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-primary mb-4">
              Computer Science Graduate
            </p>
            <h1 className="font-heading text-6xl md:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
              Jhenina<br />
              <span className="italic font-medium text-foreground/70">Capulong</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 h-9">
            <span
              className="font-heading text-xl md:text-2xl font-medium"
              style={{ color: "#0F7173" }}
            >
              {displayed}
            </span>
            <span className="inline-block w-[2px] h-6 bg-accent animate-pulse" />
          </div>

          <p className="font-body text-base leading-[1.8] text-muted-foreground max-w-md">
            Passionate about building impactful digital solutions at the intersection
            of data, design, and engineering.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://docs.google.com/document/d/1RiptK9LsUFafoMvyY7BUk2iICm5IMvBs/edit?usp=sharing&ouid=106314960193051621671&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-full px-7 py-5 text-sm font-body font-medium shadow-lg shadow-primary/20 gap-2"
                style={{ backgroundColor: "#0F7173", color: "#fff" }}
              >
                <FileText size={15} />
                View Resume
              </Button>
            </a>
            <Button
              variant="outline"
              className="rounded-full px-7 py-5 text-sm font-body font-medium gap-2 border-foreground/20 hover:border-foreground/40"
              asChild
            >
              <a href="#contact"><Mail size={15} /> Contact Me</a>
            </Button>
          </div>

          <a
            href="#certifications"
            className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors pt-2"
          >
            <ArrowDown size={13} /> View Certifications
          </a>
        </motion.div>

        {/* Image — 2 cols */}
        <motion.div
          className="lg:col-span-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2.5rem] border-2 border-primary/20 -z-10" />
            <div className="w-72 h-[400px] md:w-80 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-foreground/10">
              <img
                src={heroImage}
                alt="Jhenina Capulong"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-6 bottom-12 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-foreground/10 border border-border/40"
            >
              <p className="font-body text-xs font-semibold text-foreground">30+ Certifications</p>
              <p className="font-body text-[10px] text-muted-foreground">Cisco · CompTIA · DataCamp</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}