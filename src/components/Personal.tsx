import "../styles/Personal.css"
import reactLogo from '../assets/react.svg';

export default function Personal(){
    return (
       <div className="personal-container">
           <div className="personal-header" style={{gridArea:"box-head"}}>
               <h1 className="personal-title">Das sind wir</h1>
           </div>
           <div className="personal-body" style={{gridArea:"box-body"}}>
               <p>Hallo das sind wir ich habe kein Ahnung was ich hier reinschreiben soll aber der Text
                   sollte schon etwas länger sein um einen guten Eindruck bei den Lesern zu erwecken
               </p>
           </div>
           <div className="personal-img" style={{gridArea:"box-img"}}>
               <img src={reactLogo} alt="Bild"/>
           </div>
       </div>
    )
}