import './Header.sass'; 
import logoSvg from '@/assets/img/LOGO.svg';

function Header() {
  return (
    <header className="header-container">
      <nav>
        <a href="/"><img className='logo' src={logoSvg} alt="Logo" /></a>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
