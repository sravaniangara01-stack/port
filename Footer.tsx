import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        {/* Animated marquee text */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex whitespace-nowrap text-6xl md:text-8xl font-display font-bold text-muted/10"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="mx-8">Yes Human! that button is clickable</span>
            <span className="mx-8">•</span>
            <span className="mx-8">What are you waiting for?</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Yes Human! that button is clickable</span>
            <span className="mx-8">•</span>
            <span className="mx-8">What are you waiting for?</span>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>
            Sravani Angara / © {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
