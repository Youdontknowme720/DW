import ServiceCard from "./ServiceCard.tsx";
import '../styles/Services.css';
import signBlue from '../assets/sign.png';
import round from '../assets/round.png';
import signTwo from "../assets/sign_two.png";
import Para from "../assets/Impressum_neu.svg";

const serviceCards = [
    {
        img: signTwo,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder fuer fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien.",
        link: "/schilder"
    },
    {
        img: round, 
        description: "Unsere Industriepanels sorgen dafür, dass Sie Ihre Maschinen optimal bedienen können.",
        link: "/industriepanels"
    },
    {
        img: round,
        description: "Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing.",
        link: "/fraesteile"
    },
    {
        img: signBlue,
        description: "Gerne besorgen wir für Sie die von Ihnen gewünschten Aluminiumprofile und Kantteile.",
        link: "/aluprofile"
    },
    {
        img: signBlue,
        description: "Mit unserer Schweiß- und Fügetechnik bieten wir Komplettlösungen für Frontplatten und Gehäuse.",
        link: "/schweissen"
    },
    {
        img: round,
        description: "Die verschieden Fertigungsverfahren richten sich nach den Materialien und der benötigen Menge.",
        link: "/fertigungsverfahren"
    },
    {
        img: round,
        description: "Datenschutz"
    },
    {
        img: round,
        description: ""
    },
    {
        img: Para,
        description: "",
        link: "/impressum"
    },
];

export default function Services() {
    return (
        <div className="service-container">
            <h2 className="service-title">Unsere Leistungen</h2>
            <div className="service-grid">
                {serviceCards.map((item, index) => (
                    <ServiceCard
                        key={index}
                        img={item.img}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}