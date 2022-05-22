import styled from "styled-components";

export default function Text({text}){
    return(<P>{text}</P>);
}

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #293845;
    line-height: 26px;
    letter-spacing: 0.04em;
`