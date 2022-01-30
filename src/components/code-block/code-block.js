import { useRef, useEffect, useState } from "react";
import { styleOptions } from "../options";
import './code-block.css';


export default function CodeBlock(props) {

    const [ copyState, setCopyState ] = useState('Copy');
    const [ clipboardState, setClipboard ] = useState('Copy');
    
    let clipboardValue;
    const codeBlock = useRef();

    
    function handleClick() {
        setCopyState('Copied!');
        setTimeout(() => {
            setCopyState('Copy');
        }, 2000);
        navigator.clipboard.writeText(clipboardValue);
        console.log(codeBlock.textContent);
    }


    // useEffect(() => {
    //     setClipboard(clipboardState);
    //     let codeLines = document.querySelectorAll('.code-item');
    //     codeLines.forEach(item => {
    //         clipboardValue = clipboardValue + item.textContent;
    //     });
    //     console.log(clipboardValue);
    //   }, [clipboardState]);


    const blockContent = props.content;
    const blockInfo = props.info;

    return (
        <div className="code-block">
            <div className="block-header">
                <h3 className="block-title">{props.title}</h3>
                <p className="utility">{props.label}</p>
            </div>

            
                <div className="code-block-inner code" ref={codeBlock}>

                    <a className="clipboard-button" onClick={handleClick}>
                        <p className="clipboard-label utility">{copyState}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16">
                            <path fill="currentColor" d="M3.5 14.5H3h.5zM1.5 1h8V0h-8v1zm8.5.5v10h1v-10h-1zM9.5 12h-8v1h8v-1zM1 11.5v-10H0v10h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm8.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM9.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 009.5 0v1zm-8-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM13 4.5v10h1v-10h-1zM12.5 15h-8v1h8v-1zM4 14.5v-2.1H3v2.1h1zM10.476 4H12.5V3h-2.024v1zM4.5 15a.5.5 0 01-.5-.5H3A1.5 1.5 0 004.5 16v-1zm8.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm1-10A1.5 1.5 0 0012.5 3v1a.5.5 0 01.5.5h1z"/>
                        </svg>
                    </a>

                    {props.type == 'variable' &&
                        blockContent.map((codeLine,index) => {
                            return (
                                <div className="code-item" key={index}>
                                    <pre className="code-parameter-item">{codeLine.value}</pre>
                                </div>
                            );
                        }
                    )}
            
                    {props.type == 'class' &&
                    
                        blockContent.map((codeLine,index) => {

                            console.log(blockContent)

                            let styleArray = [];

                            let styleObject = codeLine.styles[0].style;
                            for (const styleParameter in styleObject) {
                                styleArray.push(styleParameter + ' : ' + styleObject[styleParameter])
                            };

                            const styleItems = styleArray.map((parameter) => {
                                console.log(parameter);
                                return (
                                    <pre className="code-parameter-item">&#9;&#9;{parameter}</pre>
                                );
                            });

                            return (
                                <div className="code-item" key={index}>
                                    <pre>{codeLine.label} &#123;</pre>
                                    <div className="code-parameters">{styleItems}</div>
                                    <pre>&#125;</pre>
                                </div>
                            )
                            
                        }
                    )}
                    
                </div>

                <div className="code-info-block code">
                    <p className="utility">{props.infoLabel}:</p>
                    <p className=""></p>

                    {props.type == 'variable' && 
                        blockInfo.map((infoLine,index) => {
                            return (
                                <div className="class-item" key={index}>
                                    <pre className="class-label">{infoLine.label} &#123;</pre>
                                    <pre className="class-value">&#9;&#9;{infoLine.value}</pre>
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