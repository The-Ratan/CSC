import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import apiurl from "./config";

const Knowstatus = () => {
  const [output, setoutput] = useState("");
  const [applicationid, setApplicationId] = useState("");
  const [data, setData] = useState("");
  
  const userStatus = (evt) => {
    evt.preventDefault();
    const userAppId = {
      application_no: applicationid,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/get_user_status`, userAppId)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        setoutput("Envalid Number or User Not Registered");
      });
  };

  return (
    <div>
      <div className="page-wraper">
        {" "}
        {/* HEADER START */}
        <Header />
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          {/*Top Banner Section Start*/}
          <div className="sf-profile-banner-full" style={{ paddingTop: "" }}>
            <div className="container sf-proBnrfull-container">
              <div className="sf-proBnrfull-row">
                {/*Top Banner Left*/}
                <div className=" sf-proBnrfull-lef">
                  <img
                    src="./images/banner/regs.png"
                    style={{
                      width: "100%",
                      height: "700px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />

                  {/* background-position: center;

background-size: cover; */}
                </div>
                {/*Top Banner Right*/}
                <div className=" sf-proBnrfull-right">
                  <h2 className=" sf-proBnrfull-heading">
                    Know Your Registration
                  </h2>
                  <div className=" sf-proBnrfull-tagline">
                    We Provide best services
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Top Banner Right*/}

          {/*Top Banner Section End*/}
          {/*Nav Section Start*/}

          {/*Nav Section End*/}
          <div className="container">
            {/*About Provider*/}
            <div className="sf-provi-bio-box cleafix margin-b-50 sf-provi-fullBox">
              {/*Left*/}

              {/*Right*/}
            </div>
            {/*About Provider End*/}
            {/*Service List Start*/}

            {/*Service List End*/}
            {/*Request a Quote*/}
            <div
              id="aon-provider-Req-quote"
              className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
            >
              <h3 className="sf-provi-title">Know Your Registration Status</h3>
              <div className="sf-divider-line" />
              <div className="sf-provi-qform">
                <form onSubmit={userStatus}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Application ID</label>
                        <font style={{ color: "red" }}> {output}</font>
                        <input
                          onChange={(e) => setApplicationId(e.target.value)}
                          name="name"
                          type="text"
                          required
                          maxLength={"12"}
                          minLength={"8"}
                          className="form-control"
                        />
                      </div>
                    </div>

                    {data ? (
                      <div className="sf-provi-qform">
                        <form>
                          <div className="row">
                            {data && data?.approve_status == 0 ? (
                              <div className="col-md-12">
                                <div className="form-group">
                                  <h3 className="sf-provi-title">
                                    Your Application Is Under Processing For
                                    Review
                                  </h3>
                                </div>
                              </div>
                            ) : (
                              <div className="col-md-12">
                                <div className="form-group">
                                  <h3 className="sf-provi-title">
                                    Your Application Is Approved By Admin Check
                                    Your Email-Box For Credentials
                                  </h3>
                                </div>
                              </div>
                            )}

                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Name</label>
                                <input
                                  disabled
                                  placeholder={data?.name}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  disabled
                                  placeholder={data?.email}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Phone</label>
                                <input
                                  disabled
                                  placeholder={data?.phone_no}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                  disabled
                                  placeholder={data?.date_of_birth}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Gender</label>
                                <input
                                  disabled
                                  placeholder={data?.gender}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Highest Qualification</label>
                                <input
                                  disabled
                                  placeholder={data?.highest_qualification}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>House Number</label>
                                <input
                                  disabled
                                  placeholder={data?.house_no}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Street Number</label>
                                <input
                                  disabled
                                  placeholder={data?.street_no}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Area</label>
                                <input
                                  disabled
                                  placeholder={data?.area}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  disabled
                                  placeholder={data?.city}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-group">
                                <label>State</label>
                                <input
                                  disabled
                                  placeholder={data?.state}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>District</label>
                                <input
                                  disabled
                                  placeholder={data?.district}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Pincode</label>
                                <input
                                  disabled
                                  placeholder={data?.pincode}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Aadhar Number</label>
                                <input
                                  disabled
                                  placeholder={data?.aadhar_no}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Pan Card Number</label>
                                <input
                                  disabled
                                  placeholder={data?.pan_card_no}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Aadhar Image</label>
                                <img
                                  disabled
                                  src={`http://103.104.74.215:3099/uploads/${data?.aadhar_image}`}
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Pan Card Image</label>
                                <img
                                  disabled
                                  src={`http://103.104.74.215:3099/uploads/${data?.pan_card_image}`}
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Home Image</label>
                                <img
                                  disabled
                                  src={`http://103.104.74.215:3099/uploads/${data?.home_image}`}
                                />
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Education Image</label>
                                <img
                                  disabled
                                  src={`http://103.104.74.215:3099/uploads/${data?.education_image}`}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="col-md-12">
                      <div className="form-group text-center qout-submit-btn">
                        <button
                          type="submit"
                          className="site-button clickksidebutton"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Content END*/} {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
        {/* BUTTON TOP START */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate" />
        </button>
        {/* Booking Summery box */}
        <div className="sf-summery-box">
          <button className="sf-suumery-close">
            <i className="fa fa-close" />
          </button>
          <div className="sf-summery-total">
            <span className="sf-sum-cel-one">Total Amount</span>
            <span className="sf-sum-cel-four">$185.25</span>
          </div>
          <div className="sf-summery-inr">
            <ul>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
              <li>
                <div className="sf-sum-cel-one">
                  <strong>Home Cleaning </strong>
                  <span>01:30 to 02:30</span>
                  <span>12 MAR 2022</span>
                </div>
                <div className="sf-sum-cel-four">$18.25</div>
              </li>
            </ul>
          </div>
        </div>
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

export default Knowstatus;
