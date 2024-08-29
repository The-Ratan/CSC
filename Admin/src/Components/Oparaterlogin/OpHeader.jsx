import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const OpHeader = () => {
  const Navigate = useNavigate();

  const logout = () => {
    secureLocalStorage.removeItem("subadminid");
    secureLocalStorage.removeItem("subadminidtoken");
    secureLocalStorage.removeItem("subadminidemail");
    Navigate("/oplogin");
  };

  const userId = secureLocalStorage.getItem("subadminid");

  const location = useLocation();

  const isProtectedPage = [
    "/opayushmandetails",
    "/opvoterdetails",
    "/oplabourdetails",
    "/opeshramdetails",
    "/opudiddetails",
    "/oppandetails",
    "/opinsurance",
    "/oprailwayticket",
    "/oprenewal",
    "/optatkalpassport",
    "/opfreshpassport",
    "/opfoodlicense",
    "/opmsme",
    "/opotherform",
    "/oppancardcorrection",
    "/opupration",
    "/opayusmanaddress",
    "/opaadharaddress",
    "/oplostreport",
    "/opfir",
    "/oppoliceverification",
    "/opmidtransfer",
    "/oppfnomination",
    "/oppfkyc",
    "/oppfwithdraw",
    "/opcast",
    "/opdomicile",
    "/opincomedetails",
    "/opservicelistinsurance",
    "/opservicelistrailwayticket",
    "/opservicelistrenewal",
    "/opservicelisttatkalpassport",
    "/opservicelistfreshpassport",
    "/opservicelistfoodlicense",
    "/opservicelistmsme",
    "/opservicelistotherform",
    "/opservicelistpancardcorrection",
    "/opservicelistupration",
    "/opservicelistaayusman",
    "/opservicelistaadharaddress",
    "/opservicelistlostreport",
    "/opservicelistfir",
    "/opservicelistpoliceverification",
    "/opservicelistpfmidtransfer",
    "/opservicelistpfnomination",
    "/opservicelistpfkyc",
    "/opservicelistpfwithdraw",
    "/opservicelistcast",
    "/opservicelistdomicile",
    "/opservicelistincome",
    "/opservicelistudid",
    "/opservicelistlabour",
    "/opservicelistayushman",
    "/opservicelisteshram",

    "/opservicelistpancard",
    "/opsupport",
    "/oplistservices",
    "/opservices",
    "/opprofile",
    "/opdeashboard",
  ].includes(location.pathname);

  useEffect(() => {
    if (!userId && isProtectedPage) {
      Navigate("/oplogin");
    }
  }, [userId, isProtectedPage, Navigate]);

  return (
    <div>
      <div>
        <header>
          <nav className="navbar navbar-default">
            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-icon">
                <i className="material-icons">search</i>
              </div>
              <input type="text" placeholder="Start typing..." />
              <div className="close-search js-close-search">
                <i className="material-icons">close</i>
              </div>
            </div>
            {/* #END# Search Bar */}
            <div className="container-fluid">
              <div className="navbar-header">
                {/* <button
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
                </a> */}
                {/* Logo */}
                <Link className="navbar-brand" to="/opdeashboard">
                  <span className="logo-minimized">
                    <img
                      style={{ width: "100%", height: "30px" }}
                      src="../../assets/images/avatars/cscwalelogo.png"
                      alt=""
                    />
                  </span>
                  <span className="logo img-fluid">
                    <img
                      style={{ width: "50%", height: "30px" }}
                      src="../../assets/images/avatars/cscwalelogo.png"
                      alt=""
                    />
                  </span>
                </Link>
                {/* #END# Logo */}
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  {/* <li>
                    <a href="javascript:void(0);" className="toggle-left-sidebar js-toggle-left-sidebar">
                      <i className="material-icons">menu</i>
                    </a>
                  </li> */}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  {/* #END# Tasks */}
                  {/* User Menu */}
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
                      <span className="hidden-xs">raj manager</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">
                        <img
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="User Avatar"
                        />
                        <div className="user">
                          raj manager
                          <div className="title">Manager</div>
                        </div>
                      </li>
                      <li className="body">
                        <ul>
                          {/*    <li>
                              <a href="user_profile.html">
                                  <i class="material-icons">account_circle</i> Profile
                              </a>
                          </li> */}
                          <li>
                            {/* <a href="change_password.html">
                          <i className="material-icons">lock_open</i> Change Password
                        </a> */}
                          </li>
                        </ul>
                      </li>
                      <li className="footer">
                        <div className="row clearfix">
                          <div className="col-xs-5" style={{ opacity: "0" }}>
                            <a
                              href="#"
                              className="btn btn-default btn-sm btn-block"
                            >
                              Log Off
                            </a>
                          </div>
                          <div className="col-xs-2" />
                          <div className="col-xs-5">
                            <a
                              onClick={logout}
                              className="btn btn-default btn-sm btn-block"
                            >
                              Log Out
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* #END# User Menu */}
                  {/*  <li class="pull-right">
              <a href="javascript:void(0);" class="js-right-sidebar" data-close="true">
                  <i class="material-icons">more_vert</i>
              </a>
          </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul className="metismenu">
              <li className="title">MAIN NAVIGATION</li>
              <li className="active">
                <Link to="/opdeashboard">
                  <i className="material-icons">dashboard</i>
                  <span className="nav-label"> Dashboards</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/opaddservices">
                  <i className="material-icons">rate_review</i>
                  <span className="nav-label">Add-Services</span>
                </Link>
              </li> */}

              <li>
                <Link to="/opservices">
                  <i className="material-icons">rate_review</i>
                  <span className="nav-label">List-Services</span>
                </Link>
              </li>

              {/* <li>
            <Link to="set_rate.html">
              <i className="material-icons">payment</i>
              <span className="nav-label">Set Rate</span>
            </Link>

          </li> */}
              <li>
                <Link to="/opsupport">
                  <i className="material-icons">record_voice_over</i>
                  <span className="nav-label">Support</span>
                </Link>
              </li>
              <li>
                <Link to="/opprofile">
                  <i className="material-icons">person</i>
                  <span className="nav-label">Profile</span>
                </Link>
              </li>
              {/* <li>
            <Link to="payment.html" >
              <i className="material-icons">payment</i>
              <span className="nav-label">Payment</span>
            </Link>

          </li> */}
              {/* <li>
            <Link to="report.html" >
              <i className="material-icons">rate_review</i>
              <span className="nav-label">Report</span>
            </Link>

          </li> */}
              {/* <li>
            <Link to="review.html" >
              <i className="material-icons">star_border</i>
              <span className="nav-label">My Review</span>
            </Link>

          </li> */}
              {/* <li>
            <Link to="earing.html" >
              <i className="material-icons">payment</i>
              <span className="nav-label">Earning</span>
            </Link>

          </li> */}
              {/* <li>
            <Link to="/userlogin">
              <i className="material-icons">group_add</i>
              <span className="nav-label">All User</span>
            </Link>
          </li> */}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default OpHeader;
