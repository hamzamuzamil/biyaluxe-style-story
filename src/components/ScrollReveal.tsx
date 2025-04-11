
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'zoom-in' | 'slide-in-left' | 'slide-in-right';
}

const ScrollReveal = ({ 
  children, 
  className, 
  threshold = 0.1, 
  delay = 0,
  animation = 'fade-in'
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        {
          "opacity-0": !isVisible,
          "opacity-100": isVisible,
          "translate-y-10": !isVisible && (animation === 'fade-in' || animation === 'slide-up'),
          "translate-y-0": isVisible && (animation === 'fade-in' || animation === 'slide-up'),
          "scale-95": !isVisible && animation === 'zoom-in',
          "scale-100": isVisible && animation === 'zoom-in',
          "translate-x-[-100px]": !isVisible && animation === 'slide-in-left',
          "translate-x-0": isVisible && animation === 'slide-in-left',
          "translate-x-[100px]": !isVisible && animation === 'slide-in-right',
        },
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
