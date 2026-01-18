import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";
import CustomCursor from "@/components/CustomCursor";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            className="min-h-screen bg-background overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SoundToggle />
            <Navigation />
            <main>
              <Hero />
              <SectionWrapper delay={0}>
                <Services />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <TechStack />
              </SectionWrapper>
              <SectionWrapper delay={0}>
                <Portfolio />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <Testimonials />
              </SectionWrapper>
              <SectionWrapper delay={0}>
                <About />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <Contact />
              </SectionWrapper>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
