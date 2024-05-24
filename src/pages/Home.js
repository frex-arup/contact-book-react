import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutimage from "../image/aboutimage2.jpg";
import features from "../image/features.jpg";
import whychooseusimg from "../image/image1.avif";
import Gallery from "../component/Gallery";

const Home = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <>
        <section className="about p-t80">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center mb-5 mb-md-0">
                <div className="watch-img text-center ">
                  <img src={aboutimage} alt="watch" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 align-self-center text-center text-md-left">
                <div className="watch-content">
                  <h1>Belive in Technology, Make the change</h1>
                  <p className="lead text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas, modi fugit in veritatis labore perferendis. Minima
                    hic at, nostrum nihil!
                  </p>
                </div>
                <button type="button" className="btn btn-default">
                  Technology
                </button>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>
      </>

      <>
        {/* Why chose us start */}
        <section className="chose-us p-t80">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="chose-headline">
                  <div className="finix-text mt-5">
                    <h6>Transparent process</h6>
                    <h1>Why people choose us</h1>
                    <p className="lead mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="chose-img py-5 ">
                      <img
                        src={whychooseusimg}
                        alt="watch"
                        className="img-fluid"
                        style={{ borderRadius: 10 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row features-items mt-5">
                  <div className="col-xl-6">
                    <div className="feature-item text-center mt-4">
                      <div className="feature-icon">
                        <i className="fas fa-percent" />
                      </div>
                      <h4 className="py-4">Guarantee</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="feature-item text-center">
                      <div className="feature-icon">
                        <i className="fas fa-plane" />
                      </div>
                      <h4 className="py-4">Speed</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="feature-item text-center">
                      <div className="feature-icon">
                        <i className="fab fa-amazon-pay" />
                      </div>
                      <h4 className="py-4">Reliability</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="feature-item text-center mtop">
                      <div className="feature-icon">
                        <i className="fab fa-apple-pay" />
                      </div>
                      <h4 className="py-4">Experience</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why chose us end */}
      </>

      <>
        {/* Service section */}
        <section className="service-section py-5 p-t80">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="finix-text text-center  ">
                  <h6>Knowledge of the market</h6>
                  <h1>Only the best professional services</h1>
                  <p className="pera">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul
                  className="nav service-menu mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Agricultural"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected={true}
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong className="d-block">Agricultural </strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Parsonal"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong>Parsonal </strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Business"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong>Business </strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Education"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong>Education </strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-House"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong>House </strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Payday"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <span className="d-block">
                        <i className="fas fa-home    " />
                      </span>
                      <strong>Payday </strong>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent ">
                  <div
                    className="tab-pane fade show active"
                    id="pills-Agricultural"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>Agricultural </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Parsonal"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>Parsonal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Business"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>Business </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Education"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>Education </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-House"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>House </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-Payday"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row pt-4">
                      <div className="col-lg-6">
                        <div className="service-img">
                          <img
                            src={whychooseusimg}
                            style={{ width: "-webkit-fill-available" }}
                            alt="altText"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-content">
                          <h4>Payday </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <h4>Types of business </h4>
                          <ul>
                            <li>Secured </li>
                            <li>Unsecured </li>
                            <li>Revolving credit facilities</li>
                            <li>Business cash advances</li>
                          </ul>
                          <h4>Eligibility and criteria for Personal </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <h4>Personal guide</h4>
                          <p>
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service section end*/}
      </>

      <>
        <div className="container">
          <div className="row ">
            <Slider {...settings1}>
              <div className="col h-100 pe-3">
                <div className="card h-100 ">
                  <div className="card1">
                    <div className="content">
                      <h2 className="title1">Mountain View</h2>
                      <p className="copy">
                        Check out all of these gorgeous mountain trips with
                        beautiful views of, you guessed it, the mountains
                      </p>
                      <button className="btn">View Trips</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col h-100 pe-3">
                <div className="card h-100">
                  <div className="card1">
                    <div className="content">
                      <h2 className="title1">Mountain View</h2>
                      <p className="copy">
                        Check out all of these gorgeous mountain trips with
                        beautiful views of, you guessed it, the mountains
                      </p>
                      <button className="btn">View Trips</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pe-3 h-100">
                <div className="card h-100">
                  <div className="card1">
                    <div className="content">
                      <h2 className="title1">Mountain View</h2>
                      <p className="copy">
                        Check out all of these gorgeous mountain trips with
                        beautiful views of, you guessed it, the mountains
                      </p>
                      <button className="btn">View Trips</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pe-3 h-100">
                <div className="card h-100">
                  <div className="card1">
                    <div className="content">
                      <h2 className="title1">Mountain View</h2>
                      <p className="copy">
                        Check out all of these gorgeous mountain trips with
                        beautiful views of, you guessed it, the mountains
                      </p>
                      <button className="btn">View Trips</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pe-3 h-100">
                <div className="card h-100">
                  <div className="card1">
                    <div className="content">
                      <h2 className="title1">Mountain View</h2>
                      <p className="copy">
                        Check out all of these gorgeous mountain trips with
                        beautiful views of, you guessed it, the mountains
                      </p>
                      <button className="btn">View Trips</button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>

      <>
        <section className="our_feature">
          <div className="container">
            <h1 className="text-center">Our Core Features</h1>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="mb-40 text-center text-md-left">
                  <i className="far fa-clock py-1 h3" />
                  <h5>Smooth Touch</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
                <div className="my-5 text-center text-md-left">
                  <i className="far fa-bell h3" />
                  <h5>Elegant Design</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
                <div className="mb-40 text-center text-md-left">
                  <i className="fas fa-shopping-cart h3" />
                  <h5>Easy Pricing</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="watch-img text-center ">
                  <img src={features} alt="watch-2" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-40 text-center text-md-left">
                  <i className="far fa-clock py-1 h3" />
                  <h5>Smooth Touch</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
                <div className="my-5 text-center text-md-left">
                  <i className="far fa-bell h3" />
                  <h5>Elegant Design</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
                <div className="mb-40 text-center text-md-left">
                  <i className="fas fa-shopping-cart h3" />
                  <h5>Easy Pricing</h5>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>


      <>

     <div className="container-fluid backdesign">
      <h1 className="text-center">Our Core Features</h1>
      <Gallery/>
      
      </div>
      </>
    </div>
  );
};

export default Home;
