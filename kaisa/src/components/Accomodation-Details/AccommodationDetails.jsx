import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import accommodationsData from '@/assets/json/datas.json';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carroussel from '../Carroussel/Carroussel';
import AccordeonAccomodations from '../Accordeon-Accomodations/Accordeon-Accomodations';
import './Accomodation-Details.sass';

function AccommodationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const accommodation = accommodationsData.find((a) => a.id === id);

  useEffect(() => {
    if (!accommodation) {
      navigate('/404');
    }
  }, [accommodation, navigate]);

  if (!accommodation) {
    return null;
  }

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={fullStar}
          style={{ color: i < rating ? "#ff6060" : "#E3E3E3" }}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <div className='main'>
        <Carroussel />
        <div className="accommodation-details">
          <div className='accommodation-details__header'>
            <h1 className='accommodation-details__title'>{accommodation.title}</h1>
            <h2 className='accommodation-details__location'>{accommodation.location}</h2>
            <div className='accommodation-details__profile'>
              <h3 className='accommodation-details__name'>{accommodation.host.name}</h3>
              <img
                className='accommodation-details__picture'
                src={accommodation.host.picture}
                alt={accommodation.host.name}
              />
            </div>
          </div>
          <div className='accommodation-details__infos'>
            <div className="accommodation-details__tags">
              {accommodation.tags.map((tag, index) => (
                <span key={index} className="accommodation-details__tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className='accomodation-details__stars'>
              {renderStars(Number(accommodation.rating))}
            </div>
          </div>
          <div className="accommodation-details__accordeons">
            <AccordeonAccomodations title="Description">
              <p>{accommodation.description}</p>
            </AccordeonAccomodations>
            <AccordeonAccomodations title="Équipements">
              <ul>
                {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </AccordeonAccomodations>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default AccommodationDetails;
