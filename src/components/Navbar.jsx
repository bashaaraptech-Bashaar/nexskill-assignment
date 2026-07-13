import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Awesome App</h3>
      </div>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>

      <button className="hero-button">Download Now</button>
    </nav>
  );
}

export default Navbar;