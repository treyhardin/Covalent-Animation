import react, { useEffect } from "react";
import PreviewHero from "../previews/preview-hero";
import FormHero from "../forms/form-hero";
export default function SectionHero(props) {
    
    useEffect(() => {
    }, []);

    return (
        <section className="section-split">
            <PreviewHero />
            <FormHero />
        </section>
    )
}