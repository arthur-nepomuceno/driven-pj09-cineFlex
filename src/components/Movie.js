import "../styles/Movie.css"

export default function Movie({src}){
    return(
        <figure>
            <img src={src} alt="movie cover"></img>
        </figure>
    );
}