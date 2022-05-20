import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Showtime({time, id}){
    return(
        <Link to={`/seats/${id}`} >
            <DIV>
                <p>{time}</p>
            </DIV>
        </Link>
    );
}

const DIV = styled.div`
    width: 84px;
    height: 44px;
    background: #E8833A;
    border-radius: 3px;
    margin: 22px 10px 22px 0px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
    }

    &:hover{
        cursor: pointer;
    }
`