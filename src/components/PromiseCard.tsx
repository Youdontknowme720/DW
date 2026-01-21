import '../styles/PromiseCard.css'
import * as React from "react";
type PromiseCard = {
    icon: React.ReactNode;
    heading: string;
    text: string;
}

function PromiseCard({icon, heading, text }: PromiseCard) {
    return (
        <div className="p-card">
            <div className="card-icon">{icon}</div>
            <h2 className="card-heading" style={{gridArea: "box-heading"}}>{heading}</h2>
            <p className="card-text" style={{gridArea: "box-text"}}>{text}</p>
        </div>
    )
}

export default PromiseCard;