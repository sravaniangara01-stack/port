import { motion } from "framer-motion";
import { Download, FileArchive, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadPage = () => {
  const handleDownload = () => {
    // Instructions for downloading the code
    alert(
      "To download the complete source code:\n\n" +
      "1. Go to Project Settings (click project name in top-left)\n" +
      "2. Connect to GitHub if not already connected\n" +
      "3. Clone the repository to your local machine\n\n" +
      "Or use the 'Export' option in project settings to download as ZIP."
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 rounded-2xl glass-premium flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FileArchive className="w-12 h-12 text-primary" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Download <span className="text-gradient">Source Code</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          Get the complete source code of this portfolio website including all components, styles, and assets.
        </p>

        {/* Features list */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
          {[
            "All React components",
            "Tailwind CSS styles",
            "Framer Motion animations",
            "TypeScript configuration",
            "All assets & images",
            "Ready to deploy"
          ].map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Download button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="shadow-glow"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Instructions
          </Button>
        </motion.div>

        {/* Info box */}
        <motion.div
          className="mt-12 p-6 rounded-2xl glass-card text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-2">How to get your code</h3>
              <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                <li>Connect your GitHub account in Project Settings</li>
                <li>Push the code to a new repository</li>
                <li>Clone the repository: <code className="px-2 py-1 rounded bg-secondary text-xs">git clone [your-repo-url]</code></li>
                <li>Install dependencies: <code className="px-2 py-1 rounded bg-secondary text-xs">npm install</code></li>
                <li>Run locally: <code className="px-2 py-1 rounded bg-secondary text-xs">npm run dev</code></li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Back link */}
        <motion.a
          href="/"
          className="inline-block mt-8 text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ x: -5 }}
        >
          ← Back to Portfolio
        </motion.a>
      </motion.div>
    </div>
  );
};

export default DownloadPage;
