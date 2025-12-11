import React, { useState, useEffect } from 'react';

/**
 * Counter Component
 * 
 * A smooth, animated counter that increments from 0 to a target number.
 * Uses React hooks (useState, useEffect) for animation without external animation libraries.
 * Targets approximately 60fps animation for smooth visual experience.
 * 
 * Props:
 *   - target (number, required): The final number to count up to
 *   - duration (number, optional): Animation duration in milliseconds (default: 2000)
 *   - suffix (string, optional): Suffix to append to the number (e.g., "+", "M", "K")
 */
const Counter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target <= 0) return;

    // Use requestAnimationFrame for consistent 60fps animation
    let startTime = null;
    let animationId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smooth acceleration/deceleration
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(target * easeOutQuad);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at target
        setCount(target);
      }
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup: Cancel animation frame on unmount or when target changes
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;

