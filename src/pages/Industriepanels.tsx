import Logo from "../assets/w_logo.svg";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Industriepanels() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Bedienpanels",
      description: "Unsere Industriepanels sorgen dafür, dass Sie Ihre Maschinen optimal bedienen können. Wir bieten Bedienpanels für Schaltschränke, Bedienpulte, Maschinen und Anlagen aller Industriezweige.",
      image: signBlue,
    },
    {
      title: "Monitorblenden",
      description: "Hierzu gehören auch Monitorblenden und Flussbilder mit den entsprechenden Durchbrüchen für Befehls- und Meldegeräte.",
      image: signTwo,
    },
    {
      title: "Frontplatten",
      description: "Frontplatten sind die Schnittstelle zwischen Mensch und Maschine. Unsere Frontpanels erhalten Sie wahlweise mit eloxierter Oberfläche, auch gerne farbig, nach RAL lackiert oder pulverbeschichtet.",
      image: round,
    },
    {
      title: "Befestigungselemente",
      description: "Unsere Industriepanels liefern wir mit Gewindebolzen / Gewindemuttern, welche wir aufschweißen oder mit unserem PEM-System einpressen können.",
      image: signBlue,
    },
  ];

  return (
    <PageLayout>
      <div className="logo-wrapper">
        <img src={Logo} alt="Dieter Wenzelmann GmbH Logo" />
      </div>

      <button 
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Zurueck zur vorherigen Seite"
      >
        ← Zurück
      </button>

      <div className="service-wrapper">
        <div className="schilder-hero">
          <h1>Industriepanels / Frontplatten</h1>
          <p>
            Unsere Industriepanels sorgen dafür, dass Sie Ihre Maschinen optimal bedienen können. 
            Wir bieten Bedienpanels für Schaltschränke, Bedienpulte, Maschinen und Anlagen aller Industriezweige und vieles mehr.
            Hierzu gehören auch Monitorblenden und Flussbilder mit den entsprechenden Durchbrüchen für Befehls- und Meldegeräte.
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
