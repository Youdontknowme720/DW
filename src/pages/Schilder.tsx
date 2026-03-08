import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Schilder() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Designschilder",
      description: "Sie benötigen ein ansprechendes Schild für ihre Anwaltskanzlei, Ihre Arztpraxis oder einfach nur Ihre ganz individuelle Hausnummer? Wir fertigen Ihr Wunschschild exklusiv für Sie an!",
      image: signTwo,
    },
    {
      title: "Industrieschilder",
      description: '"Just in time" fertigen wir fuer Sie Industrieschilder ganz nach Ihren Vorgaben. Einlegeschilder, Skalierungen, Kabel-Kennzeichnungen, Brandschutzschilder, Typenschilder, Maschinenschilder und vieles mehr...',
      image: round,
    },
    {
      title: "Edelstahlschilder",
      description: "Edelstahlschilder aus 1.4301 sind sehr robust und halten extreme Belastungen aus. Wir fertigen diese fuer fast alle industriellen Bereiche wie Lebensmitteltechnik, chemische Industrie, Schiffs- und Fahrzeugbau.",
      image: signBlue,
    },
    {
      title: "Weitere Leistungen",
      description: "Wir bieten auch Fraesteile, Aluminiumbearbeitung, Schweisstechnik und vieles mehr. Kontaktieren Sie uns fuer individuelle Anfragen.",
      image: signTwo,
    },
  ];

  return (
    <PageLayout>
      <button 
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Zurueck zur vorherigen Seite"
      >
        ← Zurück
      </button>

      <div className="service-wrapper">
        <div className="schilder-hero">
          <h1>Schilder nach Maß</h1>
          <p>
            Vom Designschild bis hin zum Industrieschild bieten wir Schilder fuer fast alle Einsatzzwecke und aus den unterschiedlichsten Materialien. 
            Jedes unserer Schilder wird zu Ihrem Aushaengeschild. Es spricht den Betrachter an und vermittelt auf Anhieb die gewuenschten Informationen.
          </p>
        </div>

        <div className="schilder-grid">
          {sections.map((section, index) => (
            <div key={index} className={`schilder-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <img src={section.image} alt={section.title} className="schilder-card-img" />
              <div className="schilder-card-content">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
