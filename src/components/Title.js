import styled from "styled-components";

export default function Title({title, fontWeight="400", color="#000000"}){
    return(
        <H1 fontWeight={fontWeight} color={color}>
            {title}
        </H1>
    );
}

const H1 = styled.h1`
    width: 100%;
    min-height: 110px;
    
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: 24px;
    color: ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed black;
`

