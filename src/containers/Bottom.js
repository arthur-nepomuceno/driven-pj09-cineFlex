import styled from "styled-components";
import Text from "../components/Text";

export default function Bottom({src, name, date}){
    return(
        <Section>
            <Figure>
                <img src={src} alt="movie cover"></img>
            </Figure>
            <div>
                <Text text={"Enola Holmes"}/>
                <Text text={"Quinta-feira 15:00"}/>
            </div>
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    height: 118px;
    padding: 14px 10px 14px 10px;
    background-color: #DFE6ED;

    position: sticky;
    bottom: 0;

    display: flex;
    align-items: center;

    border: 1px dashed black;
`

const Figure = styled.figure`
    width: 64px;
    height: 90px;
    margin-right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed black;

    img {
        width: 48px;
        height: 72px;
    }
`;