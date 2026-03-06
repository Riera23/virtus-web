import logoWhite from '../assets/Logo Virtus - Blanco.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#hero" className="logo-link">
          <img src={logoWhite} alt="Virtus Logo" className="navbar-logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#services" className="nav-link">Servicios</a></li>
          <li><a href="#methodology" className="nav-link">Metodología</a></li>
          <li><a href="#publications" className="nav-link">Publicaciones</a></li>
          <li><a href="#team" className="nav-link">Equipo</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;