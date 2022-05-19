import styled from "styled-components";

export default function Top(){
    return(
        <Header>
            <p>CINEFLEX</p>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 68px;
    background-color: #C3CFD9;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;
    }
`