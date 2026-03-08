import PageLayout from "../components/PageLayout";
import '../styles/Impressum.css';
import '../styles/Schilder.css';

import industrieOne from '../assets/schilder/industrie_one.jpeg';
import industrieTwo from '../assets/schilder/industrie_two.jpeg';
import industrieThree from '../assets/schilder/industrie_three.jpeg';
import industrieFour from '../assets/schilder/industrie_four.jpeg';
import industrieFive from '../assets/schilder/industrie_five.jpeg';
import industrieSix from '../assets/schilder/industrie_6.jpg';
import designschild from '../assets/schilder/designschild.jpg';
import designschild2 from '../assets/schilder/designschild_2.jpg';
import industrie7 from '../assets/schilder/industrie_7.jpg';
import industrie8 from '../assets/schilder/industrie_8.jpg';
import industrie9 from '../assets/schilder/industrie_9.jpg';
import industrie10 from '../assets/schilder/industrie_10.jpg';
import industrie11 from '../assets/schilder/industrie_11.jpg';
import industrie12 from '../assets/schilder/industrie_12.jpg';
import industrie13 from '../assets/schilder/industrie_13.jpg';
import industrie14 from '../assets/schilder/industrie_14.jpg';
import industrie15 from '../assets/schilder/industrie_15.jpg';

const collageImages = [
  designschild, designschild2, industrie7, industrie8,
  industrie9, industrie10, industrie11, industrie12,
  industrie13, industrie14, industrie15
];

export default function Schilder() {  
  
  const sections = [
    {
      title: "Designschilder",
      description: "Sie benötigen ein ansprechendes Schild für ihre Anwaltskanzlei, Ihre Arztpraxis oder einfach nur Ihre ganz individuelle Hausnummer? Wir fertigen Ihr Wunschschild exklusiv für Sie an!",
      image: industrieOne,
      techDescription: "Designschilder werden mittels Lasergravur oder UV-Direktdruck hergestellt. Der Laser entfernt hauchdünne Materialschichten und erzeugt kontrastreiche, dauerhaft lesbare Gravuren. UV-Druck ermöglicht fotorealistische Darstellungen mit lebendigen Farben und hoher Wetterbeständigkeit.",
    },
    {
      title: "Industrieschilder",
      description: '"Just in time" fertigen wir fuer Sie Industrieschilder ganz nach Ihren Vorgaben. Einlegeschilder, Skalierungen, Kabel-Kennzeichnungen, Brandschutzschilder, Typenschilder, Maschinenschilder und vieles mehr...',
      image: industrieTwo,
      techDescription: "Industrieschilder werden aus Aluminium (0,5-3mm), Edelstahl oder Kunststoff gefertigt. Die Kennzeichnung erfolgt durch Einlegegravur, Ätzung oder Lasergravur. Alle Schilder erfüllen die Norm DIN EN ISO 7010 für Sicherheitskennzeichen und sind resistenz gegen Öle, Chemikalien und UV-Strahlung.",
    },
    {
      title: "Edelstahlschilder",
      description: "Edelstahlschilder aus 1.4301 sind sehr robust und halten extreme Belastungen aus. Wir fertigen diese fuer fast alle industriellen Bereiche wie Lebensmitteltechnik, chemische Industrie, Schiffs- und Fahrzeugbau.",
      image: industrieThree,
      techDescription: "Edelstahl 1.4301 (V2A) ist korrosionsbeständig und hitzefest bis 850°C. Die Schilder werden entweder durch Ätzung (Tiefgravur mit farbiger Auslegung) oder Lasergravur bearbeitet. Die Materialstärke variiert von 0,5mm bis 2mm je nach Einsatzzweck.",
    },
    {
      title: "Gravierte Schilder",
      description: "Wir bieten auch Fraesteile, Aluminiumbearbeitung, Schweisstechnik und vieles mehr. Kontaktieren Sie uns fuer individuelle Anfragen.",
      image: industrieFour,
      techDescription: "Die Graviertechnik ermöglicht dauerhafte, abriebfeste Beschriftungen. Bei der Tiefgravur wird das Material bis zu 0,3mm entfernt und mit farbigem Lack ausgelegt. Die Variante 'Vor-Kopf-Gravur' ermöglicht Gravuren auf Stirnflächen für umlaufende Beschriftungen an zylindrischen Teilen.",
    },
    {
      title: "Aluminiumschilder",
      description: "Leicht und robust: Aluminiumschilder eignen sich perfekt für den Innen- und Außenbereich.",
      image: industrieFive,
      techDescription: "Aluminiumschilder (1.4301/1.4571) wiegen ca. 2,7 kg/dm³ und sind somit besonders leicht. Die Oberfläche kann eloxiert, lackiert oder mit Schutzfolie versehen werden. Aluminium ist recyclebar und damit umweltfreundlich.",
    },
    {
      title: "Sicherheitskennzeichen",
      description: "Normgerechte Sicherheits- und Warnschilder nach DIN EN ISO 7010.",
      image: industrieSix,
      techDescription: "Alle Sicherheitskennzeichen werden gemäß den gesetzlichen Vorgaben gefertigt. Fluchtwege, Feuerlöscher, Verbots- und Gebotsschilder sind in standardisierten Farben (Rot, Gelb, Grün, Blau) und Symbolen ausgeführt.",
    },
  ];

  return (
    <PageLayout>
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
                <img src={img} alt={`Schilder ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
