import { motion } from "framer-motion";
import { Bug, TestTube, Zap, Shield } from "lucide-react";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    icon: TestTube,
    title: "Manual Testing",
    description: "Thorough exploratory and functional testing to catch bugs before your users do.",
  },
  {
    icon: Bug,
    title: "Automation Testing",
    description: "Robust test automation frameworks that save time and ensure consistent quality.",
  },
  {
    icon: Zap,
    title: "API Testing",
    description: "Comprehensive API validation ensuring reliable data exchange and performance.",
  },
  {
    icon: Shield,
    title: "QA Consulting",
    description: "Strategic QA process optimization to elevate your team's testing maturity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Services
          </span>
          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 justify-center"
            delay={0.2}
          >
            What I Offer
          </TextReveal>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From test planning to execution — I ensure your software is reliable, secure, and bug-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl glass-card cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{ 
                  background: "linear-gradient(135deg, hsl(0 85% 55% / 0.2), transparent, hsl(0 85% 55% / 0.1))",
                  padding: "1px"
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-xl glass-premium flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative animated dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary/50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary/30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
