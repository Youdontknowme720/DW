import iso from "../assets/iso.png"
import '../styles/Footer.css'
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <h2>Dieter Wenzelmann GmbH</h2>
                <p>Neuer Weg 18a</p>
                <p style={{paddingBottom: "2rem"}}>57648 Unnau / Westerwald</p>
                <p>Tel: 02661/6539</p>
                <p>Email:info@gravieren.net</p>
            </div>
            <div className="footer-img">
                <img src={iso} alt="IsoNorm" />
            </div>
        </div>
    )
}