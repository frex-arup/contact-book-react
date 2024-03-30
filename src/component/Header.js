import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../image/logo.avif'

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
    <nav className="menuBar">
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav navbar justify-content-center  " style={{gap: 20}}><a className="navbar-brand" href="/">
              <img src={logo} style={{height: 150, objectFit: 'contain'}} alt="Bootstrap" /></a>
            {/* <div class="dropdown">
                          <button class="dropbtn">Product <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn"> Services <i class="fa fa-caret-down">
                               </i>
                      </button>
                          <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn">Porfolio<i class="fa fa-caret-down"> 
                          </i>
                      </button>
                          <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                          </div>
                      </div>
                      <div class="dropdown">
                          <button class="dropbtn">About Us<i class="fa fa-caret-down"> 
                          </i>
                      </button>
                          <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                          </div>
                      </div> */}
            <li className="nav-item">
              <Link className="nav-link" href="#" style={{color: 'rgb(0, 0, 0)'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" style={{color: 'rgb(0, 0, 0)'}}>View All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" style={{color: 'rgb(0, 0, 0)'}}>Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" style={{color: 'rgb(0, 0, 0)'}}>Developer</Link>
            </li>
            <Link href><button className="custom-btn btn-3"><span>GET A QUOTE</span></button></Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="header1">
    <div id="mySidenav" className="sidenav">
      <Link href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</Link>
      <Link href="#">Home</Link>
      <Link href="#">View All</Link>
      <Link href="#">Create</Link>
      <Link href="#">Developer</Link>
    </div>
    <div id="main">
      
      <span style={{fontSize: 30, cursor: 'pointer'}} onclick="openNav()">☰ open</span>
    </div>
  </div>
</div>

        </>
    </div>
  )
}

export default Header