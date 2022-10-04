import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

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
            <CrudApi></CrudApi>
            <hr></hr>
            <ShoppingCart></ShoppingCart>
            <hr></hr>
            <ContadorMejorado></ContadorMejorado>
            <hr></hr>
            <Contador></Contador>
            <hr></hr>
        </div>
    );
}

export default App;