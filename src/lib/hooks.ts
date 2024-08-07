import { useActiveSectionContext } from "@/context/active-section-context";
import { RefObject, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export const useTypingEffect = (
  element: RefObject<HTMLElement>,
  strings: readonly string[],
  typeSpeed: number = 50
) => {
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: strings as string[],
      typeSpeed,
    });

    const restartTyping = () => {
      typed.reset(true); // Reset Typed instance to start from the beginning
      typed.start(); // Start the typing animation
    };

    // Set interval to restart typing after a set interval
    const intervalId = setInterval(restartTyping, 25000);

    // Cleanup function to clear the interval and destroy Typed instance
    return () => {
      clearInterval(intervalId); // Clear the interval
      typed.destroy(); // Destroy Typed instance to stop animation
    };
  }, [element, strings, typeSpeed]);
};
