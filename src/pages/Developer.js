<<<<<<< HEAD
import React from 'react'
import img8 from'../image/Nigam.avif';
import img2 from '../image/facebooklogo.webp';
import img3 from '../image/image.png';
import img4 from '../image/download.png';
import img5 from '../image/download (1).png';
=======
import React from "react";
import img1 from "../image/cardimage.avif";
import img2 from "../image/logo.avif";

>>>>>>> e16d905330808174bbdf15e0add77404f2c6eb67
const Developer = () => {
  return (
    <div>
      <>
<<<<<<< HEAD
      <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img8} alt="Developer" className="developer-img" />
                </div>
                <div className="col-md-6">
                    <h1>About the Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit tortor,
                        commodo nec blandit vel, cursus nec elit. Cras ultricies ligula sed magna dictum porta.
                        Pellentesque in ipsum id orci porta dapibus.</p>
                    <p>Social Media:</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><img src={img2} alt="Facebook" width="40" /></a></li>
                        <li className="list-inline-item"><a href="#"><img src={img3} alt="Instagram" width="30" /></a></li>
                        <li className="list-inline-item"><a href="#"><img src={img4} alt="GitHub" width="50" /></a></li>
                        <li className="list-inline-item"><a href="#"><img src={img5} alt="LinkedIn" width="40" /></a></li>
                    </ul>
                </div>
=======
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6  image1">
              <img src={img1} alt="Developer" className="developer-img" />
>>>>>>> e16d905330808174bbdf15e0add77404f2c6eb67
            </div>
            <div className="col-md-6">
              <h1>About the Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Quisque velit tortor,
                commodo nec blandit vel, cursus nec elit. Cras ultricies ligula
                sed magna dictum porta. Pellentesque in ipsum id orci porta
                dapibus.
              </p>
              <p>Social Media:</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <img src={img2} alt="Facebook" width="40" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src={img2} alt="Instagram" width="40" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src={img2} alt="GitHub" width="40" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src={img2} alt="LinkedIn" width="40" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Developer;
