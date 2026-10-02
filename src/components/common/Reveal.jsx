import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Reveal component using Intersection Observer API.
 * Smoothly reveals content (opacity 0 → 1, translateY 24px → 0) over ~600ms ease-out.
 * Triggers once per element.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const delayStyle = isVisible && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={domRef}
      style={delayStyle}
      className={`reveal-init ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
