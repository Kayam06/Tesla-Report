import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useCountUp(endValue, duration = 1.4) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

  useEffect(() => {
    motionValue.set(endValue);
  }, [endValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  return displayValue;
}
