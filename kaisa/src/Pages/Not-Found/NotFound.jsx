import { Link } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './NotFound.sass';

function NotFound() {
  return (
    <div>
      <Header />
        <div className='main'>
          <div className='notfound'>
            <h1 className='notfound__title'>404</h1>
            <p className='notfound__txt'>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/" className="back-home">Retour à la page d&apos;accueil</Link>
          </div>
        </div>
      <Footer className="footer" />
    </div>
  );
}

export default NotFound;
