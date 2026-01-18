import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import TextReveal from "@/components/TextReveal";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image container with glassmorphism */}
              <motion.div 
                className="relative z-10 rounded-2xl overflow-hidden glass-premium border-2 border-primary/30 shadow-glow"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Sravani Angara"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Animated glow overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating decoration with glassmorphism */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl glass-premium border border-primary/30 flex items-center justify-center shadow-glow-sm"
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <motion.span 
                    className="text-4xl font-display font-bold text-primary block"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    5+
                  </motion.span>
                  <p className="text-xs text-muted-foreground mt-1">Years Exp</p>
                </div>
              </motion.div>

              {/* Animated background shape */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-primary/20 -z-10"
                animate={{ rotate: [0, 1, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Floating orbs */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
            <TextReveal 
              as="h2" 
              className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6"
              delay={0.2}
            >
              Hey, I'm Sravani.
            </TextReveal>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Software Tester passionate about ensuring quality and reliability in every product. Whether you're launching a new application or improving an existing platform, I help you deliver bug-free experiences that users can trust.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe in thorough testing that catches issues before they reach users. Every test case, every scenario, every edge case is designed to ensure your software performs flawlessly.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>sravaniangara01@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <span>Open for Freelance Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
