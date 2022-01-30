import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CodeBlock from "../code-block/code-block";
import { styleOptions } from "../options";
import './code-drawer.css';


export default function CodeDrawer(props) {

    const animateClass = '.animate';
    const activeClass = '.visible';
    const nameTransition = '--anim-default';


    const { settings, changeSetting } = useContext(GlobalContext);
    
    function handleClick() {
        props.drawerAction();
    }


    const globalCode = [
        {   
            label: nameTransition,
            value: nameTransition + ' : ' + settings.duration + 'ms ' + settings.easing + ';',
            clipboard: nameTransition + ' : ' + settings.duration + 'ms ' + settings.easing + ';'
        },
        {   label: 'Movement',
            value: '--anim-movemement' + ': 60px;',
            clipboard: '--anim-duration' + ' : ' + settings.duration + 'ms;'
        },
        {   label: 'Skew',
            value: '--anim-skew' + ' 0deg, 5deg;',
            clipboard: '--anim-duration' + ' : ' + settings.duration + 'ms;'
        }
    ];

    const globalExample = [
        {   
            label: animateClass,
            value: 'transition: opacity ' + 'var(' + nameTransition + ');'
        }
    ];

    const styleLoaded = [
        {
            value: 'fade', 
            text: 'Fade',
            style: {
                opacity: 1,
                transform: 'none',
                transition: 'all var(--anim-default)'
            }
        }
    ];

    const styleCode = [

        {   
            label: animateClass,
            styles: styleOptions.filter(option => option['value'] == settings.style),
        },
        {   
            label: animateClass + activeClass,
            styles: styleLoaded
        }
    ];

    const styleExample = [
        {   label: 'Add .visible class to element when in viewport.'
        }
    ];


    return (
        <div className={`code-drawer ${settings.style} ${props.drawerState ? "visible" : ""}`}>
            <div className="drawer-header">
                <a href="#" className="drawer-close" onClick={() => handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 18" className="icon-close">
                        <path fill="currentColor" d="M.166 1.354l16 16 .707-.708-16-16-.707.708zm16-.708l-16 16 .707.707 16-16-.707-.707z"/>
                    </svg>
                    <p className="utility">Close</p>
                </a>
                <p className="utility">Code Preview</p>
            </div>
            <div className="drawer-content">
                <CodeBlock title="Variables" label="duration, easing" type="variable" content={globalCode} infoLabel="Example" info={globalExample} />
                <CodeBlock title="Load Style" label={settings.style} type="class" content={styleCode} infoLabel="Note" info={styleExample} />

            </div>
        </div>
    )
}