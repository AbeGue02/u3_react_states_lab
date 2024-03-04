import { useNavigate } from "react-router-dom"
import {states} from "../states"

export default function StateList () {
    
    let navigate = useNavigate()

    return (
        <div className="statesList">
            {
                states.states.map((state) => (
                    <div className='state' key={state.abbreviation}>
                        <p onClick={() => navigate(`/${state.abbreviation}`)}>{state.name}</p>
                    </div>
                ))
            }
        </div>
    )
}