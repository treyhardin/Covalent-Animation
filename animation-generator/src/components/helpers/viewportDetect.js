import { useState, useEffect } from 'react'


export default function useIntersection(element, rootMargin) {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        if (element.current) {
            observer.observe(element.current);
          }
          return () => {
            observer.unobserve(element.current);
          };

    }, []);

    return isVisible;
};
