import { useContext } from "react"
import { CounterContext } from "../context/counterContext"

export const Counter = () =>{

    const {counter} = useContext(CounterContext)
  
    return <h2>{`Counter ${counter}`}</h2>
}