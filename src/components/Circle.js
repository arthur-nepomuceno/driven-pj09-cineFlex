import styled from "styled-components";

export default function Circle({bgColor, bdColor}){
    return(
        <Div background={bgColor} border={bdColor}></Div>
    );
}

const Div = styled.div`
    width: 26px;
    height: 26px;
    margin: 0px 2px 14px 2px;

    background: ${props => props.background};
    border: 1px solid ${props => props.border};
    border-radius: 12px;
`