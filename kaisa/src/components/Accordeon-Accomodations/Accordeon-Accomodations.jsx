import './Accordeon-Accomodations.css';
import arrowClose from '@/assets/img/arrow-close.svg';

function AccordeonAccomodations({ title, children }) {
  return (
    <details className="accordeon">
      <summary className="accordeon__header">
        <h2 className='accordeon__title'>{title}</h2>
        <img className='accordeon__arrow' src={arrowClose} alt="Arrow icon" />
      </summary>
      <div className="accordeon__content">
        {children}
      </div>
    </details>
  );
}

export default AccordeonAccomodations;
