import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';

export default function Ansprechpartner() {  
  return (
    <PageLayout>
      <div className="service-wrapper">
        <div className="container-impressum">
          <h1>Ihre Ansprechpartner</h1>

          <div className="ansprechpartner-section">
            <div className="ansprechpartner-card">
              <h2>Oliver Wenzelmann</h2>
              <p className="position">Geschäftsführer</p>
              <p>Tel: <a href="tel:026616539">02661 / 6539</a></p>
              <p>E-Mail: <a href="mailto:owenzelmann@gravieren.net">owenzelmann@gravieren.net</a></p>
            </div>

            <div className="ansprechpartner-card">
              <h2>Juri Wenzelmann</h2>
              <p className="position">Geschäftsführer / Projektmanagement</p>
              <p>Tel: <a href="tel:026616539">02661 / 6539</a></p>
              <p>E-Mail: <a href="mailto:jwenzelmann@gravieren.net">jwenzelmann@gravieren.net</a></p>
            </div>
          </div>

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
    </PageLayout>
  );
}
