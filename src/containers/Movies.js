import "../styles/Movies.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Movie from "../components/Movie";

export default function Movies(){
    const [movieList, setMovieList] = useState([])
    useEffect(() => {const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);
                    promise.then(element => {setMovieList(element.data)})}, [])

    console.log(movieList)
     
    return(
        <>
            <Title title={`Selecione o filme`}/>
            <main>
                {movieList.map((movie, index) => <Movie key={index} src={movie.posterURL}/>)}   
            </main>
        </>
    );
}