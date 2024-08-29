import React, { useEffect, useState } from "react";
import "./header2.css";
import { Link, Navigate, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import securesecureLocalStorage from "react-secure-storage";
import apiurl from "./config";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const Header3 = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profiledataa, setprofiledataa] = useState([]);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };
  const data = [
    { id: 1, name: "John", amount: 50 },
    { id: 2, name: "Doe", amount: 30 },
    // ... more data
  ];

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Name" },
    { dataField: "amount", text: "Amount" },
    // ... more columns
  ];

  const [isWelcomeVisible, setWelcomeVisible] = useState(false);
  const [isWelcomeVisiblerefresh, setWelcomeVisiblerefresh] = useState(false);
  const [isWelcomeVisiblecontact, setWelcomeVisiblecontact] = useState(false);

  const handleMouseEntercontact = () => {
    setWelcomeVisiblecontact(true);
  };

  const handleMouseLeavecontact = () => {
    setWelcomeVisiblecontact(false);
  };

  const handleMouseEnterrefresh = () => {
    setWelcomeVisiblerefresh(true);
  };

  const handleMouseLeaverefresh = () => {
    setWelcomeVisiblerefresh(false);
  };

  const handleMouseEnter = () => {
    setWelcomeVisible(true);
  };

  const handleMouseLeave = () => {
    setWelcomeVisible(false);
  };

  const handleReset = (event) => {
    const form = document.getElementById("rechargeForm");
    if (form) {
      form.reset();
    }
  };

  const handleSearch = (event) => {
    // Implement your search logic here
  };
  //  const userId = securesecureLocalStorage.getItem("operatorid");
  //  const location = useLocation();
  //  const isProtectedPage = [
  //   "/dashboard2",
  //   "/document2",
  //   "/profile",
  //   "/regform2",
  //   "/allservices2",
  //   "/myservice2",

  //   "/driver2",
  //   "/document2",

  // ].includes(location.pathname);

  // if (!userId && isProtectedPage) {
  //   return <Navigate to="/" />;
  // }

  const logout = () => {
    secureLocalStorage.removeItem("otpid");
    secureLocalStorage.removeItem("otptoken");
    window.location.reload(navigate("/"));
  };

  let [showsearch, setshowsearch] = useState([]);

  let [searchKey, setSearchKey] = useState("");

  const Navigate = useNavigate();

  let searchvalue = (e) => {
    setSearchKey(e.target.value);

    axios
      .post(`${apiurl[0].apiUrl}website/get_service`, {
        search_key: e.target.value,
      })
      .then((res) => {
        setshowsearch(res.data.data);
      });
  };

  let videovalue = (video_value) => {
    securesecureLocalStorage.setItem("video_value", video_value);
    // Navigate(`/searchdata`);
  };

  let btnvideovalue = (e) => {
    e.preventDefault();
    securesecureLocalStorage.setItem("video_value", searchKey);
    Navigate(`/searchdata`);
  };

  let idd = secureLocalStorage.getItem("otpid");
  useEffect(() => {
    profiledata();
  }, [0]);

  let tokenn = secureLocalStorage.getItem("otptoken");
  const options = {
    headers: {
      token: tokenn,
    },
  };
  const profiledata = () => {
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/get_profile`, data, options)
      .then((res) => {
        setprofiledataa(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const userId = secureLocalStorage.getItem("otpid");

  const location = useLocation();

  const isProtectedPage = [
    "/dashboard2",
    "/pancardform1",
    "/voteridcard1",
    "/labourcard1",
    "/udidcard1",
    "/eshramcard1",
    "/aayushmancard1",
    "/profile2",
    "/regform",
    "/allservices2",
    "/myservice",
    "/cscrecharge",
    "/list2",
    "/recharge",
    "/driver",
    "/mybooking",
    "/upgradeaccount",
    "/document2",
    "/other1",
    "/msme1",
    "/foodlicense1",
    "/tatkalpassport1",
    "/freshpassport1",
    "/renewal1",
    "/railwayticket1",
    "/insurance1",
    "/pancardform1",
    "/voteridcard1",
    "/listdetails2",
    "/labourcard1",
    "/udidcard1",
    "/uprationcard1",
    "/aadharcard1",
    "/policeverification1",
    "/fir1",
    "/lostreport1",
    "/pfwithdraw1",
    "/pfkyc1",
    "/pfnomination1",
    "/midtransfer1",
    "/income1",
    "/domicile1",
    "/cast1",
    "/aayushmancardaddresschange1",
    "/eshramcard1",
    "/aayushmancard1",
    "/list2",
  ].includes(location.pathname);

  useEffect(() => {
    if (!userId && isProtectedPage) {
      navigate("/");
    }
  }, [userId, isProtectedPage, navigate]);

  const reloadd = () => {
    window.location.reload();
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
              {/*Logo section start*/}
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <a href="/dashboard2">
                    {/* <img
                      src="images/fc22.png"
                      style={{
                        height: "60px",
                        width: "70%",
                        marginLeft: "-15px",
                      }}
                      alt
                      className=""
                    /> */}

                    <img
                      src="images/fc22.png"
                      className="mCS_img_loaded"
                      style={{
                        height: "75px",
                        width: "70%",
                        marginLeft: "-20px",
                      }}
                    />
                  </a>
                </div>
              </div>

              <div
                className="logo-header displayy"
                style={{ width: "0px", color: "rgb(3, 44, 106)" }}
              >
                <div className="logo-header-inner logo-header-one">
                  {/* <a id="sidebarCollapse" onClick={handleSidebarToggle}>
        <span
                      class="fa fa-reorder"
                    ></span>
         
        </a> */}
                </div>
              </div>

              <div className="header-left">
                <div className="header-widget">
                  <div className="aon-admin-search">
                    <input
                      onChange={searchvalue}
                      className="form-control sf-form-control displl"
                      name="company_name"
                      type="text"
                      placeholder="Search"
                    />
                    <button
                      onClick={btnvideovalue}
                      className="admin-search-btn"
                    >
                      <i className="fs-input-icon feather-search"></i>
                    </button>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      paddingLeft: "12px",
                      background: "rgb(189 191 197)",
                    }}
                  >
                    {showsearch?.slice(0, 6).map((items) => {
                      return (
                        <div>
                          <a href="/allservices2">
                            <p
                              style={{
                                color: "black",
                                fontSize: "20px",
                                marginRight: "20px",
                              }}
                              className="dropdown-item"
                              onClick={() => videovalue(items?.service)}
                            >
                              {/* <img style={{height:'50px' , width:'50px' , borderRadius:'50px'}} src={`${apiurl[0].apiUrl}uploads/`+ items?.image} />  */}
                              &nbsp;&nbsp;{items?.service?.slice(0, 12)}
                            </p>
                          </a>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* <div class="header-left" style={{marginLeft:'15px'}}>
                        
                      
                        
                        <div class="header-widget ">
                            <div class="aon-admin-search ">
                                <input class="form-control sf-form-control" name="company_name" type="text" placeholder="Search"/>
                                <button class="admin-search-btn"><i class="fs-input-icon feather-search"></i></button>
                            </div>
                        </div>
                        
                    </div>      */}

              <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-start">
                <ul className=" nav navbar-nav"></ul>
              </div>

              <div className="header-right">
                <div className="header-menu" style={{ marginRight: "0px" }}>
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
                </div>
                <ul className="header-widget-wrap">
                  <li
                    onMouseEnter={handleMouseEnterrefresh}
                    onMouseLeave={handleMouseLeaverefresh}
                    className="header-widget active"
                  >
                    <div
                      className="aon-admin-messange sf-toogle-btn"
                      style={{ background: "white" }}
                    >
                      <a href="#">
                        {/* <span className="feather-user-pic"> */}
                        <img
                          src="images/contact-us/images2.jpeg"
                          alt=""
                          style={{
                            height: "55%",
                            marginBottom: "13px",
                            background: "none",
                          }}
                        />
                        {/* </span> */}
                      </a>
                    </div>

                    {/* <div className="aon-admin-messange sf-toogle-btn">
            <a href="#">
            <span className="feather-user-pic">
              <img src="images/contact-us/images.jpeg" alt="" style={{height:'44px'}} />
            </span>
            </a>
          </div> */}
                    {isWelcomeVisiblerefresh && (
                      <div
                        style={{ width: "100px" }}
                        className="ws-toggle-popup popup-tabs-wrap-section user-welcome-area"
                      >
                        <ul className="" style={{ width: "100px" }}>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a onClick={reloadd} href="#">
                              Refresh
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={handleMouseEntercontact}
                    onMouseLeave={handleMouseLeavecontact}
                    className="header-widget active"
                  >
                    <div className="aon-admin-messange sf-toogle-btn">
                      <a href="#">
                        {/* <span
                          className="feather-user-pic"
                          style={{ background: "none", overflow: "" }}
                        > */}
                        <img
                          style={{ height: "40%", marginBottom: "13px" }}
                          src="images/contact-us/3.png"
                          alt=""
                        />
                        {/* </span> */}
                      </a>
                    </div>
                    {/* <div className="aon-admin-messange sf-toogle-btn">
            <a href="#">
            <span className="feather-user-pic" style={{background:'none' , overflow:''}}>
              <img src="images/contact-us/3.png" alt="" />
            </span>
            </a>
          </div> */}
                    {isWelcomeVisiblecontact && (
                      <div className="ws-toggle-popup popup-tabs-wrap-section user-welcome-area">
                        <ul
                          className="user-welcome-list"
                          style={{ width: "500px" }}
                        >
                          <li>
                            <a href="mailto:help@cscwale.com" target="_blank">
                              {" "}
                              Email-id :- help@cscwale.com
                            </a>
                          </li>

                          <li>
                            <a href="tel:8860474425">
                              Mobile No.- +918860474425
                            </a>
                          </li>
                          <li>
                            <a href="tel:9582115358">
                              Mobile No.- +919582115358
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li
                    className="header-widget active"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="aon-admin-messange sf-toogle-btn">
                      {/* <span className="feather-user-pic"> */}
                      {/* <span> */}
                      {profiledataa?.profile ? (
                        <img
                          style={{
                            borderRadius: "50px",
                            height: "55%",
                            width: "50%",
                            marginBottom: "10px",
                          }}
                          src={
                            `${apiurl[0].apiUrl}uploads/` +
                            profiledataa?.profile
                          }
                          alt=""
                        />
                      ) : (
                        <img
                          style={{
                            borderRadius: "50px",
                            height: "55%",
                            width: "50%",
                            marginBottom: "10px",
                          }}
                          src="images/contact-us/r-img2.png"
                          alt=""
                        />
                      )}
                      {/* </span> */}
                    </div>
                    {isWelcomeVisible && (
                      <div className="ws-toggle-popup popup-tabs-wrap-section user-welcome-area">
                        <ul className="user-welcome-list">
                          <li>
                            <strong>
                              Welcome ,{" "}
                              <span className="site-text-primary">
                                Cscwale id-14002
                              </span>
                            </strong>
                          </li>
                          <li>
                            <a href="/profile2">
                              <i className="feather-sliders" /> Profile Detail
                            </a>
                          </li>

                          <li>
                            <a href="/list2">
                              <i className="feather-file" /> Upload Document
                            </a>
                          </li>
                          <li>
                            <a onClick={logout}>
                              <i className="feather-log-out" /> Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header3;
