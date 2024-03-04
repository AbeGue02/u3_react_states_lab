import { useEffect, useState } from "react"
import {states, StateInterface} from "../states"
import { useParams, Link } from "react-router-dom"

export default function StateDetails () {
    
    const [state, setState] = useState<StateInterface>()
    const { id } = useParams()

    const findState = () => {
        let foundState = states.states.find((state) => {
            return state.abbreviation.toLowerCase() == id?.toLowerCase()
        })
        console.log(foundState)
        setState(foundState)
    }

    useEffect(() => {
        findState()
    }, [])

    return (
        <div className="stateDetails">
            <Link to={'/'}>Home</Link>
            <h1>{state?.name} ({state?.abbreviation})</h1>
            <h2>Capital: {state?.capital}</h2>
            <h3>Time Zone: {state?.timezone}</h3>
            <h3>Incorporation Date: {state && new Date(state.incorporation_date).toLocaleDateString('en-us', {month: 'long', year: 'numeric', day: 'numeric'})}</h3>
            <h4>Neighboring States:</h4>
            <ul>
                {state?.borders.map((otherState) => (
                    <li key={otherState}>{otherState}</li>
                ))}
            </ul>
            <h4>Pizza Quality:</h4>
            <div className="pizzaScoreContainer">
                {
                    state && Array.from(Array(state.quality_of_pizza)).map((_, index) => (
                        <img 
                            key={index}
                            className="pizzaIcon"
                            src="https://cdn-icons-png.flaticon.com/512/6978/6978255.png"/>
                    ))
                }
            </div>
        </div>
    )
}