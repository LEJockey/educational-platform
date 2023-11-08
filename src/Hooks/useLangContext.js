import { useContext } from "react"
import { langContext } from "../Context/LangContext"



const useLangContext = () => {
    
    const {lang, langs} = useContext(langContext) 

    return {lang, langs}

}

export default useLangContext

