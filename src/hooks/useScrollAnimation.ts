import { useEffect, useRef, useState } from 'react';
import { scrollObserver } from '../services/scrollObserver';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered animations
 * @param options - Configuration options for the observer
 * @returns [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const { triggerOnce = true, ...observerOptions } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleVisibilityChange = (visible: boolean) => {
            if (visible) {
                setIsVisible(true);
                // If triggerOnce is true, stop observing after first trigger
                if (triggerOnce) {
                    scrollObserver.unobserve(element);
                }
            } else if (!triggerOnce) {
                setIsVisible(false);
            }
        };

        scrollObserver.observe(
            element,
            handleVisibilityChange,
            observerOptions
        );

        return () => {
            scrollObserver.unobserve(element);
        };
    }, [triggerOnce, observerOptions.threshold, observerOptions.rootMargin]);

    return [elementRef, isVisible] as const;
}
