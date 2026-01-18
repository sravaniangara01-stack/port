import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  as: Component = "h2",
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = children.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay * 4,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ perspective: "1000px" }}
    >
      <Component className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}>
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={wordVariants}
            className="inline-flex overflow-hidden"
            style={{ marginRight: "0.3em" }}
          >
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={charVariants}
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
};

export default TextReveal;
