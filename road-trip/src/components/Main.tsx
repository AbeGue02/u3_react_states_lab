import { Route, Routes } from "react-router-dom";
import StateList from "./StateList";
import StateDetails from "./StateDetails";

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StateList/>}/>
                <Route path='/:id' element={<StateDetails/>}/>
            </Routes>
        </div>
    )
}