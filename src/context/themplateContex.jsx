import { createContext,useState } from "react";

export const TemplateContext = createContext()

export const TemplateProvider = ({children}) =>{
    const templates = ['light','dark']
    const [themeType,setTemplate] = useState(templates[0])
    const [hasChangeTempalte,setHasChangeTempalte] = useState(20)

    const changeTemplate = () =>{
    setTemplate(actualTemplate => actualTemplate === templates[0] ? templates[1] : templates[0])
    }

    const myContext = {
        themeType,
        changeTemplate,
        hasChangeTempalte
    }

    return(<TemplateContext.Provider value={myContext}>
        {children}
    </TemplateContext.Provider>)
}