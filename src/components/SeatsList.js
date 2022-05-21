import styled from "styled-components";
import Seat from "../components/Seat";
import Circle from "../components/Circle";

export default function SeatsList({seatsList, reservedSeats, setReservedSeats}){
    return(
        <>
            {seatsList.map((seat, index) => <Seat key={index}
                                            id={seat.id}
                                            name={seat.name} 
                                            isAvailable={seat.isAvailable}
                                            rSeats={reservedSeats}
                                            setRSeats={setReservedSeats}/>)}
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