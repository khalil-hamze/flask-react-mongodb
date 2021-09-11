import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <Link className="navbar-brand" to="/home">
          <img src="images/logo-compugear.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#company">
                Company
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products&solutions">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ourcustomers">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
