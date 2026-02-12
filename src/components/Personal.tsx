import "../styles/Personal.css"
import personalPic from "../assets/iso.png"
import PersonalCard from "./PersonalCard" 

export default function Personal(){
    return (
       <div className="personal-container">
        <PersonalCard 
            title={"Geschäftsführung"} 
            desc={"Das hier ist die Geschäftsführung"} 
            image={personalPic}>
        </PersonalCard>
       </div>
    )
}