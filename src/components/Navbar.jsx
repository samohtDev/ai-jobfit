// Main navigation displayed at the top of the landing page
// React Router Link is used instead of HTML anchor tags
// to navigate between pages without reloading the application.

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container">
      <h2>AI JobFit</h2>

      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;