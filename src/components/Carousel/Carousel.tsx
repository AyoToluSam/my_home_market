import { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselContent,
} from "./CarouselStyles";

// Carousel Types
type CarouselProps = {
  slides: ReactNode[];
  interval?: number;
};

const Carousel = ({ slides, interval = 3000 }: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const carousel = () => {
    setActiveItem((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handleJumpActive = (index: number) => {
    setActiveItem(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(carousel, interval);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, activeItem]);

  return (
    <CarouselContainer>
      {slides.map((item, index) => (
        <CarouselContent
          key={index}
          active={activeItem === index}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {item}
        </CarouselContent>
      ))}
      <CarouselButtons>
        {slides.map((_, index) => (
          <CarouselButton
            key={index}
            active={activeItem === index}
            onClick={() => handleJumpActive(index)}
          >
            <CarouselButtonDot />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default Carousel;
