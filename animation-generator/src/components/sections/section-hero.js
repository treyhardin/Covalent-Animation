import react, { useEffect } from "react";
import PreviewHero from "../previews/preview-hero";
import FormHero from "../forms/form-hero";


export default function SectionHero(props) {
    

    return (
        <section className="section-split">
            <PreviewHero 
                animStyle={props.animStyle}
                animEasing={props.animEasing}
                animDuration={props.animDuration}
            />
            <FormHero 
                animStyle={props.animStyle}
                setAnimStyle={props.setAnimStyle}
                animEasing={props.animEasing}
                setAnimEasing={props.setAnimEasing}
                animDuration={props.animDuration}
                setAnimDuration={props.setAnimDuration}
            />
        </section>
    )
}