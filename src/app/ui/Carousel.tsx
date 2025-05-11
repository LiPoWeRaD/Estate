"use client"

import { FC, ReactNode, useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowR from '../svg/arrowR';
import Stars from './stars';

interface CarouselProps {
  items?: ReactNode[];
  title?: string;
  description?: string;
  viewBtn?: string | boolean;
  mobileVisibleCount?: number;
  desktopVisibleCount?: number;
  minHeight?: string;
  minHeightPlus?: string
  DesktopCols?: number
  className?: string
}
// grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
// grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
// grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1
const Carousel: FC<CarouselProps> = ({ 
  items = [], 
  title = "Featured Properties",
  description = `Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`,
  mobileVisibleCount = 1,
  desktopVisibleCount = 3,
  viewBtn = "View All Properties",
  minHeight,
  minHeightPlus = "0",
  DesktopCols = 3,
  className = "h-[650px] sm:h-[650px] md:h-[750px] lg:h-[950px] xl:h-[600px]"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1280;
      setIsDesktop(isNowDesktop);
      if (!isNowDesktop && currentIndex !== 0) {
        setCurrentIndex(0);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const [visibleCount, setVisibleCount] = useState(isDesktop ? desktopVisibleCount : mobileVisibleCount);

  useEffect(() => {
    setVisibleCount(isDesktop ? desktopVisibleCount : mobileVisibleCount);
  }, [isDesktop, desktopVisibleCount, mobileVisibleCount]);
  
  const maxIndex = useMemo(() => Math.max(0, items.length - visibleCount), [items.length, visibleCount]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(prev => Math.max(0, Math.min(prev + newDirection, maxIndex)));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="col-start-1 col-span-12 mx-auto py-12 px-4">
      <p className="mb-4"><Stars /></p>
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-6 mb-10">
        <p className="md:col-span-4 text-lg">{description}</p>
        {viewBtn !== false && (
          <button className="ml-auto px-[24px] py-[14px] hidden col-start-5 col-span-2 md:inline-block whitespace-nowrap w-fit bg-grey08 rounded-2xl border border-grey15 cursor-pointer
            hover:bg-grey08/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey08 focus:ring-opacity-50">
            {viewBtn}
          </button>
        )}
      </div>
      
      <div className="relative">
        {/* Контейнер с автоматической высотой */}
        <div 
          ref={containerRef}
          className={`relative overflow-hidden ${!minHeight ? className : ''}`}
          style={
            minHeight 
              ? { 
                  minHeight: visibleCount > 1 
                    ? `${minHeight}px` 
                    : `${Number(minHeight) + Number(minHeightPlus)}px`
                } 
              : {}
          }
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.5
              }}
              className="absolute top-0 left-0 w-full"
            >
              <div className={`grid ${isDesktop ? `grid-cols-${DesktopCols}` : 'grid-cols-1'} gap-6`}>
                {visibleItems.map((item, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="w-full"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Навигация */}
        <div className="grid grid-cols-12 pt-4 border-t border-grey15 items-center justify-center gap-2">
          <p className="col-span-2 text-nowrap whitespace-nowrap text-center text-grey80">
            {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of {isDesktop ? items.length - desktopVisibleCount + 1 : items.length}
          </p>

          <button
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            className="col-start-9 col-span-1 bg-grey15 p-3.5 h-fit w-fit rounded-full border border-grey15 shadow-md hover:bg-gray-100 disabled:opacity-50 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey15 focus:ring-opacity-50"
            aria-label="Previous slide"
          >
            <ArrowR />
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={currentIndex >= maxIndex}
            className="col-start-11 col-span-1 bg-grey15 p-3.5 h-fit w-fit rounded-full border border-grey15 shadow-md hover:bg-gray-100 disabled:opacity-50 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey15 focus:ring-opacity-50"
            aria-label="Next slide"
          >
            <ArrowR className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;