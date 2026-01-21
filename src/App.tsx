import './App.css'
import rlogo from "./assets/Brum.png";
import Hero from './components/Hero'
import Promises from './components/Promis.tsx'

function App() {

    return (
        <div className="App">
            <section className="header-sec">
                <h1 className="header-logo">Logo!</h1>
            </section>
            <section className="hero-sec">
                <Hero title={
                    <>
                        Willkommen bei der <br/>
                        <span style={{color: "blue"}}>Dieter Wenzelmann GmbH</span> <br/>
                        in 57648 Unnau/Westerwald
                    </>
                }
                      description="asdfkasdfsd
faksdjflajsdlfjlasdjfks
asdkfjlasjdfkasjdflkasjldfj
ajskdfjklasjdfkajsfdljsldfjlasasjdfkasdhfkhsakdfkjsf
ahskdfahsdfjhkasdhfksfaskdfhsdhfkhaksdfkhasdhfsak"
                      image={rlogo}/>
            </section>
            <Promises></Promises>
        </div>
    );
}

export default App
