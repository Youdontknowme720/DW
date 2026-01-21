import '../styles/Hero.css'
import * as React from "react";

type HeroProps = {
    title: React.ReactNode;
    description: string;
    image: string;
}

function Hero({title, description, image}: HeroProps) {
    return (
        <div className="hero-container">
            <h1 className="hero-title" style={{gridArea: "box-title"}}>{title}</h1>
            <p className="hero-desc" style={{gridArea: "box-desc"}}>{description}</p>
            <img src={image} style={{gridArea: "box-img"}} alt="Hallo" className="hero-image"/>
        </div>
    )
}

export default Hero;