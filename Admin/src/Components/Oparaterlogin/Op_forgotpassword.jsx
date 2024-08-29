import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
const Op_forgotpassword = () => {
  const [output, setOutput] = useState("");
  const [adminemail, setadminemail] = useState("");
  const [adminpassword, setadminpassword] = useState("");

  const [otpp, setotp] = useState();

  const [otppp, setotpp] = useState();

  const [newpassword, setnewpassword] = useState("");

  const [repeatpassword, setrepeatpassword] = useState("");
  const otpsend = () => {
    if (!adminemail) {
      setOutput("Please Enter Your Registered Email-id");
      return;
    }
    const userData = {
      email: adminemail,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/send_otp`, userData)

      // "http://103.104.74.215:3099/subadmin/send_otp"
      .then((res) => {

        toast.success(res.data.msg);
        setotp(res.data.otp);
      })
      .catch((error) => {
        setOutput("Envalid Data Provide By You");
      });
  };

  const changepassword = (evt) => {
    evt.preventDefault();

    if (newpassword !== repeatpassword) {
      setOutput("Please Enter Same Data in Confirm & Newpassword ");
      return;
    }

    if (!otpp) {
      setOutput("Please Enter Otp.");
      return;
    }

    if (otppp != otpp) {
      setOutput("You Entered Incorrect Otp.");
      return;
    }

    const userData = {
      email: adminemail,
      password: newpassword,
      otp: otpp,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/forgot_password`, userData)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((error) => {
        setOutput("Invalid Data Provided By You");
      });
  };
  return (
    <>
      <Toaster />

      <header>
        <nav className="navbar navbar-default" style={{ height: "60px" }}>
          <div className="search-bar">
            <div className="search-icon">
              <i className="material-icons">search</i>
            </div>
            <input type="text" placeholder="Start typing..." />
            <div className="close-search js-close-search">
              <i className="material-icons">close</i>
            </div>
          </div>

          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <i className="material-icons">swap_vert</i>
              </button>
              <a
                href="javascript:void(0);"
                className="left-toggle-left-sidebar js-left-toggle-left-sidebar"
              >
                <i className="material-icons">menu</i>
              </a>

              <a className="navbar-brand" href="#">
                <span className="logo-minimized">
                  <img
                    style={{ width: "100%", height: "35px" }}
                    src="../../assets/images/avatars/cscwalelogo.png"
                    alt=""
                  />
                </span>
                <span className="logo img-fluid">
                  <img
                    style={{ width: "50%", height: "35px" }}
                    src="../../assets/images/avatars/cscwalelogo.png"
                    alt=""
                  />
                </span>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav"></ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown user-menu">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="User Avatar"
                    />
                    <span className="hidden-xs">Manager Pannel</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          className="col-lg-4 p-5"
          style={{ backgroundColor: "white", borderRadius: 20 }}
        >
          <h1>
            <b>Manager-Login</b>{" "}
            <Link style={{ fontSize: "15px", float: "right" }} to="/">
              Admin-Side
            </Link>{" "}
          </h1>
          <font style={{ color: "red" }}>{output}</font>

          <div className="form-group has-feedback">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Here....."
              name="email"
              onChange={(e) => {
                setadminemail(e.target.value);
              }}
              required
            />
            <span className="glyphicon glyphicon-phone form-control-feedback" />
          </div>

          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-xs-4 ">
              <button
                onClick={otpsend}
                type="submit"
                className="btn btn-primary btn-block btn-flat"
                style={{
                  borderRadius: 20,
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
          {otpp ? (
            <form onSubmit={changepassword}>
              <div class="card-body aon-card-body">
                {otpp}
                <div class="row">
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
                        {/* <i class="aon-input-icon fa fa-lock"></i> */}
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
                        {/* <i class="aon-input-icon fa fa-lock"></i> */}
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
                          onChange={(e) => setrepeatpassword(e.target.value)}
                          class="form-control sf-form-control"
                          name="company_name"
                          type="password"
                        />
                        {/* <i class="aon-input-icon fa fa-lock"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
                <p>Enter same password in both fields.</p>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
                style={{
                  borderRadius: 20,
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                Submit
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Op_forgotpassword;
