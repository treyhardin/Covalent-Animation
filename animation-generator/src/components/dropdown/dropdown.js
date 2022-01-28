import React, {useState} from 'react';
import './dropdown.css';


export default function Dropdown(props) {

    let options = props.options;

    const [listOpen, setListOpen] = useState(false);
    // const [value, setValue] = useState(props.currentValue);

    const toggleState = () => {
        if (listOpen) {
            setListOpen(false);
            return;
        }
        setListOpen(true);
    };

    const onOptionClicked = value => () => {
        props.setCurrentValue(value);
        setListOpen(false);
        
    };

    const handleChange = event => {
        // event.target.value = props.currentValue;
        // console.log(listOpen);
    }

    const handleBlur = event => {
        if ( event.target ) {

        }
    }


    return (
        <div className={`field-wrapper dropdown-wrapper ${listOpen ? "active" : ""}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id="standard-duration" className="animation-variable" onFocus={toggleState} onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)} value={props.currentValue} >
                {options.map((option,index) => {
                    return <option hidden key={index} value={option.value}>{option.text}</option>
                })}
            </select>
            <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path fill="currentColor" d="M16.68 17.152v.5h.5v-.5h-.5zm-.5-16v16h1v-16h-1zm.5 15.5h-16v1h16v-1zM.325 1.505l16 16 .707-.707-16-16-.707.707z"/>
            </svg>
            <ul className='dropdown-menu' >
                {options.map((option,index) => {
                    return <li className="dropdown-item" key={index} onClick={onOptionClicked(option.value)}>{option.text}</li>;
                })}
            </ul>
        </div>
    )
}