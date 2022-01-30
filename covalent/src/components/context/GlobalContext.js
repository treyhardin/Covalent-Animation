import { createContext, useState } from "react";

export const GlobalContext = createContext();



export const ContextProvider = ({children}) => {
    const root = document.documentElement;

    const [settings, setSettings ] = useState ({
        duration: 400,
        style: 'fade',
        easing: 'ease-in-out',
        refresh: true
    })

    const changeSetting = ( keyName, value ) => {
        let newSettings = {
            ...settings,
            [keyName] : value
        }
        setSettings(newSettings);
    }

    const refreshSettings = () => {
        changeSetting('refresh', !settings.refresh);
    }

    const setStyle = ( value ) => {
        changeSetting('style', value);
    }

    const setEasing = ( value ) => {
        changeSetting('easing', value);
        root.style.setProperty(`--anim-easing`, value);
    }

    const setDuration = ( value ) => {
        changeSetting('duration', value);
        root.style.setProperty(`--anim-duration`, value + 'ms');
    }

    return (
        <GlobalContext.Provider 
            value={{ 
                settings, 
                setSettings,
                refreshSettings,
                setEasing,
                setStyle,
                setDuration,
                changeSetting
            }}>
            {children}
        </GlobalContext.Provider>
    )
}