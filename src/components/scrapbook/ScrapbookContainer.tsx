import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverPage from "./CoverPage";
import TimelinePage from "./TimelinePage";
import GalleryPage from "./GalleryPage";
import LoveNotesPage from "./LoveNotesPage";
import BigAskPage from "./BigAskPage";
import HeartsCelebration from "./HeartsCelebration";

// Timeline milestones data - CUSTOMIZE THESE!
const timelineMilestones = [
  {
    date: "September 2024",
    title: "We Met For The First Time",
    description: "✏️ Write about when you first met... What was it like? What did you feel? This is where your love story begins!",
  },
  {
    date: "October 2024",
    title: "We Met Twice",
    description: "✏️ Describe your second meeting... Was it planned or a happy coincidence? What made it special?",
  },
  {
    date: "November 2024",
    title: "✏️ Your Third Milestone",
    description: "✏️ Add your own memory here... Maybe your first date? First time holding hands? A special conversation?",
  },
  {
    date: "December 2024",
    title: "✏️ Your Fourth Milestone",
    description: "✏️ Another precious memory to add... Perhaps a holiday together? A meaningful gift? A moment of laughter?",
  },
  {
    date: "January 2025",
    title: "✏️ Your Fifth Milestone",
    description: "✏️ One more beautiful memory... What brings us to today? What makes you excited for tomorrow together?",
  },
];

const ScrapbookContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Total pages: Cover + 5 Timeline + Gallery + Love Notes + Big Ask = 9
  const totalPages = 9;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleOpenBook = () => {
    setDirection(1);
    setCurrentPage(1);
  };

  const handleYesAnswer = () => {
    setShowCelebration(true);
  };

  // Page flip animation variants
  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: direction > 0 ? "left center" : "right center",
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: "center center",
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: direction > 0 ? "left center" : "right center",
    }),
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <CoverPage onOpen={handleOpenBook} />;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        const milestoneIndex = currentPage - 1;
        return (
          <TimelinePage
            {...timelineMilestones[milestoneIndex]}
            pageNumber={currentPage}
          />
        );
      case 6:
        return <GalleryPage />;
      case 7:
        return <LoveNotesPage />;
      case 8:
        return <BigAskPage onYes={handleYesAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      {/* Hearts celebration overlay */}
      {showCelebration && <HeartsCelebration />}

      {/* Book container with side navigation */}
      <div className="relative flex w-full max-w-2xl items-center justify-center gap-2 sm:gap-4">
        {/* Left navigation button */}
        {currentPage > 0 && (
          <Button
            onClick={handlePrevPage}
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full text-burgundy hover:bg-dusty-rose/20 sm:h-12 sm:w-12"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        )}
        {/* Spacer when on cover page */}
        {currentPage === 0 && <div className="w-10 sm:w-12" />}

        {/* The scrapbook page */}
        <div className="book-container w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="scrapbook-page relative aspect-[3/4] w-full overflow-hidden"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>

          {/* Page indicator - only show after opening */}
          {currentPage > 0 && (
            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: totalPages - 1 }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i + 1 === currentPage
                      ? "bg-burgundy"
                      : "bg-dusty-rose/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right navigation button */}
        {currentPage > 0 && (
          <Button
            onClick={handleNextPage}
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full text-burgundy hover:bg-dusty-rose/20 sm:h-12 sm:w-12"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        )}
        {/* Spacer when on cover page */}
        {currentPage === 0 && <div className="w-10 sm:w-12" />}
      </div>

      {/* Footer hint */}
      <motion.p 
        className="mt-8 font-casual text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Made with 💕 just for you
      </motion.p>
    </div>
  );
};

export default ScrapbookContainer;
