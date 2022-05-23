import styled from "styled-components";
import Text from "./Text";

export default function TicketData({title, seatNumbers}){
    return( 
        <Div>
            <h1>
                {title}
            </h1>
            {seatNumbers.map((number, index) => <Text key={index} text={`Assento ${number}`}/>)}            
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