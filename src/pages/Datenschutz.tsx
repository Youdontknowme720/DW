import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';

export default function Datenschutz() {  
  return (
    <PageLayout>
      <div className="service-wrapper">
        <div className="container-impressum">
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
            erläutert, welche Daten wir erheben und wofür wir sie nutzen.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
            nicht möglich.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <div className="contact-info">
            <p><strong>Dieter Wenzelmann GmbH</strong></p>
            <p>Neuer Weg 18a</p>
            <p>57648 Unnau</p>
            <p>Tel: 02661-6539</p>
            <p>Fax: 02661-3648</p>
            <p>E-Mail: <a href="mailto:info@gravieren.net">info@gravieren.net</a></p>
          </div>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Cookies</h3>
          <p>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
            Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
            und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die 
            Ihr Browser speichert.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h2>4. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular Nachrichten zukommen lassen, werden Ihre Angaben aus dem 
            Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage 
            und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre 
            Einwilligung weiter.
          </p>

          <h2>5. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
            eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per 
            E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom 
            Widerruf unberührt.
          </p>

          <h2>6. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der 
            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen 
            ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
          </p>

        </div>
      </div>
    </PageLayout>
  );
}
