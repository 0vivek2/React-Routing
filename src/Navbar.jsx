import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "10px",
    background: "#333",
    display: "flex",
    gap: "15px"
  };
  const linkStyle = { color: "white", textDecoration: "none" };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
