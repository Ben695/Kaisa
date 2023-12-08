import logoWhite from '@/assets/img/logo-kinsa-white.png'; 
import './Footer.sass';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div>
        <img src={logoWhite} alt="Logo Kinsa" />
      </div>
      <p className='footer__txt'>© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;