import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BigAskPageProps {
  onYes: () => void;
}

const BigAskPage = ({ onYes }: BigAskPageProps) => {
  const [showNoDialog, setShowNoDialog] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
    onYes();
  };

  const handleNo = () => {
    setShowNoDialog(true);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-6 sm:p-8">
      {/* Decorative hearts around the page */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-soft-pink"
          style={{
            top: `${15 + (i * 12)}%`,
            left: i % 2 === 0 ? `${5 + (i * 3)}%` : undefined,
            right: i % 2 !== 0 ? `${5 + (i * 3)}%` : undefined,
          }}
          animate={{ 
            y: [-5, 5, -5], 
            rotate: i % 2 === 0 ? [-10, 10, -10] : [10, -10, 10] 
          }}
          transition={{ 
            duration: 2 + (i * 0.5), 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.2 
          }}
        >
          <Heart className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
        </motion.div>
      ))}

      {/* Main content */}
      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div 
            key="question"
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sparkle decoration */}
            <motion.div 
              className="mb-4 flex justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-8 w-8 text-dusty-rose" />
            </motion.div>

            {/* The big question */}
            <motion.h2 
              className="mb-8 font-handwritten text-4xl leading-tight text-burgundy sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Will You Be My<br />Valentine?
            </motion.h2>

            {/* Big heart */}
            <motion.div
              className="mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="mx-auto h-16 w-16 fill-primary text-primary sm:h-20 sm:w-20" />
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={handleYes}
                className="animate-gentle-pulse bg-burgundy px-10 py-6 font-handwritten text-xl text-cream hover:bg-burgundy/90"
              >
                Yes! 💕
              </Button>
              <Button
                onClick={handleNo}
                variant="outline"
                className="border-dusty-rose px-10 py-6 font-handwritten text-xl text-burgundy hover:bg-dusty-rose/20"
              >
                No...
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          /* Celebration when answered yes */
          <motion.div
            key="celebration"
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="mx-auto mb-6 h-24 w-24 fill-primary text-primary sm:h-32 sm:w-32" />
            </motion.div>
            <h2 className="font-handwritten text-4xl text-burgundy sm:text-5xl md:text-6xl">
              Yay! 🎉
            </h2>
            <p className="mt-4 font-casual text-xl text-antique-brown sm:text-2xl">
              I'm so happy! 💕
            </p>
            <p className="mt-2 font-elegant text-lg italic text-muted-foreground">
              Happy Valentine's Day, my love!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Funny "No" dialog */}
      <AlertDialog open={showNoDialog} onOpenChange={setShowNoDialog}>
        <AlertDialogContent className="paper-texture border-2 border-dusty-rose">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-handwritten text-2xl text-burgundy">
              Are you sure? 🥺
            </AlertDialogTitle>
            <AlertDialogDescription className="font-casual text-lg text-antique-brown">
              My heart says you should try again... Pretty please? 💕
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setShowNoDialog(false)}
              className="bg-burgundy font-handwritten text-cream hover:bg-burgundy/90"
            >
              Okay, let me reconsider 💝
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Corner decorations */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-dusty-rose opacity-50" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-dusty-rose opacity-50" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-dusty-rose opacity-50" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-dusty-rose opacity-50" />
    </div>
  );
};

export default BigAskPage;
