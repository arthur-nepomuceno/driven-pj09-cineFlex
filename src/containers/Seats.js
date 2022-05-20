import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import Main from "../components/Main";

export default function Seats(){
    const {sessionID} = useParams();
    const [seatsList, setSeatsList] = useState([]);
    

    return(
        <>
            <Title title={`Selecione o(s) assento(s)`}/>
        </>
    );
}