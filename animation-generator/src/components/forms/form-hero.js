import react from "react";
import Dropdown from "../dropdown/dropdown";
import Range from "../range/range";
import { styleOptions, easingOptions} from "../options"


export default function FormHero(props) {

    return (
        <div className="form-wrapper">
            <div className="form-inner">
                <h3>Global Settings</h3>
                <Dropdown 
                    name="anim-style" 
                    label="Style" 
                    options={styleOptions} 
                    currentValue={props.animStyle}
                    setCurrentValue={props.setAnimStyle} />
                <Dropdown 
                    name="anim-easing" 
                    label="Easing" 
                    options={easingOptions} 
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
    )
}