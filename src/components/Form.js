import styled from "styled-components";
import {useState} from "react";
import Input from "./Input";
import Button from "./Button"

export default function Form({reservedSeats}){
    const [buyerName, setBuyerName] = useState("")
    const [buyerCPF, setBuyerCPF] = useState("")

    function sendRequest(event){
        event.preventDefault();

        


        setBuyerName("");
        setBuyerCPF("");
    }

    return(
        <Formulary onSubmit={sendRequest}>
            <div>
                <Input htmlFor={"nomeComprador"} 
                name={"Nome do comprador:"} 
                inputType={"text"}
                placeHolder={"Digite seu nome..."}
                value={buyerName}
                setValue={setBuyerName}/>

                <Input htmlFor={"cpfComprador"} 
                name={"CPF do comprador:"} 
                inputType={"text"}
                placeHolder={"Digite seu cpf..."}
                value={buyerCPF}
                setValue={setBuyerCPF}/>
            </div>
            <Button type={`submit`} text={`Reservar assentos(s)`}/>
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