import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Title from "../components/Title";
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
                                                        src={movie.posterURL}/>)}   
            </Main>
        </>
    );
}

const Main = styled.main`
    padding: 0 28px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`