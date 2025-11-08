import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MiPokedex</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Pokedex</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
