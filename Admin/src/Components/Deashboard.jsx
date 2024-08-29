import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import apiurl from "./Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Deashboard = () => {
  const [ayushmancard, setayushmancard] = useState();
  const [perdaydata, setperdaydata] = useState();

  useEffect(() => {
    userlist();
  }, [0]);

  let tokenn = secureLocalStorage.getItem("adminidtoken");
  const options = {
    headers: {
      token: tokenn,
    },
  };
  const userlist = () => {
    axios
      .get(`${apiurl[0].apiUrl}admin/get_all_form_data` ,options)
      .then((res) => {
        setayushmancard(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    perday();
  }, [0]);
 
  const perday = () => {
    axios
      .post(`${apiurl[0].apiUrl}admin/get_all_perday_data` ,options)
      .then((res) => {
        setperdaydata(res.data);
      })
      .catch((error) => {});
  };

  return (
    <>
      <Header />
      <section className="content dashboard">
        <div className="page-heading">
          <h1>DASHBOARD</h1>
        </div>
        <div className="page-body">
          {/* Infobox */}
          {/* Hover Zoom Effect */}
          <div className="block-header">{/* <h2>HOVER ZOOM EFFECT</h2> */}</div>
          <div className="row clearfix">
            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
              <Link to="#" style={{ cursor: "pointer" }}>
                <div
                  className="info-box infobox-type-2 bg-primary"
                  style={{ height: "120px" }}
                >
                  <div className="content">
                    <div className="text">
                      <h3>Today Total Document </h3>
                    </div>
                    <div className="btn btn-primary">
                      <h2>{perdaydata?.allPerDayData} </h2>
                    </div>

                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <Link to="#" style={{ cursor: "pointer" }}>
                <div
                  className="info-box infobox-type-2 bg-warning"
                  style={{ height: "120px" }}
                >
                  <div className="content">
                    <div className="text">
                      <h3>Total Document </h3>
                    </div>
                    <div className="btn btn-warning">
                      <h2>{ayushmancard?.allData} </h2>
                    </div>

                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <Link to="#" style={{ cursor: "pointer" }}>
                <div
                  className="info-box infobox-type-2 bg-danger"
                  style={{ height: "120px" }}
                >
                  <div className="content">
                    <div className="text">
                      <h3>Reject Document</h3>
                    </div>
                    <div className="btn btn-danger">
                      <h2>{ayushmancard?.allData} </h2>
                    </div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <Link to="#" style={{ cursor: "pointer" }}>
                <div
                  className="info-box infobox-type-2 bg-primary"
                  style={{ height: "120px" }}
                >
                  <div className="content">
                    <div className="text">
                      <h3>Pending Document</h3>
                    </div>
                    <div className="btn btn-primary">
                      <h2>{ayushmancard?.pendingData} </h2>
                    </div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={2158}
                      data-speed={1500}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <Link to="#" style={{ cursor: "pointer" }}>
                <div
                  className="info-box infobox-type-2 bg-success"
                  style={{ height: "120px" }}
                >
                  <div className="content">
                    <div className="text">
                      <h3>Approved Document</h3>
                    </div>
                    <div className="btn btn-success">
                      <h2>{ayushmancard?.approveData} </h2>
                    </div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={245}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/userloginotp" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-primary">
                  <div className="icon">
                    <i className="material-icons">person</i>
                  </div>
                  <div className="content">
                    <div className="text">All-Users-otp</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/userlogin" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-primary">
                  <div className="icon">
                    <i className="material-icons">person</i>
                  </div>
                  <div className="content">
                    <div className="text">All-Manager</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/alloperator" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-warning">
                  <div className="icon">
                    <i className="material-icons">group_add</i>
                  </div>
                  <div className="content">
                    <div className="text">All-Created Manager</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={2158}
                      data-speed={1500}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/admingetcontact" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-success">
                  <div className="icon">
                    <i className="material-icons">perm_phone_msg</i>
                  </div>
                  <div className="content">
                    <div className="text">Contact Data</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={245}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/admingetquestion" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-primary">
                  <div className="icon">
                    <i className="material-icons">videocam</i>
                  </div>
                  <div className="content">
                    <div className="text">Get All Question</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={348}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/admincreatesubadmin" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-success">
                  <div className="icon">
                    <i className="material-icons">person_add</i>
                  </div>
                  <div className="content">
                    <div className="text">Create Manager</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={143}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/support" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-danger">
                  <div className="icon">
                    <i className="material-icons">sms</i>
                  </div>
                  <div className="content">
                    <div className="text">Support</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={2158}
                      data-speed={1500}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/admingetquery" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-primary">
                  <div className="icon">
                    <i className="material-icons">assignment_ind</i>
                  </div>
                  <div className="content">
                    <div className="text">Query</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={2158}
                      data-speed={1500}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/addservices" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-success">
                  <div className="icon">
                    <i className="material-icons">wc</i>
                  </div>
                  <div className="content">
                    <div className="text">Add-Services</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={245}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <a to="/services" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-primary">
                  <div className="icon">
                    <i className="material-icons">payment</i>
                  </div>
                  <div className="content">
                    <div className="text">Services-List</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={143}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/paymentupdate" style={{ cursor: "pointer" }}>
                <div className="info-box infobox-type-2 bg-success">
                  <div className="icon">
                    <i className="material-icons">payment</i>
                  </div>
                  <div className="content">
                    <div className="text">Payment Rate</div>
                    <div
                      className="number count-to"
                      data-from={0}
                      data-to={143}
                      data-speed={1000}
                      data-fresh-interval={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <a href="report.html" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">rate_review</i></div>
              <div className="content">
                <div className="text">Report</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </a>
        </div> */}
          </div>
          <div className="row clearfix">
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <a href="review.html" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">star_border</i></div>
              <div className="content">
                <div className="text">My Review</div>
                <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </a>
        </div> */}
          </div>

          <div className="main-graph"></div>
        </div>
      </section>
    </>
  );
};

export default Deashboard;
