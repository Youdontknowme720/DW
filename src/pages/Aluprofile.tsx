import Logo from "../assets/w_logo.svg";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import signBlue from '../assets/sign.png';
import signTwo from '../assets/sign_two.png';
import round from '../assets/round.png';

export default function Aluprofile() {  
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Aluprofile bearbeiten",
      description: "Gerne besorgen wir für Sie die von Ihnen gewünschten Aluminiumprofile. Wir bearbeiten aber auch Ihre Profilstangen, ob es sich nun ums Fräsen, Gravieren, Bedrucken oder Lasern handelt.",
      image: signTwo,
    },
    {
      title: "Intelligente Spanntechnik",
      description: "Wir setzen intelligente Spanntechniken ein. Mit unserem Vakuum- und Schnellspanner können wir fast jedes Profil schnell und sicher spannen.",
      image: round,
    },
    {
      title: "Kostengünstige Fertigung",
      description: "So verringern wir nicht nur Maschinenrüstzeiten, sondern senken auch die Kosten und können Ihnen deshalb attraktive Preise anbieten.",
      image: signBlue,
    },
    {
      title: "Kantteile",
      description: "Bleche aus Aluminium, Stahl oder Edelstahl kanten wir mit einer unserer zahlreichen Kantmatrizen sehr genau ab. Kantteile unterschiedlichster Stärken können wir exakt für Sie fertigen.",
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
          <h1>Aluprofilbearbeitung / Kantteile</h1>
          <p>
            Gerne besorgen wir für Sie die von Ihnen gewünschten Aluminiumprofile. Wir bearbeiten aber auch Ihre Profilstangen, 
            ob es sich nun ums Fräsen, Gravieren, Bedrucken oder Lasern handelt.
            Wir setzen intelligente Spanntechniken ein. Mit unserem Vakuum- und Schnellspanner können wir fast jedes Profil schnell und sicher spannen.
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
