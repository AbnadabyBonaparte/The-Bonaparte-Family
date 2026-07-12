import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/** Consistent eyebrow + serif heading used across every page section. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="eyebrow">
          <span
            className="h-px w-6"
            style={{ background: "var(--primary)" }}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2 className="section-heading mt-3">{title}</h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

/**
 * Premium framed card. An optional icon always sits inside a chip
 * (never a loose icon in the void) and an accent bar reveals on hover.
 */
export function FeatureCard({
  icon,
  title,
  children,
  className = "",
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div {...fadeUp} className={`premium-card group p-6 md:p-7 ${className}`}>
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background:
            "linear-gradient(to right, var(--primary), var(--color-sunset-orange))",
        }}
        aria-hidden="true"
      />
      {icon && <div className="icon-chip mb-5">{icon}</div>}
      <h3 className="font-serif text-xl md:text-2xl text-foreground">{title}</h3>
      <div className="mt-3 leading-relaxed text-muted-foreground">{children}</div>
    </motion.div>
  );
}
