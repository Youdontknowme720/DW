import '../styles/Hero.css'

type HeroProps = {
    title: string;
    description: string;
    image: string;
}

function Hero({title, description, image}: HeroProps) {
    return (
        <div className="hero-container">
            <h2 className="hero-title" style={{gridArea: "box-title"}}>{title}</h2>
            <p className="hero-desc" style={{gridArea: "box-desc"}}>{description}</p>
            <img src={image} style={{gridArea: "box-img"}} alt="Hallo" className="hero-image"/>
        </div>
    )
}

export default Hero;