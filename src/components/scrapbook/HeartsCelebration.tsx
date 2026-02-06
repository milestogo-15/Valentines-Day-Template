import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const HeartsCelebration = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate random floating hearts
    const colors = [
      "text-primary",
      "text-dusty-rose",
      "text-soft-pink",
      "text-burgundy",
      "text-wax-seal",
    ];

    const newHearts: FloatingHeart[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 16 + Math.random() * 32,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setHearts(newHearts);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color}`}
          style={{
            left: `${heart.x}%`,
            bottom: -50,
          }}
          initial={{ 
            y: 0, 
            opacity: 1,
            scale: 0,
            rotate: Math.random() * 360 
          }}
          animate={{ 
            y: -window.innerHeight - 100,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.5],
            rotate: Math.random() > 0.5 ? 360 : -360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
          }}
        >
          <Heart 
            className="fill-current" 
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartsCelebration;
