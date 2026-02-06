import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface TimelinePageProps {
  date: string;
  title: string;
  description: string;
  photoPlaceholder?: string;
  pageNumber: number;
}

const TimelinePage = ({ date, title, description, photoPlaceholder, pageNumber }: TimelinePageProps) => {
  // Alternate decorations based on page number
  const isEven = pageNumber % 2 === 0;

  return (
    <div className="relative flex h-full w-full flex-col p-6 sm:p-8">
      {/* Tape decorations */}
      <div 
        className={`tape absolute top-2 h-6 w-16 ${isEven ? 'left-6 rotate-[-8deg]' : 'right-6 rotate-[8deg]'}`}
      />
      <div 
        className={`tape absolute bottom-4 h-5 w-12 ${isEven ? 'right-8 rotate-[5deg]' : 'left-8 rotate-[-5deg]'}`}
      />

      {/* Floating hearts */}
      <motion.div
        className={`absolute text-dusty-rose ${isEven ? 'right-4 top-16' : 'left-4 top-20'}`}
        animate={{ y: [-3, 3, -3], rotate: isEven ? [-5, 5, -5] : [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-5 w-5 fill-current opacity-60" />
      </motion.div>


      {/* Title */}
      <motion.h2 
        className="mb-4 font-handwritten text-3xl text-burgundy sm:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Photo placeholder - polaroid style */}
      <motion.div 
        className={`mx-auto mb-4 bg-white p-2 pb-8 shadow-lg ${isEven ? 'rotate-2' : '-rotate-2'}`}
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: isEven ? 2 : -2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ maxWidth: '280px' }}
      >
        <div className="aspect-square w-full overflow-hidden bg-muted">
          {photoPlaceholder ? (
            <img 
              src={photoPlaceholder} 
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-soft-pink/30 to-dusty-rose/30">
              <Heart className="mb-2 h-12 w-12 text-dusty-rose/50" />
              <p className="font-casual text-sm text-muted-foreground">
                📸 Add your photo here
              </p>
            </div>
          )}
        </div>
        {/* Polaroid caption area */}
        <p className="mt-2 text-center font-casual text-sm text-antique-brown">
          ✏️ Add a caption
        </p>
      </motion.div>

      {/* Description */}
      <motion.p 
        className="flex-1 font-elegant text-base leading-relaxed text-foreground sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {description}
      </motion.p>

      {/* Page number */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <span className="font-casual text-sm text-muted-foreground">
          ~ page {pageNumber} ~
        </span>
      </motion.div>

      {/* Corner heart */}
      <div className={`absolute bottom-12 ${isEven ? 'right-6' : 'left-6'}`}>
        <Heart className="h-4 w-4 fill-soft-pink text-soft-pink opacity-50" />
      </div>
    </div>
  );
};

export default TimelinePage;
