import styled from "styled-components";
import {useState} from "react";
import Input from "./Input";
import Button from "./Button"

export default function Form({reserve}){
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

    function isNameValid(name){
        if(name.length === 0){
            return(alert("Por favor, digite um nome."));
        }
        for(let i = 0; i < name.length; i++){
            let digit = name[i];
            if(!/[a-z]/.test(digit)){
                return(alert("Por favor, digite apenas letras no seu nome."))
            }
        }
        return true;
    }

    function isCPFValid(cpf){
        if(cpf.length === 0){
            return(alert("Por favor, digite um CPF."));
        }
        for(let i = 0; i < cpf.length; i++){
            let digit = cpf[i];
            if(!/[0-9]/.test(digit)){
                return(alert("Por favor, digite apenas números."))
            }
        }
        if(cpf.length < 11 || cpf.length > 11){
            return(alert("Um CPF deve conter 11 dígitos."));
        }
        return true;
    }

    function isReserveValid(arr){
        if(arr.length === 0){
            return(alert("Você ainda não selecionou nenhum assento."))
        }
        return true;
    }

    function sendRequest(event){
        event.preventDefault();

        if(isReserveValid(reserve)){
            if(isNameValid(buyerName) && isCPFValid(buyerCPF)){
                const request = {ids:reserve, name: buyerName, cpf: buyerCPF};
                console.log(request);
                setBuyerName("")
                setBuyerCPF("");
            }
        };    
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