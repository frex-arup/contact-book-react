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
                {/* <div class="dropdown">
                          <button class="dropbtn">Product <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                              <a to="#">Link 1</a>
                              <a to="#">Link 2</a>
                              <a to="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn"> Services <i class="fa fa-caret-down">
                               </i>
                      </button>
                          <div class="dropdown-content">
                              <a to="#">Link 1</a>
                              <a to="#">Link 2</a>
                              <a to="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn">Porfolio<i class="fa fa-caret-down"> 
                          </i>
                      </button>
                          <div class="dropdown-content">
                              <a to="#">Link 1</a>
                              <a to="#">Link 2</a>
                              <a to="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn">About Us<i class="fa fa-caret-down"> 
                          </i>
                      </button>
                          <div class="dropdown-content">
                              <a to="#">Link 1</a>
                              <a to="#">Link 2</a>
                              <a to="#">Link 3</a>
                          </div>
                      </div> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
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
              to="javascript:void(0)"
              className="closebtn"
              onclick="closeNav()"
            >
              ×
            </Link>
            <Link to="#">Home</Link>
            <Link to="#">View All</Link>
            <Link to="#">Create</Link>
            <Link to="#">Developer</Link>
          </div>
          <div id="main">
            <span
              style={{ fontSize: 30, cursor: "pointer" }}
              onclick="openNav()"
            >
              ☰ open
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
