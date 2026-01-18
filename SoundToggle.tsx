import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with ambient sound - using a reliable source
    const audio = new Audio();
    audio.src = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
    audio.loop = true;
    audio.volume = 0.2;
    audio.preload = "auto";
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      // Try fallback audio
      audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQAMA4vT7amJAwsGb7jlq4sFCwNTn9KgfgcLAji89bmPBQsB";
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = async () => {
    if (audioRef.current) {
      try {
        if (isMuted) {
          await audioRef.current.play();
          setIsMuted(false);
        } else {
          audioRef.current.pause();
          setIsMuted(true);
        }
      } catch (error) {
        console.error('Audio playback error:', error);
      }
    }
  };

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-premium hover:shadow-glow transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={!isMuted ? { 
          boxShadow: ["0 0 20px hsl(0 85% 55% / 0.3)", "0 0 40px hsl(0 85% 55% / 0.6)", "0 0 20px hsl(0 85% 55% / 0.3)"]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="relative"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary" />
        )}
        
        {/* Sound wave indicator */}
        {!isMuted && (
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle;
