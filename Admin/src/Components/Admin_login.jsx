import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import apiurl from "./Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Admin_login = () => {
  const [output, setOutput] = useState("");
  const [adminemail, setadminemail] = useState("");
  const [adminpassword, setadminpassword] = useState("");
  const Navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const userdata = {
      email: adminemail,
      password: adminpassword,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/admin_login`, userdata)
      .then((response) => {
        secureLocalStorage.setItem("adminid", response.data.data._id);
        secureLocalStorage.setItem("adminidtoken", response.data.data.token);

        Navigate("/deashboard");
      })
      .catch((error) => {
        setOutput("Invalid Email & Password.");
        console.log("error", error);
      });
  };
  return (
    <>
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
              {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                  <i className="material-icons">swap_vert</i>
                </button> */}
              {/* <a href="javascript:void(0);" className="left-toggle-left-sidebar js-left-toggle-left-sidebar">
                  <i className="material-icons">menu</i>
                </a> */}

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
                    {/* <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Avatar" /> */}
                    <span className="hidden-xs">Admin Panel</span>
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
            <b>Admin-Login</b>{" "}
            <Link style={{ fontSize: "15px", float: "right" }} to="/oplogin">
              Manager-Side
            </Link>{" "}
          </h1>
          <font style={{ color: "red" }}>{output}</font>
          <form className="p-5" id="frmSignin" onSubmit={handlesubmit}>
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  setadminemail(e.target.value);
                }}
                required
              />
              <span className="glyphicon glyphicon-phone form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setadminpassword(e.target.value);
                }}
                required
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-xs-4 ">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                  style={{
                    borderRadius: 20,
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin_login;
