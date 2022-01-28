import react from "react";
import Dropdown from "../dropdown/dropdown";
import Input from "../input/input";
import Range from "../range/range";


export default function SettingsGlobal(props) {
    
    var animStyle = [
        { value: 'fade', text: 'Fade' },
        { value: 'fade-up', text: 'Fade Up' },
        { value: 'skew-up', text: 'Skew Up' }
    ]
    
    var animEasing = [
        { value: 'ease-out', text: 'Ease Out' },
        { value: 'cubic-bezier(0.25, 1, 0.5, 1)', text: 'Ease Out Quart' }, 
        { value: 'cubic-bezier(0.22, 1, 0.36, 1)', text: 'Ease Out Quint' },
        { value: 'cubic-bezier(0.16, 1, 0.3, 1)', text: 'Ease Out Exponential' }, 
        { value: 'ease-in-out', text: 'Ease In-Out' },
        { value: 'cubic-bezier(0.76, 0, 0.24, 1)', text: 'Ease In-Out Quart' }, 
        { value: 'cubic-bezier(0.83, 0, 0.17, 1)', text: 'Ease In-Out Quint' },
        { value: 'cubic-bezier(0.87, 0, 0.13, 1)', text: 'Ease In-Out Exponential' },
        { value: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)', text: 'Bounce' }
    ]

    return (
        <section className="section-split">
            <div className="text-wrapper">
                <h1><em>Just Good</em> Animation</h1>
                <h6>A reference tool for designers to define standard animation systems & communicate with developers. Use the code preview toggle in the header to view code output.</h6>
                <p>Style: {props.animStyle}</p>
                <p>Easing: {props.animEasing}</p>
                <p>Duration: {props.animDuration}</p>
            </div>
            <div className="form-wrapper">
                <div className="form-inner">
                    <h3>Global Settings</h3>
                    <Dropdown 
                        name="anim-style" 
                        label="Style" 
                        options={animStyle} 
                        currentValue={props.animStyle}
                        setCurrentValue={props.setAnimStyle} />
                    <Dropdown 
                        name="anim-easing" 
                        label="Easing" 
                        options={animEasing} 
                        currentValue={props.animEasing}
                        setCurrentValue={props.setAnimEasing} />
                    <Range 
                        name="anim-duration" 
                        label="Duration" 
                        min="100" 
                        max="1000" 
                        default={props.animDuration} 
                        animDuration={props.animDuration} 
                        setAnimDuration={props.setAnimDuration} />
                    <button className="reload-button">Preview</button>
                </div>
            </div>
        </section>
    )
}