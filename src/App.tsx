import './App.css'
import rlogo from "./assets/Brum.png";
//import PromiseCard from "./components/PromiseCard.tsx";
import Hero from './components/Hero'

function App() {

    return (
        <div className="App">
            <section className="header-sec">
                <h1 className="header-logo">Logo!</h1>
            </section>
            <section className="hero-sec">
                <Hero title="Wilkommen bei der Dieter Wenzelmann GmbH"
                      description="Das hier ist ein nettes Familienunternehmen"
                      image={rlogo}/>
            </section>
            <section className="promise-sec">
                <div>
                    <p>Hello</p>
                </div>
            </section>

        </div>
    );
}

export default App
