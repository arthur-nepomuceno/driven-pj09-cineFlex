import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import Main from "../components/Main";
import Movie from "../components/Movie";

export default function Movies(){
    const [movieList, setMovieList] = useState([])
    useEffect(() => {const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);
                    promise.then(element => {setMovieList(element.data)})}, [])
     
    return(
        <>
            <Title title={`Selecione o filme`}/>
            <Main>
                {movieList.map((movie, index) => <Movie key={index}
                                                        id={movie.id}
                                                        src={movie.posterURL}
                                                        name={movie.title}
                                                        date={movie.releaseDate}/>)}   
            </Main>
            
        </>
    );
}