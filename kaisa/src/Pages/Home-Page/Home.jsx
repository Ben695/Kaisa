import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import imgHeader from '@/assets/img/img-2.png';
import './Home.sass';
import AccommodationList from '@/components/Accomodation-list/AccommodationList';

function Home() {
  return (
    <div>
      <Header />
        <div className='main'>
          <div className='home'>
            <div className='home__intro'>
              <img src={imgHeader} className='img-header' alt="Image" />
              <h1 className='home__title'>Chez vous, partout et ailleurs</h1>
            </div>
            <AccommodationList />
          </div>
        </div>
      <Footer className="footer" />
    </div>
  );
}

export default Home;
