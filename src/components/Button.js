import styled from "styled-components"

export default  function Button({text}){
    return(
        <Button>
            {text}
        </Button>
    );
}

const Button = styled.div`
    width: 226px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF
`