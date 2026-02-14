import Logo from "../assets/logo.png";
import '../styles/Impressum.css';

export default function Impressum() {
  return (
    <div className="impressum-container">
      <div className="impressum-logo-wrapper">
        <img src={Logo} alt="Dieter Wenzelmann GmbH Logo" />
      </div>
      <div className="container-impressum">
        <h1 style={{color: "blue"}}>Impressum</h1>
        <p>
            <p style={{fontWeight: "bold"}}>Dieter Wenzelmann GmbH</p>
            Neuer Weg 18a<br/>
            57648 Unnau<br /><br />
            Tel: 02661 / 6539<br/>
            Fax: 02661 / 3648
        </p>
        <p>E-mail: info@gravieren.net</p>
        <p>Web: www.gravieren.net</p>
        <p></p>
        <p style={{fontWeight: "bold"}}>Geschäftsform</p>
        <p>GmbH</p>
        <p></p>
        <p style={{fontWeight: "bold"}}>Geschäftsführer und für den Inhalt dieser Seite verantwortlich:</p>
        <p>Oliver Wenzelmann, Juri Wenzelmann</p>
        <p></p>
        <p style={{fontWeight: "bold"}}>Handelsregister</p>
        <p>Amtsgericht Westerburg</p>
        <p></p>
        <p style={{fontWeight: "bold"}}>Registernummer</p>
        <p>HRB 6360</p>
        <p></p>
        <p style={{fontWeight: "bold"}}>Umsatzsteuer-ID:</p>
        <p>DE 205 2356 35</p>
        <h1 style={{color: "blue"}}>Rechtliche Hinweise</h1>
        </div>  
    </div>
  );
}
