import styled from "styled-components";
import Showtime from "./Showtime";

export default function Session({weekday, date, showtimes}){
    return(
        <DIV>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((showtime, index) => <Showtime key={index} 
                                                            time={showtime.name} 
                                                            id={showtime.id}/>)}
            </div>
        </DIV>
    );
}

const DIV = styled.div`
    width: 100%;
    height: fit-content;

    > p {
        width: fit-content;
        height: 35px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        display: flex;
        align-items: center;

        color: #293845;
    }

    > div {
        display: flex;
    }
`