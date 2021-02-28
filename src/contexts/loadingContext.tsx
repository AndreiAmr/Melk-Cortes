import { createContext, ReactNode, useEffect, useState } from "react";

interface LoadingContextData {
    handleSetIsAboutMeLoaded: (isLoaded: boolean) => void;
    handleSetIsServicesLoaded: (isLoaded: boolean) => void;
    handleSetIsPicturesOfServiceLoaded: (isLoaded: boolean) => void;
    handleSetIsHomeLoaded: (isLoaded: boolean) => void;
    isSiteReadyToShowUp: boolean
}

interface ProviderProps {
    children: ReactNode
}


const LoadingContext = createContext({} as LoadingContextData);

function Provider({ children }: ProviderProps) {
    const [isHomeLoaded, setIsHomeLoaded] = useState<boolean>(false);
    const [isAboutMeLoaded, setIsAboutMeLoaded] = useState<boolean>(false);
    const [isServicesLoaded, setIsServicesLoaded] = useState<boolean>(false);
    const [isPicturesOfService, setIsPicturesOfService] = useState<boolean>(false);

    const [isSiteReadyToShowUp, setIsSiteReadyToShowUp] = useState<boolean>(false);

    function handleSetIsHomeLoaded() {
        setIsHomeLoaded(true)
    }
    function handleSetIsAboutMeLoaded() {
        setIsAboutMeLoaded(true)

    }
    function handleSetIsServicesLoaded() {
        setIsServicesLoaded(true)

    }
    function handleSetIsPicturesOfServiceLoaded() {
        setIsPicturesOfService(true)
    }

    useEffect(() => {
        if(isHomeLoaded && isAboutMeLoaded && isServicesLoaded && isPicturesOfService) {
            setIsSiteReadyToShowUp(true);
        }

    }, [isHomeLoaded, isAboutMeLoaded, isServicesLoaded, isPicturesOfService])


    return (
        <LoadingContext.Provider value={{
            handleSetIsHomeLoaded,
            handleSetIsAboutMeLoaded,
            handleSetIsServicesLoaded,
            handleSetIsPicturesOfServiceLoaded,
            isSiteReadyToShowUp
        }}>

            {children}

        </LoadingContext.Provider >
    )
}


export {
    LoadingContext,
    Provider
}