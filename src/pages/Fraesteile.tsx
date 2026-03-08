import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Fraesteile() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "CNC-Bearbeitung",
      description: "Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing. Wir verfügen über mehrere CNC-Maschinen mit großen Vakuum-Aufspannflächen.",
      image: signTwo,
    },
    {
      title: "Vakuumspannen",
      description: "So können wir bis zu 138 Frästeile der Größe 150 x 80 Millimeter aus nur einer zwei mal ein Meter großen Platte herstellen. Einmal durch Vakuumspannen eingerichtet, führt die Maschine weitestgehend selbständig die Bearbeitung durch.",
      image: round,
    },
    {
      title: "Automatischer Werkzeugwechsel",
      description: "Wir setzen in unseren Maschinen vollautomatische Werkzeugwechsler ein, dadurch entfällt der zeitaufwendige Werkzeugwechsel per Hand.",
      image: signBlue,
    },
    {
      title: "Vor-Kopf-Bearbeitung",
      description: "Zusätzlich können wir mit dem Vertikal-Spannsystem eine Vor-Kopf-Bearbeitung bei vielen Werkstücken vornehmen. Dabei bearbeiten wir die Stirnseiten von Werkstücken bis zu einer Länge von max. 580 mm.",
      image: signBlue,
    },
    {
      title: "Dateneinlesung",
      description: "Selbstverständlich lesen wir Ihre angelieferten Daten ein und bearbeiten sie weiter. Neben DXF, DWG, PLT akzeptieren wir nach Absprache auch noch weitere Formate.",
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
          <h1>Frästeile</h1>
          <p>
            Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing. 
            Wir verfügen wir über mehrere CNC-Maschinen mit großen Vakuum-Aufspannflächen, ohne die eine kostengünstige Fertigung am Nutzen gar nicht möglich wäre.
            So können wir z.B. bis zu 138 Frästeile der Größe 150 x 80 Millimeter aus nur einer zwei mal ein Meter großen Platte herstellen.
          </p>
        </div>

        <div className="schilder-grid">
          {sections.map((section, index) => (
            <div key={index} className="schilder-card">
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
