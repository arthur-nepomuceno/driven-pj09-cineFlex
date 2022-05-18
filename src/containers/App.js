import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../styles/reset.css"
import "../styles/style.css"
import Header from "./Header";
import Movies from "./Movies";


export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
            </Routes>
        </BrowserRouter>
    );
}
/*
export default function App(){
    return(
        <>
            <Header />
            <Movies />
        </>
    );
}*/