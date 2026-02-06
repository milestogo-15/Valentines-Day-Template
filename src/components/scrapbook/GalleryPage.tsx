import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

interface PhotoItem {
  id: number;
  caption: string;
  rotation: number;
}

const GalleryPage = () => {
  // Placeholder photos - CUSTOMIZE THESE
  const photos: PhotoItem[] = [
    { id: 1, caption: "✏️ Caption 1", rotation: -5 },
    { id: 2, caption: "✏️ Caption 2", rotation: 3 },
    { id: 3, caption: "✏️ Caption 3", rotation: -3 },
    { id: 4, caption: "✏️ Caption 4", rotation: 4 },
    { id: 5, caption: "✏️ Caption 5", rotation: -2 },
    { id: 6, caption: "✏️ Caption 6", rotation: 5 },
  ];

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
          Our Favorite Moments
        </h2>
        <div className="mx-auto mt-2 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-dusty-rose" />
          <Camera className="h-4 w-4 text-dusty-rose" />
          <div className="h-px w-12 bg-dusty-rose" />
        </div>
      </motion.div>

      {/* Photo grid - scattered polaroid style */}
      <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="polaroid cursor-pointer transition-transform hover:scale-105 hover:z-10"
            style={{ "--rotation": `${photo.rotation}deg` } as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            {/* Photo placeholder */}
            <div className="aspect-square w-full overflow-hidden bg-muted">
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-soft-pink/20 to-dusty-rose/20">
                <Heart className="mb-1 h-6 w-6 text-dusty-rose/40 sm:h-8 sm:w-8" />
                <p className="font-casual text-xs text-muted-foreground">
                  📸 Photo {photo.id}
                </p>
              </div>
            </div>
            {/* Caption */}
            <p className="mt-1 text-center font-casual text-xs text-antique-brown sm:text-sm">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative tape */}
      <div className="tape absolute left-2 top-8 h-5 w-10 rotate-[-15deg]" />
      <div className="tape absolute bottom-8 right-4 h-4 w-8 rotate-[10deg]" />

      {/* Floating hearts */}
      <motion.div
        className="absolute right-3 top-16 text-soft-pink"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-4 w-4 fill-current" />
      </motion.div>
    </div>
  );
};

export default GalleryPage;
