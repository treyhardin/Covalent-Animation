import { useRef, useContext, useEffect, useState } from "react";
import { useIntersection, resetIntersection } from '../viewport-detect/viewportDetect'
import { GlobalContext } from "../context/GlobalContext";


export default function PreviewHero() {

    const animRef = useRef();
    let inViewport = useIntersection(animRef); 

    const { settings, changeSetting } = useContext(GlobalContext);

    return (
        <div className={`text-wrapper animate ${settings.style} ${inViewport ? "visible" : ""}`} ref={animRef}>
            <h1><em>Covalent</em></h1>
            <h6>A reference tool for designers to define standard animation systems & communicate with developers. Use the code preview toggle in the header to view code output.</h6>
        </div>
    )
}