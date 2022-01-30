import React from 'react';
import './input.css';


export default function Input(props) { 

    return (
        <div className="field-wrapper">
            <label htmlFor="anim-duration">{props.label}</label>
            <input></input>
        </div>
    )
}