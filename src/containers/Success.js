import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "../components/Title";
import Main from "../components/Main"
import MovieData from "../components/MovieData";
import TicketData from "../components/TicketData";
import BuyerData from "../components/BuyerData";
import Button from "../components/Button";

export default function Success(){
    const navigate = useNavigate();
    const location = useLocation();
    const buyInfo = location.state;
    const {title, date, hour, seatNumbers, buyerName, buyerCPF} = buyInfo;

    function formatCPF(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    return(
        <>
            <Title title={`Pedido feito com sucesso!`} fontWeight={`700`} color={`#247A6B`}/>
            <Main>
                <Div>
                    <MovieData title={`Filme e sessão`} 
                                movie={title} 
                                date={`${date} ${hour}`}/>

                    <TicketData title={`Ingresso`} 
                                seatNumbers={seatNumbers}/>

                    <BuyerData title={`Comprador(a)`} 
                                name={buyerName} 
                                cpf={formatCPF(buyerCPF)}/>

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