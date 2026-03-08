import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import kantteilOne from '../assets/alu_kantteile/kantteil_one.jpeg';
import kantteilTwo from '../assets/alu_kantteile/kantteil_two.jpeg';
import kantteilThree from '../assets/alu_kantteile/kantteil_three.jpeg';

export default function Aluprofile() {  
  
  const sections = [
    {
      title: "Aluprofile bearbeiten",
      description: "Gerne besorgen wir für Sie die von Ihnen gewünschten Aluminiumprofile. Wir bearbeiten aber auch Ihre Profilstangen, ob es sich nun ums Fräsen, Gravieren, Bedrucken oder Lasern handelt.",
      image: kantteilOne,
      techDescription: "Unsere CNC-gesteuerte Profilbearbeitung ermöglicht präzise Zuschnitte und Bearbeitungen von Aluminiumprofilen bis zu einer Länge von 6000mm. Mit modernen Spannsystemen und automatisierten Prozessen gewährleisten wir Wiederholgenauigkeit und Qualität.",
    },
    {
      title: "Intelligente Spanntechnik",
      description: "Wir setzen intelligente Spanntechniken ein. Mit unserem Vakuum- und Schnellspanner können wir fast jedes Profil schnell und sicher spannen.",
      image: kantteilTwo,
      techDescription: "Das Vakuum-Spannsystem erzeugt einen Unterdruck, der das Profil gleichmäßig auf der Bearbeitungsfläche fixiert. Dies ermöglicht eine verzugsfreie Bearbeitung und schont die Profiloberfläche. Der Schnellspanner ermöglicht Werkzeugwechsel in unter 30 Sekunden.",
    },
    {
      title: "Kantteile",
      description: "Bleche aus Aluminium, Stahl oder Edelstahl kanten wir mit einer unserer zahlreichen Kantmatrizen sehr genau ab. Kantteile unterschiedlichster Stärken können wir exakt für Sie fertigen.",
      image: kantteilThree,
      techDescription: "Das Abkanten erfolgt durch Hydraulik-Kantpressen mit bis zu 170 Tonnen Presskraft. Die Biegewinkel werden digital gesteuert und erreichen eine Genauigkeit von ±0,5°. Verschiedene Kantmatrizen ermöglichen Biegeradien von 0,5mm bis 8mm.",
    },
  ];

  return (
    <PageLayout>
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
                {section.techDescription && (
                  <p className="tech-description">{section.techDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
