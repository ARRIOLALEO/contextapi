import { useContext } from "react"
import { TemplateContext } from "../../../context/themplateContex"

export const ComponeentDeep = () =>{
   const {themeType, changeTemplate,hasChangeTempalte} = useContext(TemplateContext)

   return(<> <div>the selected template is  {themeType}</div>
   <>{hasChangeTempalte}</>
      <button onClick={changeTemplate}>Change Template</button>
      </>)
}