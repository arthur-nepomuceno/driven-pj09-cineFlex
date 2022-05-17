import "../styles/Main.css"
import Title from "../components/Title";
import Content from "../components/Content"
import Footer from "./Footer";

export default function Main(){
    const screenTitle = `Selecione o filme`;

    return(
        <main>
            <Title title={screenTitle}/>
            <Content />
            <Footer />
        </main>
    );
}