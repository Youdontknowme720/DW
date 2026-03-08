import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import fraesteilOne from '../assets/fraesteile/fraesteil_one.jpeg';
import fraesteilTwo from '../assets/fraesteile/fraesteil_two.jpeg';
import fraesteilThree from '../assets/fraesteile/fraesteil_three.jpeg';
import fraesteilFour from '../assets/fraesteile/fraesteil_four.jpeg';
import fraesteilFive from '../assets/fraesteile/fraesteil_5.jpg';
import fraesteilSix from '../assets/fraesteile/fraesteil_6.jpg';
import fraesteil7 from '../assets/fraesteile/fraesteil_7.jpg';
import fraesteil8 from '../assets/fraesteile/fraesteil_8.jpg';
import fraesteil9 from '../assets/fraesteile/fraesteil_9.jpg';
import fraesteil10 from '../assets/fraesteile/fraesteil_10.jpg';
import fraesteil11 from '../assets/fraesteile/fraesteil_11.jpg';
import fraesteil12 from '../assets/fraesteile/fraesteil_12.jpg';
import fraesteil13 from '../assets/fraesteile/fraesteil_13.jpg';
import fraesteil14 from '../assets/fraesteile/fraesteil_14.jpg';
import fraesteil15 from '../assets/fraesteile/fraesteil_15.jpg';

const collageImages = [
  fraesteil7, fraesteil8, fraesteil9, fraesteil10,
  fraesteil11, fraesteil12, fraesteil13, fraesteil14, fraesteil15
];

export default function Fraesteile() {  
  
  const sections = [
    {
      title: "CNC-Bearbeitung",
      description: "Im 2 ½ D-Bereich fräsen wir Teile aus Aluminium, Kunststoff und Messing. Wir verfügen über mehrere CNC-Maschinen mit großen Vakuum-Aufspannflächen.",
      image: fraesteilOne,
      techDescription: "Unsere 5-Achs-CNC-Fräsmaschinen ermöglichen komplexe Bearbeitungen mit einer Positioniergenauigkeit von ±0,01mm. Die Bearbeitung erfolgt im 2½D-Modus, wobei Bohrungen, Taschen und Konturen in einem Arbeitsgang hergestellt werden können.",
    },
    {
      title: "Vakuumspannen",
      description: "So können wir bis zu 138 Frästeile der Größe 150 x 80 Millimeter aus nur einer zwei mal ein Meter großen Platte herstellen. Einmal durch Vakuumspannen eingerichtet, führt die Maschine weitestgehend selbständig die Bearbeitung durch.",
      image: fraesteilTwo,
      techDescription: "Das Vakuum-Spannsystem erzeugt eine Haltekraft von bis zu 1,5 Tonnen pro Quadratmeter. Die Aufspannfläche von 2000x1000mm ermöglicht die gleichzeitige Bearbeitung von bis zu 138 Werkstücken. Das System ist materialschonend und hinterlässt keine Kratzer auf der Werkstückoberfläche.",
    },
    {
      title: "Automatischer Werkzeugwechsel",
      description: "Wir setzen in unseren Maschinen vollautomatische Werkzeugwechsler ein, dadurch entfällt der zeitaufwendige Werkzeugwechsel per Hand.",
      image: fraesteilThree,
      techDescription: "Der automatische Werkzeugwechsler (ATC) verfügt über bis zu 24 Werkzeugplätze. Der Wechselvorgang dauert weniger als 3 Sekunden. Die Werkzeuge werden automatisch vermessen und kompensieren somit Werkzeugverschleiß und Temperatureinflüsse.",
    },
    {
      title: "Vor-Kopf-Bearbeitung",
      description: "Zusätzlich können wir mit dem Vertikal-Spannsystem eine Vor-Kopf-Bearbeitung bei vielen Werkstücken vornehmen. Dabei bearbeiten wir die Stirnseiten von Werkstücken bis zu einer Länge von max. 580 mm.",
      image: fraesteilFour,
      techDescription: "Das Vertikal-Spannsystem ermöglicht die Bearbeitung von Stirnseiten perpendicular zur Hauptoberfläche. Die Maximale Werkstücklänge beträgt 580mm bei einer Wiederholgenauigkeit von ±0,02mm. Diese Technik ist ideal für Präzisionsteile in der Medizintechnik und im Apparatebau.",
    },
    {
      title: "Präzisionsfertigung",
      description: "Wir fertigen Frästeile mit engsten Toleranzen nach Ihren Vorgaben.",
      image: fraesteilFive,
      techDescription: "Unsere Maschinen erreichen eine Wiederholgenauigkeit von ±0,005mm. Die Bearbeitung von Aluminium, Kunststoffen wie POM, PVC, PE und Messing erfolgt mit Schnittgeschwindigkeiten bis zu 30.000 U/min.",
    },
    {
      title: "Klein- und Serienfertigung",
      description: "Ob Einzelstück oder Serie - wir fertigen wirtschaftlich und schnell.",
      image: fraesteilSix,
      techDescription: "Durch optimierte Bearbeitungsstrategien und effizientes Rüsten können wir sowohl Kleinserien als auch größere Stückzahlen kostengünstig fertigen. Werkzeugkosten werden durch strategische Schnittplanung minimiert.",
    },
  ];

  return (
    <PageLayout>
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
                {section.techDescription && (
                  <p className="tech-description">{section.techDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="collage-section">
          <h2 className="collage-title">Weitere Bilder</h2>
          <div className="collage-grid">
            {collageImages.map((img, index) => (
              <div key={index} className="collage-item">
                <img src={img} alt={`Frästeil ${index + 7}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
