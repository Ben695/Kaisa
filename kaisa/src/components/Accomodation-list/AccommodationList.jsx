import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './AccommodationList.sass';
import data from '@/assets/json/datas.json';

function AccommodationList() {
  const [accommodations] = useState(data);
  const navigate = useNavigate(); 

  const redirectToDetails = (id) => {
    navigate(`/accommodation/${id}`);
  };

  return (
    <div className="container">
      <div className="accommodation-list">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation.id}
            className="accommodation-card"
            onClick={() => redirectToDetails(accommodation.id)}
          >
            <div className="card-image">
              <img src={accommodation.cover} alt={accommodation.title} />
              <h3 className="card-title">{accommodation.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccommodationList;
