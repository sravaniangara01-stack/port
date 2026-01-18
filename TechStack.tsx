import { motion } from "framer-motion";

const technologies = [
  { name: "Selenium", icon: "🔬" },
  { name: "Cypress", icon: "🌲" },
  { name: "Jest", icon: "🃏" },
  { name: "Postman", icon: "📮" },
  { name: "JIRA", icon: "📋" },
  { name: "Playwright", icon: "🎭" },
  { name: "JMeter", icon: "⚡" },
  { name: "Appium", icon: "📱" },
  { name: "TestNG", icon: "✅" },
  { name: "Burp Suite", icon: "🔐" },
  { name: "Jenkins", icon: "🔧" },
  { name: "Git", icon: "🌿" },
];

const TechStack = () => {
  return (
    <section className="py-20 overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Testing Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Tools I <span className="text-gradient">Master</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="mx-8 flex items-center gap-4 px-8 py-4 rounded-full bg-secondary/50 border border-border/50"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-lg font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
