import ServiceCard from "./ServiceCard.tsx";
import '../styles/Services.css';
import signBlue from '../assets/sign.png';
import round from '../assets/round.png';

const serviceCards = [
    {
        img: signBlue,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien."
    },
    {img: round, description: "Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing."},
    {
        img: round,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien."
    },
    {
        img: signBlue,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien."
    },
    {
        img: signBlue,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien."
    },
    {
        img: round,
        description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien."
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
                    />
                ))}
            </div>
        </div>
    );
}