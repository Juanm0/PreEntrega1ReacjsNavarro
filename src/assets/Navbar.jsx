import CartWidget from "./CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Primer Entrega React JS</h2>

      <div className="links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
