import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold: number = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasInersected] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasInersected(true);
        }
      },
      { threshold, root: null }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, ref.current]);

  return { ref, isVisible: hasIntersected ? isVisible : false };
};

export default useScrollAnimation;
