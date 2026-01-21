import '../styles/PromiseCardStyle.css'

type CardProps = {
    title: string,
    description: string,
}

function PromiseCard({ title, description}: CardProps) {
    return (
        <div className="p-card">
            <div className="p-card-icon">$</div>
            <h3 className="p-card-title">{title}</h3>
            <p className="p-card-description">{description}</p>
        </div>
    )
}

export default PromiseCard;