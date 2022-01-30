import { useRef, useEffect, useState } from "react";
import './code-block.css';


export default function CodeBlock(props) {

    const [ copyState, setCopyState ] = useState('Copy');
    const [ clipboardContents, setClipboard ] = useState('Copy');

    const clipboardValue = useRef();
    let clipboardText;
    
    function handleClick() {
        setCopyState('Copied!');
        setTimeout(() => {
            setCopyState('Copy');
        }, 2000);
        console.log(clipboardContents.current);
        navigator.clipboard.writeText(clipboardContents);
    }


    useEffect(() => {
        setClipboard(clipboardValue);
      }, [clipboardValue]);


    const blockContent = props.content;
    const blockInfo = props.info;

    return (
        <div className="code-block">
            <div className="block-header">
                <h3 className="block-title">{props.title}</h3>
                <p className="utility">{props.label}</p>
            </div>

            
                <div className="code-block-inner" ref={clipboardValue}>

                    <a className="clipboard-button" onClick={handleClick}>
                        <p className="clipboard-label utility">{copyState}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16">
                            <path fill="currentColor" d="M3.5 14.5H3h.5zM1.5 1h8V0h-8v1zm8.5.5v10h1v-10h-1zM9.5 12h-8v1h8v-1zM1 11.5v-10H0v10h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm8.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM9.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 009.5 0v1zm-8-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM13 4.5v10h1v-10h-1zM12.5 15h-8v1h8v-1zM4 14.5v-2.1H3v2.1h1zM10.476 4H12.5V3h-2.024v1zM4.5 15a.5.5 0 01-.5-.5H3A1.5 1.5 0 004.5 16v-1zm8.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm1-10A1.5 1.5 0 0012.5 3v1a.5.5 0 01.5.5h1z"/>
                        </svg>
                    </a>

                    {props.type == 'variable' &&
                        blockContent.map((codeLine,index) => {
                            return (
                                <div className="variable-item" key={index}>
                                    <p className="variable-label">{codeLine.label}: &nbsp;</p>
                                    <p className="variable-value">{codeLine.value}</p>
                                </div>
                            );
                        }
                    )}

                    {props.type == 'class' &&
                        blockContent.map((codeLine,index) => {
                            return (
                                <div className="class-item" key={index}>
                                    <p className="class-label">{codeLine.label} &#123;</p>
                                    <p className="class-value">{codeLine.value}</p>
                                    <p>&#125;</p>
                                </div>
                            );
                        }
                    )}
                    
                </div>

                <div className="code-info-block">
                    <p className="utility">{props.infoLabel}:</p>
                    <p className=""></p>

                    {props.type == 'variable' && 
                        blockInfo.map((infoLine,index) => {
                            return (
                                <div className="class-item" key={index}>
                                    <p className="class-label">{infoLine.label} &#123;</p>
                                    <p className="class-value">{infoLine.value}</p>
                                    <p>&#125;</p>
                                </div>
                            );
                        })
                    }

                    {props.type == 'class' && 
                        blockInfo.map((infoLine,index) => {
                            return (
                                <div className="class-item" key={index}>
                                    <p className="class-label">{infoLine.label}</p>
                                </div>
                            );
                        })
                    }

                </div>


            


        </div>
    )
}