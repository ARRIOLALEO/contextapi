import {createContext, useState} from 'react'

export const CounterContext = createContext()

//  HOC
export const CounterProvider = ({children})=> {

    const [counter,setCounter] = useState(0)
    const addOne = () =>{
      setCounter(prev=> prev+1)
    }
    
  const myContext = {
    counter,
    addOne,
    tomatoes:""
}

    return(
        <CounterContext.Provider value={myContext}>
            {children}
        </CounterContext.Provider>
    )
}