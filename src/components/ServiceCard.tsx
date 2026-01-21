import '../styles/ServiceCard.css';

type ServiceCardType = {
    img: string;
    description: string;
}

export default function ServiceCard({img, description}: ServiceCardType) {
    return (
        <div className="service-card">
            <img src={img} alt="Service" className="card-img" />
            <p>{description}</p>
            <p>Mehr erfahren</p>
        </div>
    )
}