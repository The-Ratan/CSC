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

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const sumitprofilepic = (evt) => {
    evt.preventDefault();

    const formdata = {
      name: name,
      email: email,
      phone_no: phone_no,
      subject: subject,
      message: message,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/add_contact_data`, formdata)
      .then((response) => {
        
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
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
                  <div className="sf-banner-heading-large">Contact Us</div>
                  <div className="sf-banner-breadcrumbs-nav">
                    <ul className="list-inline">
                      <li>
                        <a href="index.html"> Home </a>
                      </li>
                      <li>Contact us</li>
                    </ul>
                  </div>
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
                <h2 className="sf-title">Contact Information</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              </div>
              {/*Title Section End*/}
              <div className="section-content">
                <div className="sf-contact-info-wrap">
                  <div className="row">
                    {/* COLUMNS 1 */}
                    <div className="col-lg-4 col-md-6">
                      <div className="sf-contact-info-box">
                        <div className="sf-contact-icon">
                          <span>
                            <img src="images/contact-us/1.png" alt="" />
                          </span>
                        </div>
                        <div className="sf-contact-info">
                          <h4 className="sf-title">Mailing Address</h4>
                          <p className="clickk">Ghaziabad Uttar Pradesh</p>
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 2 */}
                    <div className="col-lg-4 col-md-6">
                      <div className="sf-contact-info-box">
                        <div className="sf-contact-icon">
                          <span>
                            <img src="images/contact-us/2.png" alt="" />
                          </span>
                        </div>
                        <div className="sf-contact-info">
                          <h4 className="sf-title">Email Info</h4>
                          <p className="clickk">help@cscwale.com</p>
                        </div>
                      </div>
                    </div>
                    {/* COLUMNS 3 */}
                    <div className="col-lg-4 col-md-6">
                      <div className="sf-contact-info-box">
                        <div className="sf-contact-icon">
                          <span>
                            <img src="images/contact-us/3.png" alt="" />
                          </span>
                        </div>
                        <div className="sf-contact-info">
                          <h4 className="sf-title">Phone Number</h4>
                          <p className="clickk">
                            +918860474425 ( 9 AM To 9 PM )
                          </p>
                          <p className="clickk">
                            +919582115358 ( 9 AM To 9 PM )
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sf-contact-form-wrap">
                  {/*Contact Information*/}
                  <div className="sf-contact-form">
                    <div className="sf-con-form-title text-center">
                      <h2 className="m-b30">Contact Information</h2>
                    </div>
                    <form  onSubmit={sumitprofilepic}>
                      <div className="row">
                        {/* COLUMNS 1 */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={(e) => setname(e.target.value)}
                              value={name}
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        {/* COLUMNS 2 */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={(e) => setemail(e.target.value)}
                              value={email}
                              name="name"
                              type="email"
                              placeholder="Email"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        {/* COLUMNS 3 */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={(e) => setphone_no(e.target.value)}
                              value={phone_no}
                              name="name"
                              type="text"
                              placeholder="Phone"
                              className="form-control"
required

                              maxLength={"10"}
                              minLength={"10"}
                             
                              
                            />
                          </div>
                        </div>
                        {/* COLUMNS 4 */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              onChange={(e) => setsubject(e.target.value)}
                              value={subject}
                              name="name"
                              type="text"
                              placeholder="Subject"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        {/* COLUMNS 5 */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              onChange={(e) => setmessage(e.target.value)}
                              value={message}
                              name="name"
                              type="text"
                              placeholder="Message"
                              className="form-control"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LfcCr0eAAAAAN2P-3cJJC1StgxbUWvwELbMVjnp"
                          />
                        </div>
                      </div>
                      <div className="sf-contact-submit-btn">
                        <button className="site-button clickksidebutton" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*Contact Information End*/}
                </div>
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

export default Contact;
