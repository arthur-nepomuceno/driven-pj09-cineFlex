import styled from "styled-components"

export default function Button({type, text}){
    return(
        <Btn type={type}>
            {text}
        </Btn>
    );
}

const Btn = styled.button`
    width: 226px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border-style: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;

    &:hover{
        cursor: pointer;
    }
`