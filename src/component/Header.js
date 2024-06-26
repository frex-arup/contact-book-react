import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.avif";

const Header = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div>
      <>
        <div>
          <div id="header">
            <div className="col-sm-12">
              <ul
                className="nav navbar justify-content-center  "
                style={{ gap: 30 }}
              >
                <a className="navbar-brand" to="/">
                  <img
                    src={logo}
                    style={{ height: 150, objectFit: "contain" }}
                    alt="Bootstrap"
                  />
                </a>
                
                <li className="nav-item">
                  <Link
                   className="nav-link active" aria-current="page"
                    to="/contact-book-react"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/ViewAll"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    View All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Create"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Developer"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    Developer
                  </Link>
                </li>
                <Link to>
                  <button className="custom-btn btn-3">
                    <span>GET A QUOTE</span>
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div id="header1">
          <div id="mySidenav" className="sidenav">
            <Link
              to="/"
              className="closebtn"
              onClick={closeNav}
            >
              ×
            </Link>
            <Link to="/contact-book-react">Home</Link>
            <Link to="/ViewAll">View All</Link>
            <Link to="/Create">Create</Link>
            <Link to="/Developer">Developer</Link>
          </div>
          <div id="main">
            {/* <span
              style={{ fontSize: 30, cursor: "pointer" }}
              onclick="openNav()"
            >
              ☰ open
            </span> */}
            <span style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>
              ☰ <img
                    src={logo}
                    style={{ height: 150, objectFit: "contain" }}
                    alt="Bootstrap"
                  />
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
