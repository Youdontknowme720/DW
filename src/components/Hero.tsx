import '../styles/Hero.css'
import * as React from "react";

type HeroProps = {
    title: React.ReactNode;
    description: string;
    image?: string;
    video?: string;
}

function Hero({title, description, image, video}: HeroProps) {
    return (
        <div className="hero-container">
            <div className="hero-txt">
                <h1 className="hero-title" >{title}</h1>
                <p className="hero-desc" >{description}</p>
            </div>
            {video ? (
                <video src={video} autoPlay muted loop playsInline className="hero-image"/>
            ) : (
                image && <img src={image} alt="Hallo" className="hero-image"/>
            )}
        </div>
    )
}

export default Hero;