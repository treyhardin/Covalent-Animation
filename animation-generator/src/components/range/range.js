import React, {useState} from 'react';
import './range.css';


export default function Range(props) {

    function handleChange(event) {
        props.setAnimDuration(event.target.value);
      }

    return (
        <div className="field-wrapper range-wrapper">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                type="range" id="" 
                name={props.name} 
                min={props.min} 
                max={props.max}
                step="100"
                value={props.animDuration}
                onChange={handleChange}>
            </input>
            <p>{props.animDuration}ms</p>
        </div>
    )
}