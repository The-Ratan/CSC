import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import Serviceshelp from "./Serviceshelp";
import Patnerpage from "./Patnerpage";
import Cscnews from "./Cscnews";
import Section from "./Section";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import apiurl from "./config";

const Forgotpassword = () => {
  const [output, setoutput] = useState("");
  const [email, setemail] = useState();
  const [otpp, setotp] = useState();

  const [otppp, setotpp] = useState();

  const [pan_card_no, setpan_card_no] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [repeatpassword, setrepeatpassword] = useState("");

  const otpsend = () => {
    if (!email) {
      setoutput("Please Enter Your Registered Email-id");
      return;
    }
    const userData = {
      email: email,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/send_otp`
        , userData)
      .then((res) => {
        toast.success(res.data.msg);
        setotp(res.data.otp);
      })
      .catch((error) => {
        setoutput("Envalid Data Provide By You");
      });
  };

  const changepassword = (evt) => {
    evt.preventDefault();

    if (newpassword !== repeatpassword) {
      setoutput("Please Enter Same Data in Confirm & Newpassword ");
      return;
    }

    if (!otpp) {
      setoutput("Please Enter Otp.");
      return;
    }

    if (otppp != otpp) {
      setoutput("You Entered Incorrect Otp.");
      return;
    }

    const userData = {
      email: email,
      password: newpassword,
      otp: otpp,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/forgot_password`, userData)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((error) => {
        setoutput("Invalid Data Provided By You");
      });
  };

  return (
    <div>
      {/* LOADING AREA START ===== */}

      {/* LOADING AREA  END ====== */}
      <div className="page-wraper">
        {/* HEADER START */}
        <Header />
        <Toaster />
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          {/*Banner*/}
          <div className="aon-page-benner-area" style={{ paddingTop: "70px" }}>
            <div
              className="aon-page-banner-row"
              style={{ backgroundImage: "url(images/banner/job-banner.jpg)" }}
            >
              <div
                className="sf-overlay-main"
                style={{ opacity: "0.2", backgroundColor: "#022279" }}
              />
              <div className="sf-banner-heading-wrap">
                <div className="sf-banner-heading-area">
                  <div className="sf-banner-heading-large">Forgot password</div>
                  {/* <div className="sf-banner-breadcrumbs-nav">
                    <ul className="list-inline">
                      <li>
                        <a href="index.html"> Home </a>
                      </li>
                      <li>Forgot password us</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Banner*/}
          {/* Contact Us*/}
          <div className="aon-contact-area">
            <div className="container">
              {/*Title Section Start*/}
              <div className="section-head text-center">
                <h2 className="sf-title">Reset Password</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              </div>
              {/*Title Section End*/}
              <div className="aon-admin-heading">
                <h4>
                  <strong>Edit Profile</strong>
                </h4>
              </div>
              <div class="card aon-card" id="aon-passUpdate-panel">
                <div class="card-header aon-card-header">
                  <h4>
                    <i class="fa fa-lock"></i> Password Update
                  </h4>
                </div>
                <div class="card-body aon-card-body">
                  <font style={{ color: "red" }}>{output}</font>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Enter Your Registered Email-id</label>
                        <div class="aon-inputicon-box">
                          <input
                            type="email"
                            class="form-control sf-form-control"
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            rows={8}
                            className="form-control"
                            defaultValue={""}
                          />

                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mt-2">
                      <div class="form-group">
                        <label>{""}</label>
                        <div class="aon-inputicon-box">
                          <button
                            onClick={otpsend}
                            type="submit"
                            class="site-button clickksidebutton"
                          >
                            Submit <i class="feather-arrow-right"></i>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {otpp ? (
                  <form onSubmit={changepassword}>
                    <div class="card-body aon-card-body">
                      {/* {otpp} */}
                      <div class="row">
                        {/* <div class="col-md-6">
                      <div class="form-group">
                        <label>Pan Card Number</label>
                        <div class="aon-inputicon-box">
                          <input
                            class="form-control sf-form-control"
                            maxLength={"10"}
                            minLength={"10"}
                            required
                            value={pan_card_no}
                            onChange={(e) => setpan_card_no(e.target.value)}
                            rows={8}
                            className="form-control"
                            defaultValue={""}
                          />

                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div> */}
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Enter Otp Here!</label>
                            <div class="aon-inputicon-box">
                              <input
                                class="form-control sf-form-control"
                                required
                                value={otppp}
                                onChange={(e) => setotpp(e.target.value)}
                                type="text"
                              />
                              <i class="aon-input-icon fa fa-lock"></i>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>New Password</label>
                            <div class="aon-inputicon-box">
                              <input
                                class="form-control sf-form-control"
                                required
                                value={newpassword}
                                onChange={(e) => setnewpassword(e.target.value)}
                                type="password"
                              />
                              <i class="aon-input-icon fa fa-lock"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Repeat Password</label>
                            <div class="aon-inputicon-box">
                              <input
                                required
                                value={repeatpassword}
                                onChange={(e) =>
                                  setrepeatpassword(e.target.value)
                                }
                                class="form-control sf-form-control"
                                name="company_name"
                                type="password"
                              />
                              <i class="aon-input-icon fa fa-lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Enter same password in both fields. Use an uppercase
                        letter and a number for stronger password.
                      </p>
                    </div>

                    <button type="submit" class="site-button w-50">
                      Submit <i class="feather-arrow-right"></i>{" "}
                    </button>
                  </form>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {/* Contact Us*/}
        </div>
        {/* Content END*/}
        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
        {/* BUTTON TOP START */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate" />
        </button>
      </div>
      {/* Login Sign Up Modal */}
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
                                  <label htmlFor="td2_2">Keep me logged</label>
                                </div>
                              </div>
                              <div className="aon-login-opright">
                                <a href="#">Forget Password</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="site-button w-100">
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
                            <button type="submit" className="site-button w-100">
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
  );
};

export default Forgotpassword;
