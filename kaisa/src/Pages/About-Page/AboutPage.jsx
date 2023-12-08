import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import AccordeonAccomodations from '@/components/Accordeon-Accomodations/Accordeon-Accomodations';
import imgHeader from '@/assets/img/img-1.png';
import './aboutPage.sass';
function AboutPage() {
  const accordionsData = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Header />
      <div className='main'>
        <div className='about'>
          <img src={imgHeader} className='img-header' alt="Image" />
          <div className='about__accordeon'>
            {accordionsData.map((accordion, index) => (
              <AccordeonAccomodations key={index} title={accordion.title}>
                <p>{accordion.content}</p>
              </AccordeonAccomodations>
            ))}
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default AboutPage;
