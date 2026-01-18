import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform QA",
    description: "Comprehensive end-to-end testing for a major e-commerce platform, reducing production bugs by 85% and improving checkout success rate.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Selenium", "Cypress", "API Testing"],
    link: "#",
  },
  {
    title: "Banking App Security Testing",
    description: "Led security and penetration testing for a mobile banking application, identifying 23 critical vulnerabilities before launch.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["OWASP", "Burp Suite", "Security"],
    link: "#",
  },
  {
    title: "SaaS Dashboard Automation",
    description: "Built automated test framework from scratch for a B2B SaaS platform, achieving 90% test coverage with CI/CD integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Jest", "Playwright", "Jenkins"],
    link: "#",
  },
  {
    title: "Healthcare API Testing",
    description: "Designed and executed API testing strategy for HIPAA-compliant healthcare platform ensuring data integrity and security.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Postman", "REST API", "Newman"],
    link: "#",
  },
  {
    title: "Mobile App Performance",
    description: "Conducted performance and load testing for high-traffic mobile app, optimizing response times by 60% under peak loads.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["JMeter", "Appium", "LoadRunner"],
    link: "#",
  },
  {
    title: "Fintech Regression Suite",
    description: "Developed comprehensive regression testing suite for fintech startup, cutting release cycles from 2 weeks to 3 days.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    tags: ["TestNG", "JIRA", "Agile QA"],
    link: "#",
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="py-24 relative"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Parallax background elements */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full"
        style={{ y: bgY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-widest uppercase inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            QA <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quality-driven results. Here are some projects where testing made all the difference.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl glass-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -8 }}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button variant="glass" size="icon" className="glass-premium shadow-glow-sm">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-primary glass-premium rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * tagIndex }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
