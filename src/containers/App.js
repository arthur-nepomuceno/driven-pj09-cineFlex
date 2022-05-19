import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../styles/reset.css"
import "../styles/style.css"
import Top from "./Top";
import Movies from "./Movies";
import Sessions from "./Sessions";


export default function App(){
    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/:movieID/showtimes" element={<Sessions/>}/>
            </Routes>
        </BrowserRouter>
    );
}