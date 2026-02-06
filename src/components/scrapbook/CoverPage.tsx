import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoverPageProps {
  onOpen: () => void;
}

const CoverPage = ({ onOpen }: CoverPageProps) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
      {/* Decorative corners */}
      <div className="absolute left-4 top-4 h-12 w-12 border-l-4 border-t-4 border-burgundy opacity-60" />
      <div className="absolute right-4 top-4 h-12 w-12 border-r-4 border-t-4 border-burgundy opacity-60" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-4 border-l-4 border-burgundy opacity-60" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-4 border-r-4 border-burgundy opacity-60" />

      {/* Floating hearts decoration */}
      <motion.div
        className="absolute left-8 top-20 text-dusty-rose"
        animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-6 w-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute right-12 top-32 text-primary"
        animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Heart className="h-8 w-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-soft-pink"
        animate={{ y: [-3, 3, -3], rotate: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart className="h-5 w-5 fill-current" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Title */}
        <h1 className="font-handwritten text-5xl text-burgundy sm:text-6xl md:text-7xl">
          Our Story
        </h1>

        {/* Heart divider */}
        <motion.div 
          className="my-6 flex items-center justify-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="h-px w-16 bg-dusty-rose" />
          <Heart className="h-6 w-6 fill-dusty-rose text-dusty-rose" />
          <div className="h-px w-16 bg-dusty-rose" />
        </motion.div>

        {/* Names - CUSTOMIZE THESE */}
        <motion.p 
          className="font-casual text-2xl text-antique-brown sm:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* ✏️ REPLACE WITH YOUR NAMES */}
          Your Name & Their Name
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          className="mt-4 font-elegant text-lg italic text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          A journey of love, one page at a time
        </motion.p>
      </motion.div>

      {/* Open button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Button
          onClick={onOpen}
          className="animate-gentle-pulse bg-burgundy px-8 py-6 font-handwritten text-xl text-cream hover:bg-burgundy/90"
        >
          Open Our Story
          <Heart className="ml-2 h-5 w-5 fill-current" />
        </Button>
      </motion.div>

      {/* Bottom decoration */}
      <motion.p 
        className="absolute bottom-8 font-casual text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        💕 Made with love 💕
      </motion.p>
    </div>
  );
};

export default CoverPage;
