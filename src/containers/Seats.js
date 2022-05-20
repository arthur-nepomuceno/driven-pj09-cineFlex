import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import Main from "../components/Main";
import Seat from "../components/Seat";
import Circle from "../components/Circle";

export default function Seats(){
    const {sessionID} = useParams();
    const [seatsList, setSeatsList] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promise.then((element) => {setSeatsList(element.data.seats)})
    }, [])
    console.log(seatsList)

    return(
        <>
            <Title title={`Selecione o(s) assento(s)`}/>
            <Main>
                {seatsList.map((seat, index) => <Seat key={index}
                                            name={seat.name} 
                                            isAvailable={seat.isAvailable}/>)}
                <Div>
                    <div>
                        <Circle bgColor={`#8DD7CF`} bdColor={`#45BDB0`}/>
                        <p>Selecionado</p>
                    </div>   
                    <div>
                        <Circle bgColor={`#C3CFD9`} bdColor={`#808F9D`}/>
                        <p>Disponível</p>
                    </div> 
                    <div>
                        <Circle bgColor={`#FBE192`} bdColor={'#F7C52B'}/>
                        <p>Indisponível</p>
                    </div>                  
                </Div>
            </Main>
        </>
    );
}

const Div = styled.div`
    width: 100%;
    padding: 0px 26px;
   
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;

        color: #4E5A65;
    }
`