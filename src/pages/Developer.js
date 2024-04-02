import React from 'react'
import Nigam from'../image/IMG_20230810_203433_0515.jpg';
import Facebook from '../image/facebooklogo.webp';
import Instagram from '../image/image.png';
import GitHub from '../image/download.png';
import LinkedIn from '../image/download (1).png';
// import img1 from "../image/cardimage.avif";
// import nigam from "../image/Nigam.jpg";

// import img6 from "../image/logo.avif";

const Developer = () => {
  return (
    <div>
       <>

<div className="container mt-5">
      <div className="row">
          <div className="col-md-6">
              <img src={Nigam} alt="Developer" className="developer-img" />
          </div>
          <div className="col-md-6">
              <h1>About the Developer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit tortor,
                  commodo nec blandit vel, cursus nec elit. Cras ultricies ligula sed magna dictum porta.
                  Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Social Media:</p>
              <ul className="list-inline">
                  <li className="list-inline-item"><a href="#"><img src={Facebook} alt="Facebook" width="40" /></a></li>
                  <li className="list-inline-item"><a href="#"><img src={Instagram} alt="Instagram" width="30" /></a></li>
                  <li className="list-inline-item"><a href="#"><img src={GitHub} alt="GitHub" width="50" /></a></li>
                  <li className="list-inline-item"><a href="#"><img src={LinkedIn} alt="LinkedIn" width="40" /></a></li>
              </ul>
          </div>
  </div>
  </div>
</>
    </div>
  )
}

export default Developer