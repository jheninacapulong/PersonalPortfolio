import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
          <motion.div
            className="relative bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-muted hover:bg-muted/80 transition"
            >
              <X size={18} />
            </button>
            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <ExternalLink className="mx-auto mb-3 text-primary" size={32} />
                  <p className="font-heading text-lg font-semibold text-foreground">{cert.title}</p>
                </div>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">Provider</p>
                <p className="font-body font-medium text-foreground">{cert.provider}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">Category</p>
                <p className="font-body font-medium text-foreground">{cert.category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((t) => (
                  <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}