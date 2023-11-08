import { createContext, useEffect, useState } from "react";
import { ar } from './../Components/lang/ar';
import { en } from "../Components/lang/en";
export const langContext = createContext()


const LangContextProvider = ({children}) => {

    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

    const langs = {
        ar: ar,
        en: en 
    }

    useEffect(() => {
        localStorage.setItem('lang', lang);
        const htmlElement = document.getElementsByTagName('html')[0];
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }, [lang]);
    

    return (
        <langContext.Provider value={{lang, setLang, langs}}>
            {children}
        </langContext.Provider>
    )
}

export default LangContextProvider