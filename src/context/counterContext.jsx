import {createContext, useState} from 'react'

export const CounterContext = createContext()

//  HOC
export const CounterProvider = ({children})=> {

    const [counter,setCounter] = useState(0)
    const addOne = () =>{
      setCounter(prev=> prev+1)
    }
    
    return(
        <CounterContext.Provider value={{counter,addOne}}>
            {children}
        </CounterContext.Provider>
    )
}