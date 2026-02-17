import Hero from '../components/Hero';
import Promises from '../components/Promis';
import Services from '../components/Services';
import Personal from '../components/Personal';
import Footer from '../components/Footer';
import PageLayout from '../components/PageLayout';
import rlogo from "../assets/Brum.png";
import Logo from "../assets/w_logo.svg";

export default function Home() {
  return (
    <PageLayout>

      <div
        className="logo-wrapper"
        style={{
          marginBottom: "0.5rem",
          marginTop: "0.5rem"
        }}
      >
        <img src={Logo} alt="Dieter Wenzelmann GmbH Logo" />
      </div>

      <div className="service-wrapper">
        <Hero
          title={<>Willkommen bei der <br /><span style={{ color: "blue" }}>Dieter Wenzelmann GmbH</span><br />in 57648 Unnau/Westerwald</>}
          description="..."
          image={rlogo}
        />
      </div>

      <div className="promises-wrapper">
        <Promises />
      </div>

      <div className="service-wrapper">
        <Services />
      </div>

      <div className="service-wrapper">
        <Personal cards={[
          { title: "Anna", desc: "Lorem ipsum...", image: rlogo },
          { title: "Tom", desc: "Backend Entwickler", image: rlogo },
          { title: "Lisa", desc: "UX Designerin", image: rlogo }
        ]} />
      </div>

      <div className="service-wrapper">
        <Footer />
      </div>

    </PageLayout>
  );
}
