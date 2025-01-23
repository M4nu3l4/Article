import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FunctionComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/"className="navbar-brand">Spaceflight News</Link>
    </div>
  </nav>
);

export default Navbar;