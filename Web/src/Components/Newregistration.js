import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "./config";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Newregistration = () => {
  const [output, setOutput] = useState("");
  let [loaderstatus, setloaderstatus] = useState(true);
  let [simbolstatus, setsimbolstatusstatus] = useState(true);
  let [errorstatus, seterrorstatus] = useState(true);
  const [activeTab, setActiveTab] = useState('hindi'); 
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(true);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const toggleDocumentModal = () => {
    setIsDocumentModalOpen(!isDocumentModalOpen);
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [gender, setGender] = useState("");

  const [phone_no, setphone_no] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [highest_qualification, sethighest_qualification] = useState("");
  const [house_no, sethouse_no] = useState("");
  const [street_no, setstreet_no] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [pincode, setpincode] = useState("");

  const [aadhar_no, setaadhar_no] = useState("");
  const [pan_card_no, setpan_card_no] = useState("");
  const [aadhar_image, setaadhar_image] = useState("");
  const [pan_card_image, setpan_card_image] = useState("");

  const [home_image, sethome_image] = useState("");
  const [education_image, seteducation_image] = useState("");
  const Navigate = useNavigate();



  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      // if (!name || !email || !gender) {
      //   setOutput("Please fill in all required fields.");
      //   return;
      // }

      if (!gender) {
        setOutput("Please Select Gender.");
        return;
      }

      if (!highest_qualification) {
        setOutput("Please select Qualification.");
        return;
      }

      let userDetails = new FormData();
      userDetails.append("name", name);
      userDetails.append("email", email);
      userDetails.append("phone_no", phone_no);
      userDetails.append("date_of_birth", date_of_birth);
      userDetails.append("gender", gender);
      userDetails.append("highest_qualification", highest_qualification);
      userDetails.append("house_no", house_no);
      userDetails.append("street_no", street_no);
      userDetails.append("area", area);
      userDetails.append("city", city);
      userDetails.append("state", state);
      userDetails.append("district", district);
      userDetails.append("pincode", pincode);
      userDetails.append("aadhar_no", aadhar_no);
      userDetails.append("pan_card_no", pan_card_no);
      userDetails.append("aadhar_image", aadhar_image);
      userDetails.append("pan_card_image", pan_card_image);
      userDetails.append("home_image", home_image);
      userDetails.append("education_image", education_image);
      userDetails.append("user_type", "operator");

      const response = await axios.post(`${apiurl[0].apiUrl}website/user_registration`
        ,
        userDetails
      );
      setsimbolstatusstatus(false);
      setloaderstatus(true);
      secureLocalStorage.setItem(
        "registrastiondata",
        JSON.stringify(response.data.data)
      );

      if (response.data.msg !== "true") {
        toast.success(response.data.msg);
        secureLocalStorage.setItem(
          "registrastiondata",
          JSON.stringify(response.data.data)
        );

        setTimeout(() => {
          window.location.reload(Navigate("/registrastionsuccessfully"));
        }, 3000);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
    setloaderstatus(false);
  };

  return (
    <div>
      <div className="page-wraper">
        {" "}
        {/* HEADER START */}
        <Header />
        <Toaster />
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          {/*Top Banner Section Start*/}
          <div className="sf-profile-banner-full" style={{ paddingTop: "px" }}>
            <div className="container sf-proBnrfull-container">
              <div className="sf-proBnrfull-row">
                {/*Top Banner Left*/}
                <div className=" sf-proBnrfull-lef">
                  <img
                    src="./images/banner/regis1.webp"
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
                  <h2 className=" sf-proBnrfull-heading">New Registration</h2>
                  <div className=" sf-proBnrfull-tagline">
                    We Provide best services
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <h3 className="sf-provi-title">New Registration</h3>
              <div className="sf-divider-line" />
              <div className="sf-provi-qform">
                <font style={{ color: "red" }}>{output}</font>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          maxLength={"10"}
                          minLength={"10"}
                          value={phone_no}
                          onChange={(e) => setphone_no(e.target.value)}
                          type="mobile"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          value={date_of_birth}
                          onChange={(e) => setdate_of_birth(e.target.value)}
                          type="date"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Gender</label>
                        <div class="aon-inputicon-box">
                          <div class="radio-inline-box sf-radio-check-row">
                            <div class="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
                              <input
                                type="radio"
                                id="male"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                                required
                              />
                              <label htmlFor="male">Male</label>
                            </div>
                            <div class="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
                              <input
                                type="radio"
                                id="female"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                                required
                              />
                              <label htmlFor="female">Female</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Select Highest Qualification</label>
                        <select
                          required
                          className="form-control"
                          value={highest_qualification}
                          onChange={(e) =>
                            sethighest_qualification(e.target.value)
                          }
                        >
                          <option>Select One</option>
                          <option>10th</option>
                          <option>12th</option>
                          <option>Bachlor</option>
                          <option>Master</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>House Number</label>
                        <input
                          value={house_no}
                          onChange={(e) => sethouse_no(e.target.value)}
                          type="number"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Street Number</label>
                        <input
                          value={street_no}
                          onChange={(e) => setstreet_no(e.target.value)}
                          type="number"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Area</label>
                        <input
                          value={area}
                          onChange={(e) => setarea(e.target.value)}
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          value={city}
                          onChange={(e) => setcity(e.target.value)}
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>State</label>
                        <input
                          value={state}
                          onChange={(e) => setstate(e.target.value)}
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>District</label>
                        <input
                          value={district}
                          onChange={(e) => setdistrict(e.target.value)}
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Pincode</label>
                        <input
                          value={pincode}
                          onChange={(e) => setpincode(e.target.value)}
                          type="number"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <h4>Category</h4>
                      <div className="aon-inputicon-box"></div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mention your Aadhar Number</label>
                        <input
                          required maxLength={'12'} minLength={'12'}
                          value={aadhar_no}
                          onChange={(e) => setaadhar_no(e.target.value)}
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Enter Pan Card Number</label>
                        <input maxLength={'10'} minLength={'10'}
                          required
                          value={pan_card_no}
                          onChange={(e) => setpan_card_no(e.target.value)}
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Upload Your Aadhar Card</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              required
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                setaadhar_image(e.target.files[0])
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Add Your Pan Card</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              required
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                setpan_card_image(e.target.files[0])
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Add Your Self Photo with Shop or Home</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              required
                              type="file"
                              accept="image/*"
                              onChange={(e) => sethome_image(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Add Your -Highest Education Certificate</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              required
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                seteducation_image(e.target.files[0])
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br/>
<br/>
<br/>
<br/>

<br/>

                    <div className="col-md-12">
                           
                    <div class="checkbox sf-radio-checkbox ">
                <input id="td2_2" name="abc" value="five" type="checkbox" />
                <label for="td2_2">I have read <a   class="aon-title clickdataterm" data-toggle="modal" data-target="#documentModalterms" onClick={toggleDocumentModal} style={{ borderBottom: "3px solid #022279" ,color:'blue'}} >Terms & Conditions</a></label>
              </div>
                          </div>

                    {/* <div className="col-md-12">
                      <div className="form-group text-center qout-submit-btn">
                        <button
                          type="submit"
                          className="site-button clickksidebutton"
                        >
                          Submit
                        </button>
                      </div>
                    </div> */}
                  
                  <div className="col-md-12">
                  <div className="text-center form-group text-center qout-submit-btn">
                            {loaderstatus == true ? (
                              simbolstatus == true ? (
                                <button type="submit"  className="text-center site-button clickksidebutton">
                                Submit
                              </button>
                              ) : errorstatus == true ? (
                                <>
                                  <h6 className="text-success m-2">Success</h6>
                                </>
                              ) : (
                                <>
                                  <h6 className="text-danger m-2">Try-Agian</h6>
                                </>
                              )
                            ) : errorstatus == true ? (
                              <button className="loader m-2"></button>
                            ) : (
                              <>
                                <h6 className="text-danger m-2">Try-Again</h6>
                              </>
                            )}
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

                          <div class="checkbox sf-radio-checkbox ">
                <input id="td2_2" name="abc" value="five" type="checkbox" />
                <label for="td2_2">I have read <a   class="aon-title clickdataterm" data-toggle="modal" data-target="#documentModalterms" onClick={toggleDocumentModal} style={{ borderBottom: "3px solid #022279" ,color:'blue'}} >Terms & Conditions</a></label>
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

      {isDocumentModalOpen && (
        <div className="modal fade" id="documentModalterms" tabIndex={-1} role="dialog" aria-labelledby="documentModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered d-flex align-items-center justify-content-center" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'hindi' ? 'active' : ''}`} onClick={() => toggleTab('hindi')}>
                      Hindi
                    </button>
                  </li>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'english' ? 'active' : ''}`} onClick={() => toggleTab('english')}>
                      English
                    </button>
                  </li>
                </ul> */}



<ul className="nav nav-tabs"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === 'hindi' ? 'active' : ''}`}
      onClick={() => toggleTab('hindi')}
      style={{ backgroundColor: activeTab === 'hindi' ? '#ffb600' : '' }}
    >
      Hindi
    </button>
  </li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === 'english' ? 'active' : ''}`}
      onClick={() => toggleTab('english')}
      style={{ backgroundColor: activeTab === 'english' ? '#ffb600' : '' }}
    >
      English
    </button>
  </li>
</ul>


               
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleDocumentModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                {activeTab === 'hindi' && (
                  <p className="aon-title" style={{textAlign:'justify'}}>मैं घोषणा करता हूँ कि आवेदन के लिए दिये गए सभी विवरण व दस्तावेज़ मेरी जानकारी में शुद्ध एवं सत्य है यदि
                  इसमे किसी प्रकार का झूठ व बदलाव पाये जाते है तो मेरे विरुद्ध भा.दं.सं. धारा 199 व 200 की उक्त कार्यवाही की जा सकती है</p>
                )}
                {activeTab === 'english' && (
                  <p className="aon-title" style={{textAlign:'justify'}}>I declare that all the details and documents given in the application are correct and true to the best of my knowledge.
                  If any kind of lie or change is found in it then FIR will be filed against me. The above action can be taken under section 199 and 200.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newregistration;
