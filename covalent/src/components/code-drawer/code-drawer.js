import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CodeBlock from "../code-block/code-block";
import { styleOptions } from "../options";
import './code-drawer.css';


export default function CodeDrawer(props) {

    const animateClass = 'animate';
    const nameTransition = '--anim-default';

    // const classElement = document.getElementsByClassName(animateClass);
    // const styles = window.getComputedStyle(classElement);

    const { settings, changeSetting } = useContext(GlobalContext);
    
    function handleClick() {
        props.drawerAction();
    }

    const globalCode = [
        {   label: nameTransition,
            value: settings.duration + 'ms ' + settings.easing + ';'
        }
    ];

    const globalExample = [
        {   label: '.animate',
            value: 'transition: all ' + 'var(' + nameTransition + ');'
        }
    ];

    const styleProperties = {
        
    }

    const styleCode = [


        {   label: '.animate',
            value: styleOptions[settings.style]
        },
        {   label: '.animate.visible',
            value: settings.duration + 'ms ' + settings.easing + ';'
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
                <CodeBlock title="Variables" type="variable" content={globalCode} infoLabel="Example" info={globalExample} />
                <CodeBlock title="Load Style" type="class" content={styleCode} infoLabel="Note" info={styleExample} />
                {/* <CodeBlock title="Load Style" /> */}
                {/* <CodeBlock title="Easing" />
                <CodeBlock title="Duration" /> */}
            </div>
        </div>
    )
}