import styled from "styled-components";

export default function Bottom(){
    return(
        <Section>
            footer
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    height: 118px;
    background-color: #DFE6ED;

    position: absolute;
    bottom: 0;

    border: 1px dashed black;
`