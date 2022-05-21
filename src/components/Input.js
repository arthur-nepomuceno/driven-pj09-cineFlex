import styled from "styled-components";


export default function Input({htmlFor, name, inputType, placeHolder, value, setValue}){
    return(
        <Div>
            <label htmlFor={htmlFor}>{name}</label>
            <input type={inputType} 
                    id={htmlFor} 
                    placeholder={placeHolder}
                    value={value}
                    onChange={e => {setValue(e.target.value)}}/>
        </Div>
    );
}

const Div = styled.div`
    margin-bottom: 8px;

    label{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        color: #293845;
    }

    input{
        width: 100%;
        height: 51px;
        padding: 0px 18px 0px 18px;

        font-style: italic;
        font-weight: 400;
        font-size: 18px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;

        color: #AFAFAF;
    }
`