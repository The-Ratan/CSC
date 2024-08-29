import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import Serviceshelp from "./Serviceshelp";
import Patnerpage from "./Patnerpage";
import Cscnews from "./Cscnews";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <div>
        <div className="page-wraper">
          <Header />

          <div className="page-content">
            <Section />
            <Services />
            <div className="site-bg-primary aon-statics-area">
              <div className="container">
                <div className="section-content">
                  <div className="row d-flex flex-wrap align-items-center a-b-none">
                    <div className="col-lg-6 col-md-12">
                      {/*Title Section Start*/}
                      <div className="section-head">
                        <span className="aon-sub-title">cScWale</span>
                        <h2 className="sf-title">
                          Trusted by thousands of people all over the Indian
                          Cities{" "}
                        </h2>
                        <p>
                          CscWale is the best platform for all require services,
                          all the services are very useful and import for our
                          daily requirement and very cheap.{" "}
                        </p>
                      </div>
                      {/*Title Section End*/}
                    </div>
                    <div className="col-lg-6 col-md-12">
                      {/*Statics-blocks Section Start*/}
                      <div className="aon-statics-blocks">
                        <div className="row">
                          {/*Block 1*/}
                          <div className="col-lg-6 m-b30 aon-static-position-1">
                            <div className="media-bg-animate media-statics aon-icon-effect">
                              <div className="aon-static-section aon-t-blue">
                                <div className="aon-company-static-num counter aon-icon">
                                  89
                                </div>
                                <div className="aon-company-static-name">
                                  Providers
                                </div>
                              </div>
                            </div>

                            <div className="media-bg-animate media-statics aon-icon-effect">
                              <div className="aon-static-section aon-t-yellow">
                                <div className="aon-company-static-num counter aon-icon">
                                  18
                                </div>
                                <div className="aon-company-static-name">
                                  Jobs
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*Block 2*/}
                          <div className="col-lg-6 m-b30 aon-static-position-2">
                            <div className="media-bg-animate media-statics aon-icon-effect">
                              <div className="aon-static-section aon-t-green">
                                <div className="aon-company-static-num counter aon-icon">
                                  366
                                </div>
                                <div className="aon-company-static-name">
                                  Customer
                                </div>
                              </div>
                            </div>
                            <div className="media-bg-animate media-statics aon-icon-effect">
                              <div className="aon-static-section aon-t-skyblue">
                                <div className="aon-company-static-num counter aon-icon">
                                  43
                                </div>
                                <div className="aon-company-static-name">
                                  Categories
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Statics-blocks Section End*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Patnerpage /> */}
            {/* <Serviceshelp /> */}
            {/* <Cscnews /> */}
          </div>

          <Footer />

          <button className="scroltop">
            <span className="fa fa-angle-up  relative" id="btn-vibrate" />
          </button>
        </div>

        <div className="modal fade" id="login-signup-model">
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="close aon-login-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <div className="sf-custom-tabs sf-custom-new aon-logon-sign-area p-3">
                  {/*Tabs*/}
                  <ul className="nav nav-tabs nav-table-cell">
                    <li>
                      <a data-toggle="tab" href="#Upcoming" className="active">
                        Login
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Past">
                        Sign up
                      </a>
                    </li>
                  </ul>
                  {/*Tabs Content*/}
                  <div className="tab-content">
                    {/*Login Form*/}
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="company_name"
                                    type="text"
                                    placeholder="User Name"
                                  />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="company_name"
                                    type="password"
                                    placeholder="Password"
                                  />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group d-flex aon-login-option justify-content-between">
                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    <input
                                      id="td2_2"
                                      name="abc"
                                      defaultValue="five"
                                      type="checkbox"
                                    />
                                    <label htmlFor="td2_2">
                                      Keep me logged
                                    </label>
                                  </div>
                                </div>
                                <div className="aon-login-opright">
                                  <a href="#">Forget Password</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="site-button w-100"
                              >
                                Submit <i className="feather-arrow-right" />{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/*Sign up Form*/}
                    <div id="Past" className="tab-pane">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="First_Name"
                                    type="text"
                                    placeholder="First Name"
                                  />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="company_name"
                                    type="password"
                                    placeholder="Last Name"
                                  />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="Phone"
                                    type="password"
                                    placeholder="Phone"
                                  />
                                  <i className="aon-input-icon fa fa-phone" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="email"
                                    type="password"
                                    placeholder="Email"
                                  />
                                  <i className="aon-input-icon fa fa-envelope-o" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                  />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box">
                                  <input
                                    className="form-control sf-form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Confirm Password"
                                  />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group sign-term-con">
                                <div className="checkbox sf-radio-checkbox">
                                  <input
                                    id="td33"
                                    name="abc"
                                    defaultValue="five"
                                    type="checkbox"
                                  />
                                  <label htmlFor="td33">
                                    I've read and agree with your{" "}
                                    <a href="#">Privacy Policy</a> and{" "}
                                    <a href="#">Terms &amp; Conditions</a>{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="site-button w-100"
                              >
                                Submit <i className="feather-arrow-right" />{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
