import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const LoveNotesPage = () => {
  // Placeholder love notes - CUSTOMIZE THESE
  const loveNotes = [
    "✏️ I love how you always make me laugh, even on my worst days.",
    "✏️ You make every ordinary moment feel special.",
    "✏️ Your smile is my favorite thing to see.",
    "✏️ Thank you for being my best friend and my love.",
    "✏️ I fall for you more every single day.",
  ];

  const noteColors = [
    "bg-soft-pink/40",
    "bg-dusty-rose/30",
    "bg-cream",
    "bg-soft-pink/30",
    "bg-dusty-rose/40",
  ];

  const noteRotations = [-3, 2, -2, 3, -1];

  return (
    <div className="relative flex h-full w-full flex-col p-4 sm:p-6">
      {/* Title */}
      <motion.div 
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-handwritten text-3xl text-burgundy sm:text-4xl">
          Reasons I Love You
        </h2>
        <div className="mx-auto mt-2 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-dusty-rose" />
          <Sparkles className="h-4 w-4 text-dusty-rose" />
          <div className="h-px w-12 bg-dusty-rose" />
        </div>
      </motion.div>

      {/* Love notes scattered */}
      <div className="relative flex-1">
        {loveNotes.map((note, index) => (
          <motion.div
            key={index}
            className={`absolute ${noteColors[index]} rounded-sm p-3 shadow-md sm:p-4`}
            style={{
              top: `${10 + (index * 18)}%`,
              left: index % 2 === 0 ? '5%' : '15%',
              right: index % 2 === 0 ? '15%' : '5%',
              maxWidth: '85%',
            }}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotate: noteRotations[index] 
            }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            {/* Tape on note */}
            <div className="tape absolute -top-2 left-1/2 h-4 w-8 -translate-x-1/2 rotate-[2deg]" />
            
            {/* Note content */}
            <p className="font-casual text-base leading-relaxed text-antique-brown sm:text-lg">
              {note}
            </p>
            
            {/* Small heart decoration */}
            <Heart 
              className="absolute -bottom-1 -right-1 h-3 w-3 fill-dusty-rose text-dusty-rose opacity-60" 
            />
          </motion.div>
        ))}
      </div>

      {/* Wax seal decoration */}
      <motion.div 
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-wax-seal shadow-lg sm:h-14 sm:w-14"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Heart className="h-6 w-6 fill-cream text-cream" />
      </motion.div>

      {/* Decorative hearts */}
      <motion.div
        className="absolute left-4 top-16 text-soft-pink"
        animate={{ y: [-3, 3, -3], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-4 w-4 fill-current" />
      </motion.div>

      {/* Ribbon decoration */}
      <div className="absolute bottom-16 left-4 h-16 w-2 rounded-full bg-dusty-rose/40" />
    </div>
  );
};

export default LoveNotesPage;
