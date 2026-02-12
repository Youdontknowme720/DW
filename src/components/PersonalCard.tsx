import "../styles/PersonalCard.css"
type PersonalCardProps = {
    title: string
    desc: string;
    image: string;
}


export default function PersonalCard({title, desc, image}: PersonalCardProps){
    return(
        <div className="pcard-container">
            <div className="pcard-txt" style={{gridArea: "box-content"}}>
                <h1>Das ist unsere {title}</h1>
                <p>{desc}</p>
            </div>
            <img src={image} style={{gridArea: "box-img"}} alt="PP"/>
        </div>
    )
}