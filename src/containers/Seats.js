import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import Main from "../components/Main";
import SeatsList from "../components/SeatsList";
import Form from "../components/Form";
import Bottom from "./Bottom";


export default function Seats(){
    const {sessionID} = useParams();
    const [seatsList, setSeatsList] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promise.then((element) => {setSeatsList(element.data.seats)})
    }, [])

    const [reserve, setReserve] = useState([]);

    return(
        <>
            <Title title={`Selecione o(s) assento(s)`}/>
            <Main>             
               <SeatsList seatsList={seatsList} 
               reserve={reserve} 
               setReserve={setReserve}/>

               <Form reserve={reserve}/>
            </Main>
            <Bottom />
        </>
    );
}