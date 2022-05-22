import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Main from "../components/Main"
import MovieData from "../components/MovieData";
import TicketData from "../components/TicketData";
import BuyerData from "../components/BuyerData";
import Button from "../components/Button";

export default function Success(){
    const navigate = useNavigate();

    return(
        <>
            <Title title={`Pedido feito com sucesso!`} fontWeight={`700`} color={`#247A6B`}/>
            <Main>
                <Div>
                    <MovieData title={`Filme e sessão`} movie={"Enola Holmes"} date={"24/06/2021 15:00"}/>
                    <TicketData title={`Ingresso`} seatNumber={`15`}/>
                    <BuyerData title={`Comprador`} name={`João da Silva Sauro`} cpf={`12345678910`}/>
                    <Button type={`button`} text={`Voltar para Home`} onClick={() => navigate("/")}/>
                </Div>
            </Main>            
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`