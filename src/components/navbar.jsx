import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
