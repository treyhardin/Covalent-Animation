import { useRef, useEffect, createRef } from "react";
import useIntersection from '../helpers/viewportDetect'

export default function PreviewHero(props) {

    const animRef = useRef();
    const inViewport = useIntersection(animRef, "0px"); // Trigger if 200px is visible from the element

    if (inViewport) {
        console.log('in viewport:', animRef);
    }

    useEffect(() => {
        console.log('I AM RE-RENDERING!!!')

    }, [props.animStyle, props.animEasing, props.animDuration]);
    
    return (
        <div className={`text-wrapper animate ${props.animStyle} ${inViewport ? "visible" : ""}`} ref={animRef}>
            <h1><em>Just Good</em> Animation</h1>
            <h6>A reference tool for designers to define standard animation systems & communicate with developers. Use the code preview toggle in the header to view code output.</h6>
            <p>Style: {props.animStyle}</p>
            <p>Easing: {props.animEasing}</p>
            <p>Duration: {props.animDuration}</p>
        </div>
    )
}