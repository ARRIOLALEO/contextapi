import { useContext } from "react"
import { CounterContext } from "../context/counterContext"
export const AddOne = () =>{
    const {addOne} = useContext(CounterContext)
    return <button onClick={addOne}>Add One</button>
}