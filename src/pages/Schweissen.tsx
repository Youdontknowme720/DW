import Logo from "../assets/w_logo.svg";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Schweissen() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Komplettlösungen",
      description: "Mit unserer Schweiß- und Fügetechnik bieten wir unseren Kunden eine Komplettlösung für die Herstellung von Frontplatten, Schildern und Gehäusen an.",
      image: signBlue,
    },
    {
      title: "WIG-Aluminium-Schweißen",
      description: "Seit 2009 arbeiten wir mit einem WIG-Schweißgerät, das nach dem Wolfram-Inertgas-Verfahren arbeitet. Dieses Verfahren setzen wir sowohl bei Aluminium als auch bei Edelstahl-Teilen ein.",
      image: signTwo,
    },
    {
      title: "Bolzenschweißtechnik",
      description: "Seit fast 30 Jahren schweißen wir Bolzen von M3 bis M6 auf Aluminium, Edelstahl, Messing und Stahl. Die rückseitig angeschweißten Bolzen sind auf der Vorderseite nicht zu erkennen.",
      image: round,
    },
    {
      title: "PEM-Einpresstechnik",
      description: "Mit der PEM-Presse werden die Gewindebolzen / Gewindemuttern mittels Matrize und Gegenmatrize unter dem Druck mehrerer Tonnen Gewichtskraft in vorher gebohrte Löcher eingepresst.",
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
          <h1>Schweißen / Fügetechnik</h1>
          <p>
            Mit unserer Schweiß- und Fügetechnik bieten wir unseren Kunden eine Komplettlösung für die Herstellung von Frontplatten, 
            Schildern und Gehäusen an. Sie müssen sich nicht damit zufrieden geben, mehrere Teile selbst zu verschweißen 
            und sie schlagen sich auch nicht mehr mit losen Schrauben und Muttern herum.
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
