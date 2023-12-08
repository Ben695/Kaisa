import { useState } from 'react';
import data from '@/assets/json/datas.json';
import arrowLeft from '@/assets/img/arrow-left.svg';
import arrowRight from '@/assets/img/arrow-right.svg';
import './Carroussel.sass';

export function Carroussel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prendre uniquement les pictures du premier objet dans data
  const pictures = data[0].pictures;
  const totalImages = pictures.length;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = pictures[currentImageIndex];

  return (
    <div className="carousel-container">
      <img src={currentImage} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
      <img src={arrowLeft} alt="Flèche gauche" className="arrow arrow-left" onClick={prevImage} />
      <img src={arrowRight} alt="Flèche droite" className="arrow arrow-right" onClick={nextImage} />
      <div className="carousel-num">
        {currentImageIndex + 1}/{totalImages}
      </div>
    </div>
  );
}

export default Carroussel;
