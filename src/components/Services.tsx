import ServiceCard from "./ServiceCard.tsx";
import '../styles/Services.css';
import reactLogo from '../assets/react.svg';

const serviceCards = [
    { img: reactLogo, description: "Individuelle Lösungen" },
    { img: reactLogo, description: "Qualität" },
    { img: reactLogo, description: "Termintreue Lieferungen" },
    { img: reactLogo, description: "Schneller Service" },
    { img: reactLogo, description: "Support rund um die Uhr" },
    { img: reactLogo, description: "Nachhaltigkeit" },
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