import { useState, useEffect, useContext, useMemo } from 'react'
import { GlobalContext } from '../context/GlobalContext';




export function useIntersection(element) {

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    }, [])

    const updateDelay = 100;

    const [isVisible, setVisible] = useState(false);

    const { settings } = useContext(GlobalContext);

    useEffect(() => {
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(isVisible) {
                    setVisible(false);
                    setTimeout(() => {
                        setVisible(entry.isIntersecting);
                      }, updateDelay);
                } else {
                    setVisible(entry.isIntersecting)
                };
            }, { options }
        );

        if (element.current ) {
            observer.observe(element.current);
          }
          return () => {
            observer.unobserve(element.current);
          };

    }, [settings]);

    return isVisible;
};

export function resetIntersection(element) {
}