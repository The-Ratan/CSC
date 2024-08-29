import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { GrServices } from "react-icons/gr";
import secureLocalStorage from "react-secure-storage";

const Header = () => {
  const Navigate = useNavigate();

  const logout = () => {
    secureLocalStorage.removeItem("adminid");
    secureLocalStorage.removeItem("adminidtoken");
    secureLocalStorage.removeItem("getsubadmingid");

    Navigate("/");
  };

  const userId = secureLocalStorage.getItem("adminid");

  const location = useLocation();

  const isProtectedPage = [
    "/deashboard",
    "/userloginotp",
    "/userlogin",
    "/alloperator",
    "/admingetcontact",
    "/admingetquestion",
    "/adminpancard",
    "/adminpancarddetails",
    "/adminvoteridcard",
    "/adminvotercarddetails",
    "/adminlabourcard",
    "/adminlabourdetails",
    "/adminudidcard",
    "/adminudidcarddetails",
    "/adminayushmancard",

    "/adminayushmancarddetails",
    "/admineshramcard",
    "/admineshramcarddetails",
    "/admincreatesubadmin",
    "/support",
    "/addservices",

    "/payment",

    "/profile",

    "/userlogin",
    "/userloginotp",

    "/adminsingleinsurance",
    "/adminsinglerailwayticket",
    "/adminsinglerenewal",
    "/adminsingletatkalpassport",
    "/adminsinglefreshpassport",
    "/adminsinglefoodlicense",
    "/adminsinglemsme",
    "/adminsingleotherform",
    "/adminsinglepancardcorrection",
    "/adminsingleupration",
    "/adminsingleaayushman",
    "/adminsingleaadhar",
    "/adminsinglelostreport",
    "/adminsinglefir",
    "/adminsinglepolice",
    "/adminsinglepfmidtransfer",
    "/adminsinglepfnomination",
    "/adminsinglepfkyc",
    "/adminsinglepfwithdraw",
    "/admisinglecast",
    "/adminsignledomicile",
    "/adminsingleincome",
    "/adminuprationcard",
    "/adminaayushmanaddress",
    "/adminaadharaddress",
    "/admininsurance",
    "/adminrailwayticket",
    "/admintatkalpassport",
    "/adminfreshpassport",
    "/adminfoodlicense",
    "/adminmsme",
    "/adminotherform",
    "/adminpancardcorrection",
    "/adminlostreport",
    "/adminfir",
    "/adminpoliceverification",
    "/adminpfmidtransfer",
    "/adminpfnomination",
    "/adminpfkyc",
    "/adminpfwithdraw",
    "/admincast",
    "/admindomicile",
    "/adminincome",
    "/adminuserdetails",

    "/listservices",

    "/services",
  ].includes(location.pathname);

  useEffect(() => {
    if (!userId && isProtectedPage) {
      Navigate("/");
    }
  }, [userId, isProtectedPage, Navigate]);

  return (
    <div className="manunav">
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
              </button> */}
              {/* <p
                style={{ cursor: "pointer" }}
                className="left-toggle-left-sidebar manubaricon"
              >
                <i className="material-icons">menu</i>
              </p> */}
              {/* Logo */}
              <Link className="navbar-brand" to="/deashboard">
                <span className="logo-minimized">
                  <img
                    style={{ width: "100%", height: "30px" }}
                    src="../../assets/images/avatars/cscwalelogo.png"
                    alt=""
                  />
                </span>
                <span className="logo img-fluid">
                  <img
                    style={{ width: "70%", height: "30px" }}
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
                      src="../../assets/images/avatars/face2.jpg"
                      alt="User Avatar"
                    />
                    <span className="hidden-xs">vijay admin</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">
                      <img
                        src="../../assets/images/avatars/face2.jpg"
                        alt="User Avatar"
                      />
                      <div className="user">
                        vijay admin
                        <div className="title">Admin</div>
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
                          <a>Profile</a>{" "}
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

      <aside className="sidebar sidebarmanu">
        <nav className="sidebar-nav">
          <ul className="metismenu">
            <li className="title">MAIN NAVIGATION</li>
            <li className="active">
              <Link to="/deashboard">
                <i className="material-icons">dashboard</i>
                <span className="nav-label"> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/addservices">
                <i className="material-icons">rate_review</i>
                <span className="nav-label">Add-Services</span>
              </Link>
            </li>

            <li>
              <Link to="/services">
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
              <Link to="/support">
                <i className="material-icons">record_voice_over</i>
                <span className="nav-label">Support</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/profile">
                <i className="material-icons">person</i>
                <span className="nav-label">Profile</span>
              </Link>

            </li> */}
            <li>
              <Link to="/payment">
                <i className="material-icons">payment</i>
                <span className="nav-label">Payment</span>
              </Link>
            </li>
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
                <span className="nav-label">  All-operator</span>
              </Link>
            </li>
            <li>
            <Link to="/userloginotp">
              <i className="material-icons">group_add</i>
              <span className="nav-label">Self Login User</span>
            </Link>
          </li>
            <li>
            <Link to="/alloperator">
              <i className="material-icons">group_add</i>
              <span className="nav-label">All-User</span>
            </Link>
          </li> */}

            <li>
              <Link to="/admingetquestion">
                <i className="material-icons">group_add</i>
                <span className="nav-label"> Get All-Questions</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Header;
