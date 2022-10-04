import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";

function App() {
    return (
        <div>
            <h1>USE REDUCER</h1>
            <hr></hr>
            <h3>
                <a 
                    href="https://es.reactjs.org/docs/hooks-reference.html#usereducer"
                    target="_blank"
                    rel="noreferrer"
                >Documentación reducer</a>
            </h3>
            <hr></hr>
            <ContadorMejorado></ContadorMejorado>
            <hr></hr>
            <Contador></Contador>
            <hr></hr>
        </div>
    );
}

export default App;