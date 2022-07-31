import NavbarLink from './NavbarLink'

import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavbarLink title="Home" route="/" />
      <NavbarLink title="About me" route="/about-me" />
      <NavbarLink title="Projects" route="/projects" />
      <NavbarLink title="Hobbys" route="/hobbys" />
      <NavbarLink title="About this portfolio" route="/portfolio" />
      <NavbarLink title="Contact" route="/contact" />
    </nav>
  );
}


export default Navbar;
