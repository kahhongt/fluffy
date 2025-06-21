type ScrollCallback = (isVisible: boolean) => void;

interface ObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

class ScrollObserverService {
    private observers: Map<Element, IntersectionObserver> = new Map();

    /**
     * Creates an intersection observer for scroll-triggered animations
     * @param element - The element to observe
     * @param callback - Function called when visibility changes
     * @param options - Observer configuration options
     */
    observe(
        element: Element | null,
        callback: ScrollCallback,
        options: ObserverOptions = {}
    ) {
        if (!element) return;

        const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

        const observer = new IntersectionObserver(
            ([entry]) => {
                callback(entry.isIntersecting);
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        this.observers.set(element, observer);
    }

    /**
     * Stops observing a specific element
     * @param element - The element to stop observing
     */
    unobserve(element: Element | null) {
        if (!element) return;

        const observer = this.observers.get(element);
        if (observer) {
            observer.unobserve(element);
            observer.disconnect();
            this.observers.delete(element);
        }
    }

    /**
     * Disconnects all observers and cleans up
     */
    disconnect() {
        this.observers.forEach((observer) => {
            observer.disconnect();
        });
        this.observers.clear();
    }
}

// Export a singleton instance
export const scrollObserver = new ScrollObserverService();

// Export the class for custom instances if needed
export { ScrollObserverService };
