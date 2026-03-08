import Logo from "../assets/w_logo.svg";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Fertigungsverfahren() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Gravierte Schilder",
      description: "Gravierte Schilder stellen wir mittels einem spanenden Verfahren her. Dabei taucht ein Vollhartmetall-Werkzeug in das Material ein und fräst Ihren Text oder Ihr Logo vertieft ins Schild ein.",
      image: signTwo,
    },
    {
      title: "Untereloxaldruck & Digitaldruck",
      description: "Beim Untereloxaldruck bringen wir in die offenen Poren des Aluminiums Farbe ein. Der Druck ist abriebfest und resistent gegen eine Vielzahl von Lösungsmitteln.",
      image: round,
    },
    {
      title: "Siebdruck / Aufdrucke",
      description: "Den Siebdruck bringen wir mittels eines Siebgewebes auf das Schild. Wir verwenden 2K-Lacke, mit denen wir auf fast jedes Material drucken können.",
      image: signBlue,
    },
    {
      title: "Laserbeschriftung",
      description: "Bei der Lasergravur trägt ein gebündelter Laserstrahl die Materialoberfläche leicht ab und verändert diese farblich. Mit dem Laser bearbeiten wir vor allem Edelstahl, eloxiertes Aluminium und diverse Kunststoffe.",
      image: signBlue,
    },
    {
      title: "Geätzte Schilder",
      description: "Mit einer Flüssigkeit ätzen wir das gewünschte Layout vertieft oder erhaben in Edelstahl, Aluminium oder Messing. Das Ätzverfahren eignet sich für die Produktion größerer Stückzahlen.",
      image: signTwo,
    },
    {
      title: "Folienbeschriftung",
      description: "Bei der Folienbeschriftung trennen wir mit dem Schneideplotter den gewünschten Schriftzug oder Ihr Logo aus einer farblichen Folie heraus.",
      image: round,
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
          <h1>Fertigungsverfahren</h1>
          <p>
            Die verschieden Fertigungsverfahren richten sich im Wesentlichen nach den Materialien und der benötigen Menge des Produktes. 
            Da wir auf eine langjährige Erfahrung zurückblicken können, finden wir für Sie immer das richtige Produktionsverfahren zu dem für Sie günstigsten Preis.
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
