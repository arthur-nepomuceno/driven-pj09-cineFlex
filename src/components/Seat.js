import styled from "styled-components";
import {useState} from "react";

export default function Seat({id, name, isAvailable, reserve, setReserve}){
    const blue = `#8DD7CF`;
    const bluer = `#45BDB0`;
    const yellow  = `#FBE192`;
    const yellower = '#F7C52B';
    const gray = `#C3CFD9`;
    const grayer = `#808F9D`;

    const[click, setClick] = useState(false)
    const[bgColor, setBgColor] = useState(gray);
    const[bdColor, setBdColor] = useState(grayer); 

    function SelectSeat(){
        
        if(isAvailable === true && click === false){
            setClick(true);
            setBgColor(blue);
            setBdColor(bluer);

            const reserveSeats = [...reserve, {id:id, number: name}];
            setReserve(reserveSeats);
            
        } else if(isAvailable === true && click === true){
            setClick(false);
            setBgColor(gray);
            setBdColor(grayer);

            const reserveSeats = reserve.filter(r => r.id !== id);
            setReserve(reserveSeats);

        } else if(isAvailable === false){
            alert("Esse assento não está disponível.")
        }
    }

    return(
        <Div background={isAvailable ? bgColor : yellow} 
             border={isAvailable ? bdColor : yellower} 
             onClick={SelectSeat}>
            <p>{name}</p>
        </Div>
    );
}

const Div = styled.div`
    width: 26px;
    height: 26px;
    margin: 0px 2px 14px 2px;

    background: ${props => props.background};
    border: 1px solid ${props => props.border};
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