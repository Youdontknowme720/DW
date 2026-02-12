import './App.css'
import './index.css'
import rlogo from "./assets/Brum.png";
import Hero from './components/Hero'
import Promises from './components/Promis.tsx'
import Services from "./components/Services.tsx";
import Personal from "./components/Personal.tsx";
import Footer from "./components/Footer.tsx";
import Logo from "./assets/logo.png"

function App() {

    return (
        <div className="App">
            <div className="logo-wrapper">
                <img src={Logo} alt="Dieter Wenzelmann GmbH Logo"/>
            </div>
            <Hero title={
                <>
                    Willkommen bei der <br/>
                    <span style={{color: "blue"}}>Dieter Wenzelmann GmbH</span> <br/>
                    in 57648 Unnau/Westerwald
                </>
            } description="Wir präsentieren Ihnen auf den nachfolgenden Seiten unser breites Spektrum an Schildern und Aluminium-Frästeilen. Von einfachen Industrieschildern aus Kunststoff, Aluminium oder Schildern aus Edelstahl in gravierter oder geätzter Ausführung, über den Digitaldruck und Eloxaldruck bis hin zur Laserbeschriftung bieten wir alles genau nach Kundenwunsch an. Dies gilt natürlich auch für Frontplatten und Bedienpanels, die wir nach Ihrer Zeichnung oder Datei individuell anfertigen.
Wir fräsen für Sie Aluminium, und vieles mehr. Mit unseren modernen, großflächigen CNC-Graviermaschinen und CNC-Fräsmaschinen stellen wir für Sie 2 ½D Frästeile aus Aluminium, Kunststoffen und Messing in 1A-Qualität her. Dank unseres großen Maschinenparks produzieren wir kostengünstig und gewährleisten kurze Lieferzeiten. So können wir und auch Sie „just in time“ liefern.
Lassen Sie sich von unserer Internetpräsenz anregen oder nehmen Sie gleich persönlich mit uns Kontakt auf. Wir beraten Sie kompetent und erstellen Ihnen gerne ein individuelles Angebot.
Ihre Dieter Wenzelmann GmbH – Industrieschilder – Aluminiumbearbeitung" image={rlogo}/>
            <div className="promises-wrapper">
                <Promises/>
            </div>
            <div className="service-wrapper">
                <Services/>
            </div>
            <div className="service-wrapper">
                <Personal
                cards={[
                    { title: "Anna",
                      desc: `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                      `,
                      image: rlogo },
                    { title: "Tom", desc: "Backend Entwickler", image: rlogo },
                    { title: "Lisa", desc: "UX Designerin", image: rlogo}
                ]}
                />
            </div>
            <div className="service-wrapper">
                <Footer/>
            </div>
        </div>
    );
}

export default App
