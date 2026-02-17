import Logo from "../assets/w_logo.svg";
import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';

export default function Impressum() {
  return (
    <PageLayout>

      <div className="logo-wrapper">
        <img src={Logo} alt="Dieter Wenzelmann GmbH Logo" />
      </div>

      <div className="service-wrapper">
        <div className="container-impressum">

          <h1 style={{ color: "blue" }}>Impressum</h1>

          <p><strong>Dieter Wenzelmann GmbH</strong></p>
          <p>
            Neuer Weg 18a<br />
            57648 Unnau<br /><br />
            Tel: 02661 / 6539<br />
            Fax: 02661 / 3648<br />
            E-mail: info@gravieren.net<br />
            Web: www.gravieren.net
          </p>

          <p><strong>Geschäftsform</strong></p>
          <p>GmbH</p>

          <p><strong>Geschäftsführer und für den Inhalt dieser Seite verantwortlich:</strong></p>
          <p>Oliver Wenzelmann, Juri Wenzelmann</p>

          <p><strong>Handelsregister</strong></p>
          <p>Amtsgericht Westerburg</p>

          <p><strong>Registernummer</strong></p>
          <p>HRB 6360</p>

          <p><strong>Umsatzsteuer-ID:</strong></p>
          <p>DE 205 2356 35</p>

          <h1 style={{ color: "blue" }}>Rechtliche Hinweise</h1>

        </div>
      </div>

    </PageLayout>
  );
}
