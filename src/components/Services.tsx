import ServiceCard from "./ServiceCard.tsx";
import '../styles/Services.css';
import reactLogo from '../assets/react.svg';

const serviceCards = [
    { img: reactLogo, description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien." },
    { img: reactLogo, description: "Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing." },
    { img: reactLogo, description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien." },
    { img: reactLogo, description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien." },
    { img: reactLogo, description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien." },
    { img: reactLogo, description: "Vom Designschild bis hin zum Industrieschild bieten wir Schilder für fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien." },
];

export default function Services() {
    return (
        <section className="service-container">
            <h2 className="service-title">Unsere Leistungen</h2>
            <div className="service-cards">
                {serviceCards.map((item, index) => (
                    <ServiceCard
                        key={index}
                        img={item.img}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}