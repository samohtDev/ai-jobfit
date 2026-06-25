// Main navigation displayed at the top of the landing page

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container">
      <h2>AI JobFit</h2>

      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;