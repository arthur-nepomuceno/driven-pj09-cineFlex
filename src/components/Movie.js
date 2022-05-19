import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({id, src}){
    return(
        <Figure>
            <Link to={`/${id}/showtimes`}>
                <img src={src} alt="movie cover"></img>
            </Link>
        </Figure>
    );
}

const Figure = styled.figure`
    min-width: 145px;
    min-height: 210px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed black;

    img {
        max-width: 130px;
        max-height: 192px;
    }
`;