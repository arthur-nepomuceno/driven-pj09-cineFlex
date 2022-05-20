import styled from "styled-components";
import {useState} from "react";

export default function Seat({name, isAvailable}){

    const[click, setClick] = useState(false)
    const[color, setColor] = useState(`#C3CFD9`);
    const[border, setBorder] = useState(`#808F9D`) 

    function SelectSeat(){
        if(isAvailable === true && click === false){
            setClick(true);
            setColor(`#8DD7CF`);
            setBorder(`#45BDB0`);
        } else if(isAvailable === true && click === true){
            setClick(false);
            setColor(`#C3CFD9`);
            setBorder(`#808F9D`);
        } else if(isAvailable === false){
            alert("Esse assento não está disponível.")
        }
    }

    return(
        <DIV color={isAvailable} border={isAvailable} onClick={SelectSeat}>
            <p>{name}</p>
        </DIV>
    );
}

const DIV = styled.div`
    width: 26px;
    height: 26px;
    margin: 0px 2px 14px 2px;

    background: ${props => props.color ? `#C3CFD9`: `#FBE192`};
    border: 1px solid ${props => props.border ? '#808F9D' : '#F7C52B'};
    border-radius: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #000000;
    }

    &:hover{
        cursor: pointer;
    }
`