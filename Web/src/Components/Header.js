import React, { useState } from "react";
import "./header.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Header = () => {
  const [showAdditionalFields22, setShowAdditionalFields22] = useState(false);
  const [email, setemail] = useState("");
  const [output, setOutput] = useState("");
  const [mobile, setmobile] = useState("");
  const [otp, setotp] = useState("");

  const [selfdata, setselfdata] = useState("");
  const [selfdataid, setselfdataid] = useState("");

  const [isContentVisible, setContentVisible] = useState(false);
  const Navigate = useNavigate("");
  const [operatoremail, setoperatoremail] = useState("");
  const [operatorpassword, setoperatorpassword] = useState("");

  const handleAddNewClick22 = () => {
    setShowAdditionalFields22(!showAdditionalFields22);
  };

  const handleMouseEnter = () => {
    setContentVisible(true);
  };

  const handleMouseLeave = () => {
    setContentVisible(false);
  };

  const [showLogin, setShowLogin] = useState(true);
  const [activeButton, setActiveButton] = useState("beneficiary");

  const toggleForm = (buttonType) => {
    setShowLogin(!showLogin);
    setActiveButton(buttonType);
  };
  const handleLogin = () => {};

  const handleRegister = () => {};

  const mobilelogin = async (evt) => {
    evt.preventDefault();

    try {
      if (!mobile) {
        setOutput("Please Enter Mobile Number.");
        return;
      }

      let userDetails = {
        phone_no: mobile,
        user_type: "self",
      };

      const response = await axios.post(`${apiurl[0].apiUrl}website/self_login`,
        userDetails
      );

      if (response.data.msg !== "true") {
        setOutput(response.data.msg);

        setselfdata(response.data.data.otp);
        setselfdataid(response.data.data._id);
        secureLocalStorage.setItem("otptoken", response.data.data.token);
      } else {
      }
    } catch (error) {}
  };

  const otpverify = async (evt) => {
    evt.preventDefault();

    try {
      if (!otp) {
        setOutput("Please Enter Otp.");
        return;
      }

      if (selfdata !== otp) {
        setOutput("You Entered Incorrect Otp.");
        return;
      }

      let tokenn = secureLocalStorage.getItem("otptoken");
      const options = {
        headers: {
          token: tokenn,
        },
      };
      let userDetails = {
        _id: selfdataid,
        otp: otp,
      };

      const response = await axios
        .post(`${apiurl[0].apiUrl}website/verify_otp`, userDetails,options)
        .then((response) => {
          secureLocalStorage.setItem("otpid", response.data._id);

          toast.success(response.data.msg);

          setTimeout(() => {
            window.location.reload(Navigate("/dashboard2"));
          }, 3000);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {}
  };

  const handleoperatorlogin = (e) => {
    e.preventDefault();


    let tokenn = secureLocalStorage.getItem("operatortoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      email: operatoremail,
      password: operatorpassword,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/Operator_Login`, userdata,options)
      .then((response) => {
        secureLocalStorage.setItem("operatorid", response.data.data._id);
        secureLocalStorage.setItem("operatortoken", response.data.data.token);
        toast.success(response.data.msg);

        setTimeout(() => {
          window.location.reload(Navigate("/dashboard"));
        }, 3000);
      })
      .catch((error) => {
        setOutput("Incorrect Credentials");
        console.log("error", error);
      });
  }; 

  return (
    <div>
      <header
        style={{ marginBottom: "10px" }}
        className="site-header header-style-1 mobile-sider-drawer-menu header-full-width"
      >
        <div className="sticky-header main-bar-wraper  navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <div className="logo-header" style={{ height: "70px" }}>
                <a href="/">
                  <img
                    src="images/fc22.png"
                    style={{
                      height: "70px",
                      width: "70%",
                      marginLeft: "-15px",
                    }}
                    alt
                    className=""
                  />
                </a>
              </div>
              {/*Logo section start*/}
              {/* <div className="logo-header">
                <div className="logo-header-inner logo-header-one"> */}

              {/*Logo section End*/}
              {/* NAV Toggle Button */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggler collapsed"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>
              {/* MAIN Vav */}
              <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-start">
                <ul className=" nav navbar-nav">
                  <li className="">
                    <a href="/">Home</a>
                  </li>
                  <li class="has-child">
                    <a href="javascript:;">
                      Services
                      <i
                        style={{ fontSize: "17px" }}
                        class="fa fa-caret-down displl"
                      ></i>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="javascript:;">Railway Ticket </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">Tatkal Ticket</a>
                          </li>
                          <li>
                            <a href="#">Sleeper</a>
                          </li>
                          <li>
                            <a href="#">Second Sitting</a>
                          </li>
                          <li>
                            <a href="#">AC Ticket</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Insurance</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">First Party Insurance</a>
                          </li>
                          <li>
                            <a href="#">OD Policy</a>
                          </li>
                          <li>
                            <a href="#">Third Party Insurance</a>
                          </li>
                          <li>
                            <a href="#">With PA / Without PA</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Police Help</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">FIR</a>
                          </li>
                          <li>
                            <a href="#">Character Certificate</a>
                          </li>
                          <li>
                            <a href="#">PCC</a>
                          </li>
                          <li>
                            <a href="#">Lost Report</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Labour Card</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">New Registration </a>
                          </li>
                          <li>
                            <a href="#">Renewal </a>
                          </li>
                          <li>
                            <a href="#">Migration </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Pan Card</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">New Pan 49A</a>
                          </li>
                          <li>
                            <a href="#">Correction/Update</a>
                          </li>
                          <li>
                            <a href="#">Download Copy</a>
                          </li>
                          <li>
                            <a href="#">Reprint Order</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Online Form</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">Admission</a>
                          </li>
                          <li>
                            <a href="#">CTET</a>
                          </li>
                          <li>
                            <a href="#">SSC MTS</a>
                          </li>
                          <li>
                            <a href="#">UGC NET</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="javascript:;">Passport</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">Fresh Passport</a>
                          </li>
                          <li>
                            <a href="#">Tatkal Passport</a>
                          </li>
                          <li>
                            <a href="#">Renewal</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="javascript:;">EPFO</a>
                        <ul
                          class="sub-menu"
                          style={{
                            marginTop: "-100px",
                          }}
                        >
                          <li>
                            <a href="#">PF Withdrawal</a>
                          </li>
                          <li>
                            <a href="#">E- Kyc / Nomination</a>
                          </li>
                          <li>
                            <a href="#">MID Transfer</a>
                          </li>
                          <li>
                            <a href="#">UAN Activation</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="javascript:;">Many More</a>
                        <ul
                          class="sub-menu"
                          style={{
                            marginTop: "-410px",
                          }}
                        >
                          <li>
                            <a href="#">MSME</a>
                          </li>
                          <li>
                            <a href="#">Food License </a>
                          </li>
                          <li>
                            <a href="#">E-District Services</a>
                          </li>
                          <li>
                            <a href="#">Voter ID Card</a>
                          </li>
                          <li>
                            <a href="#">Eshram Card</a>
                          </li>
                          <li>
                            <a href="#">Ayushman Card</a>
                          </li>
                          <li>
                            <a href="#">Online Challan</a>
                          </li>
                          <li>
                            <a href="#">Vehicle Tax</a>
                          </li>
                          <li>
                            <a href="#">Vehicle Border Tax</a>
                          </li>
                          <li>
                            <a href="#">UDID Card</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="has-child">
                    <a href="javascript:;">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/egovernance">E-Governance</a>
                      </li>

                      <li>
                        <a href="/banking">Banking Services</a>
                      </li>
                      <li>
                        <a href="/payment">Payment Services</a>
                      </li>
                      <li>
                        <a href="/insurance">Insurance</a>
                      </li>
                      <li>
                        <a href="/elearning">E-Learning</a>
                      </li>
                      <li>
                        <a href="/tours">Tours & Travels</a>
                      </li>

                      <li>
                        <a href="/entertainment">Entertainment</a>
                      </li>
                      <li>
                        <a href="/earnmore">Earn More</a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="has-child">
                    <a href="/about">About Us</a>
                  </li> */}
                  <li className="has-child">
                    <a href="/contact">
                      Contact Us
                      <i
                        style={{ fontSize: "17px" }}
                        class="fa fa-caret-down displl"
                      ></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="mailto:help@cscwale.com" target="_blank">
                          {" "}
                          Email-id :- help@cscwale.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:8860474425">Mobile No.- +918860474425</a>
                      </li>
                      <li>
                        <a href="tel:9582115358">Mobile No.- +919582115358</a>
                      </li>
                    </ul>
                  </li>
                  {/* <div class="extra-nav header-2-nav">
                <div class="extra-cell"><a>
                <span style={{fontSize:'12px' , color:'#ffc107'}}>Email-id:-cscwale@gmail.com
                <br/>
                Mobile:-0001112223
                </span></a>
                </div>
              </div> */}
                  <li className="has-child">
                    <a href="javascript:;">
                      Registration
                      <i
                        style={{ fontSize: "17px" }}
                        class="fa fa-caret-down displl"
                      ></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/newregistration">New Registration</a>
                      </li>
                      <li>
                        <a href="/knowstatus">Know Registration Status</a>
                      </li>
                      {/* <li>
                        <a href="/continuereg">Continue Registration</a>
                      </li> */}
                      <li>
                        <a href="/howtoregister">Why Choose Us ?</a>
                      </li>
                    </ul>
                  </li>
                  &nbsp;
                  <li className="has-child ">
                  
                    <a href="#">
                      <button
                        style={{
                          background: "#032c6a",
                          color: "white",
                          width: "90px",
                          borderRadius: "15px",
                          height: "40px",
                        }}
                        className="  "
                      >
                        Login
                      </button>
                    </a>
                    <ul
                      style={{ width: "400px", marginLeft: "-260px" }}
                      className="sub-menu"
                    >
                      <li style={{ width: "", marginLeft: "" }}>
                        <a href="#">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <div className="sf-custom-tabs sf-custom-new aon-logon-sign-area p-3">
                                  <ul className="nav nav-tabs nav-table-cell">
                                    <li>
                                      <a
                                        data-toggle="tab"
                                        href="#Upcoming"
                                        className="active"
                                      >
                                        Self
                                      </a>
                                    </li>
                                    <li>
                                      <a data-toggle="tab" href="#Past">
                                        Operator
                                      </a>
                                    </li>
                                  </ul>

                                  <div className="tab-content">
                                    <div
                                      id="Upcoming"
                                      className="tab-pane active"
                                    >
                                      <div className="sf-tabs-content">
                                        <font style={{ color: "red" }}>
                                          {output}
                                        </font>

                                        <form onSubmit={mobilelogin}>
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <div className="aon-inputicon-box">
                                                  <input
                                                    value={mobile}
                                                    onChange={(e) =>
                                                      setmobile(e.target.value)
                                                    }
                                                    maxLength={"10"}
                                                    minLength={"10"}
                                                    className="form-control sf-form-control"
                                                    name="company_name"
                                                    type="tel"
                                                    placeholder="Enter Mobile Number"
                                                  />
                                                  <i className="aon-input-icon fa fa-user" />
                                                </div>
                                              </div>
                                            </div>

                                            <div className="col-md-12">
                                              <button
                                                type="submit"
                                                className="site-button w-100 clickksidebutton"
                                              >
                                                Submit{" "}
                                                <i className="feather-arrow-right" />{" "}
                                              </button>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                      <br />

                                      {selfdataid && (
                                        <div>
                                          {/* <>Otp - {selfdata}</> */}
                                          <br />
                                          <form onSubmit={otpverify}>
                                            <div className="row">
                                              <div className="col-md-12">
                                                <div className="form-group">
                                                  <div className="aon-inputicon-box">
                                                    <input
                                                      value={otp}
                                                      onChange={(e) =>
                                                        setotp(e.target.value)
                                                      }
                                                      maxLength={"4"}
                                                      minLength={"4"}
                                                      className="form-control sf-form-control"
                                                      name="company_name"
                                                      type="number"
                                                      placeholder="Enter Otp Here......"
                                                    />
                                                    <i className="aon-input-icon fa fa-user" />
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="col-md-12">
                                                <button
                                                  type="submit"
                                                  className="site-button w-100 clickksidebutton"
                                                >
                                                  Verify Otp{" "}
                                                  <i className="feather-arrow-right" />{" "}
                                                </button>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      )}
                                    </div>

                                    <div id="Past" className="tab-pane">
                                      <div className="sf-tabs-content">
                                        <font style={{ color: "red" }}>
                                          {output}
                                        </font>
                                        <form
                                          onSubmit={handleoperatorlogin}
                                          className="aon-login-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <div className="aon-inputicon-box">
                                                  <input
                                                    className="form-control sf-form-control"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter Email Here..."
                                                    value={operatoremail}
                                                    onChange={(e) => {
                                                      setoperatoremail(
                                                        e.target.value
                                                      );
                                                    }}
                                                  />
                                                  <i className="aon-input-icon fa fa-envelope-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <div className="aon-inputicon-box">
                                                  <input
                                                    value={operatorpassword}
                                                    onChange={(e) => {
                                                      setoperatorpassword(
                                                        e.target.value
                                                      );
                                                    }}
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
                                              <div className="aon-admin-heading ">
                                                <a
                                                  href="/forgotpassword"
                                                  className="clickdata"
                                                  style={{
                                                    color: "rgb(55 82 156)",
                                                  }}
                                                >
                                                  Forgot password ?
                                                </a>
                                              </div>
                                            </div>

                                            <div className="col-md-12">
                                              <button
                                                type="submit"
                                                className="site-button w-100 clickksidebutton"
                                              >
                                                Submit{" "}
                                                <i className="feather-arrow-right" />{" "}
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
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <div class="extra-nav header-2-nav">
                <div class="extra-cell">
                  <a href="/profile">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50px",
                      }}
                      src="images/pro-pic/pic4.jpg"
                    />
                  </a>
                  &nbsp;
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <Toaster />
    </div>
  );
};

export default Header;
