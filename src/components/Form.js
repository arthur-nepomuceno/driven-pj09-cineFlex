import styled from "styled-components";
import Input from "./Input";
import Button from "./Button"

export default function Form(){
    return(
        <Formulary>
            <div>
                <Input htmlFor={"nomeComprador"} 
                name={"Nome do comprador:"} 
                inputType={"text"}
                placeHolder={"Digite seu nome..."}/>

                <Input htmlFor={"cpfComprador"} 
                name={"CPF do comprador:"} 
                inputType={"text"}
                placeHolder={"Digite seu cpf..."}/>
            </div>
            <Button text={`Reservar assentos(s)`}/>
        </Formulary>
    );
}

const Formulary = styled.form`
    margin-top: 40px;
    height: 256px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`