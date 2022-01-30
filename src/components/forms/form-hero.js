import react, {useContext} from "react";
import Dropdown from "../dropdown/dropdown";
import Range from "../range/range";
import { styleOptions, easingOptions} from "../options";
import { GlobalContext } from "../context/GlobalContext";


export default function FormHero(props) {

    const { settings, setStyle, setEasing, setDuration, refreshSettings } = useContext(GlobalContext);

    return (
        <div className="form-wrapper">
            <div className="form-inner">
                <h2>Global Settings</h2>
                <Dropdown 
                    name="anim-style" 
                    label="Style" 
                    options={styleOptions}
                    value={settings.style}
                    setValue={setStyle} />
                <Dropdown 
                    name="anim-easing" 
                    label="Easing" 
                    options={easingOptions} 
                    value={settings.easing}
                    setValue={setEasing} />
                <Range 
                    name="anim-duration" 
                    label="Duration" 
                    min="100" 
                    max="1000" 
                    value={settings.duration} 
                    setValue={setDuration} />
                <button className="reload-button" onClick={refreshSettings}>Preview</button>
            </div>
        </div>
    )
}