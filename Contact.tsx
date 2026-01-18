import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          
          <TextReveal 
            as="h2" 
            className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 justify-center"
            delay={0.2}
          >
            Let's Bring Your Vision to Life
          </TextReveal>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Have a project, an idea, or just curious if we're a good fit? Let's build something smart, beautiful, and future-ready.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton strength={35}>
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="mailto:sravaniangara01@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton strength={20}>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={20}>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={20}>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;