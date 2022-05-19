import styled from "styled-components";

export default function Title({title}){
    return(
        <H1>
            {title}
        </H1>
    );
}

const H1 = styled.h1`
    width: 100%;
    min-height: 110px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed black;
`

