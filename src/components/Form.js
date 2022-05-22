import styled from "styled-components";
import axios from "axios";
import {useState} from "react";
import { Link } from "react-router-dom";
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
                const reserveIds = reserve.map(reserve => reserve.id);
                const reserveSeats = reserve.map(reserve => reserve.number);

                const request = {ids:reserveIds, name: buyerName, cpf: buyerCPF};
                const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
                                            request)
                promise.then(response => console.log(response));
                promise.catch(response => console.log(response));

                console.log(request);
                console.log(reserveIds);
                console.log(reserveSeats);
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
    height: 256px;
    margin-top: 40px;
    margin-bottom: 30px;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`