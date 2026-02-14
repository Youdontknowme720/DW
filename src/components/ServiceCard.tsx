import '../styles/ServiceCard.css';
import { Link } from "react-router-dom";

type ServiceCardType = {
  img: string;
  description: string;
  link?: string; // optional
};

export default function ServiceCard({ img, description, link }: ServiceCardType) {
  return (
    <div className="service-card">
      <img src={img} alt="Service" className="card-img" />
      <p>{description}</p>

      {link ? (
        <Link to={link} className="more-link">
          Mehr erfahren
        </Link>
      ) : (
        <span className="more-link disabled">Mehr erfahren</span>
      )}
    </div>
  );
}
