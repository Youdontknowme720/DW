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
            Fax: 02661 / 3648<br /><br />
            E-mail: info@gravieren.net<br />
            Web: www.gravieren.net<br /><br />
          </p>

          <p><strong>Geschäftsform</strong></p>
          <p>GmbH<br /><br />
          </p>

          <p><strong>Geschäftsführer und für den Inhalt dieser Seite verantwortlich:</strong></p>
          <p>Oliver Wenzelmann, Juri Wenzelmann<br /><br />
          </p>

          <p><strong>Handelsregister</strong></p>
          <p>Amtsgericht Westerburg<br /><br />
          </p>

          <p><strong>Registernummer</strong></p>
          <p>HRB 6360<br /><br />
          </p>

          <p><strong>Umsatzsteuer-ID:</strong></p>
          <p>DE 205 2356 35<br /><br />
          </p>
          <div className="law-wrapper">
            <h1 style={{ color: "blue" }}>Rechtliche Hinweise</h1>
            <p><strong>1. Haftungsbeschränkung</strong></p>
            <p>Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. 
              Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und 
              Aktualität der bereitgestellten Inhalte. 
              Die Nutzung der Inhalte der Website erfolgt auf Eigene Gefahr des Nutzers. 
              Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors 
              und nicht immer die Meinung des Anbieters wieder. 
              Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis 
              zwischen dem Nutzer und dem Anbieter zustande.
            </p>

            <p><strong>2. Externe Links</strong></p>
            <p>Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links”).
               Diese Websites unterliegen der Haftung der jeweiligen Betreiber.
                Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte 
                daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. 
                Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. 
                Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung
                und auf die Inhalte der verknüpften Seiten. 
                Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter 
                dem Verweis oder Link liegenden Inhalte zu eigen macht.
                Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete 
                Hinweise auf Rechtsverstöße nicht zumutbar. 
                Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links 
                unverzüglich gelöscht.
              </p>

            <p><strong>3. Urheber- und Leistungsschutzrecht</strong></p>
            <p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht.
              Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf
              der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers.
              Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten
              in Datenbanken oder anderen elektronischen Medien und Systemen.
              Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet.
              Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten
              ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads
              für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
              Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
              </p>

            <p><strong>4. Datenschutz</strong></p>
            <p>Durch den Besuch der Website des Anbieters können Informationen über den Zugriff
              (Datum, Uhrzeit, betrachtete Seite) gespeichert werden.
              Diese Daten gehören nicht zu den personenbezogenen Daten, sondern sind anonymisiert.
              Sie werden ausschließlich zu statistischen Zwecken ausgewertet.
              Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.<br /><br />
              Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet
              (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos
              vor dem Zugriff durch Dritte geschützt werden kann.<br /><br />
              Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung
              ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche
              Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung.
              Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit
              jeder kommerziellen Verwendung und Weitergabe ihrer Daten.
              </p>

            <p><strong>5. Besondete Nutzungsbedingungen</strong></p>
            <p>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den 
              vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle 
              ausdrücklich darauf hingewiesen. 
              In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
            </p>
          </div>

        </div>
      </div>

    </PageLayout>
  );
}
