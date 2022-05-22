import styled from "styled-components";
import Text from "./Text";

export default function BuyerData({title, name, cpf}){
    return( 
        <Div>
            <h1>
                {title}
            </h1>
            <Text text={`Nome: ${name}`}/>
            <Text text={`CPF: ${cpf}`}/>
        </Div>
    );
}

const Div = styled.div`
    margin-bottom: 40px;
    width: 100%;

    h1{
        margin-bottom: 10px;

        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;
        
        color: #293845;
    }
    
`