import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom"

export const GlobalContext = createContext();



export const ContextProvider = ({children}) => {
    const root = document.documentElement;
    let [searchParams, setSearchParams] = useSearchParams();

    const [settings, setSettings ] = useState ({
        duration: searchParams.get('duration') || 400,
        style: searchParams.get('style') || 'fade',
        easing: searchParams.get('easing') || 'ease-in-out',
        refresh: true
    })

    const changeSetting = ( keyName, value ) => {
        let newSettings = {
            ...settings,
            [keyName] : value
        }

        if (searchParams.has(keyName)) {
            searchParams.set(keyName, value)
        } else {
            searchParams.append(keyName, value)
        }
        setSearchParams(searchParams);
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
