import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';

export default function Kontakt() {  
  return (
    <PageLayout>
      <div className="service-wrapper">
        <div className="container-impressum">
          <h1>Kontaktformular</h1>

          <p>
            Gerne können Sie uns auch über das Kontaktformular eine Nachricht zukommen lassen. 
            Wir werden uns dann umgehend mit Ihnen in Verbindung setzen.
          </p>

          <div className="contact-form-info">
            <h2>Allgemeine Kontaktdaten</h2>
            <div className="contact-info">
              <p><strong>Tel.:</strong> <a href="tel:026616539">02661-6539</a></p>
              <p><strong>Fax:</strong> 02661-3648</p>
              <p><strong>E-Mail:</strong> <a href="mailto:info@gravieren.net">info@gravieren.net</a></p>
            </div>

            <h2>Post- & Lieferanschrift</h2>
            <div className="contact-info">
              <p><strong>Dieter Wenzelmann GmbH</strong></p>
              <p>Neuer Weg 18 a</p>
              <p>57648 Unnau</p>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
