import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "./Oparaterlogin/config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Addservices = () => {
  const [output, setoutput] = useState("");
  const [adminpassword, setadminpassword] = useState("");

  const [adminemail, setadminemail] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [createdata, setcreatedata] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      email: adminemail,
      access: selectedServices,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/give_access`, userdata ,options)
      .then((response) => {
        setcreatedata(response.data.data);
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
        setoutput("Some Error Occurred, Maybe Invalid Request");
      });
  };

  const handleCheckboxChange = (servicename) => {
    setSelectedServices((prevServices) => {
      if (prevServices.includes(servicename)) {
        return prevServices.filter((service) => service !== servicename);
      } else {
        return [...prevServices, servicename];
      }
    });
  };

  return (
    <div>
      <Header />
      <Toaster />
      <div>
        <section className="content">
          <div className="page-heading">
            <h1>GIVE SERVICES ACCESS FOR MANAGER</h1>
            <ol className="breadcrumb">
              <li>
                <a to="#">Dashboard</a>
              </li>
              <li className="active">
                <a href="#">Profile</a>
              </li>
            </ol>
          </div>
          <div className="page-body">
            <div className="row justify-content-center clearfix">
              {/* User Image */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md-12 col-lg-12">
                <form onSubmit={handlesubmit} className="form-horizontal">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="active">
                      <a href="#" role="tab" data-toggle="tab">
                        <i className="fa fa-bars m-r-5" />
                        ENTER DETAILS
                      </a>
                    </li>
                    <li></li>
                  </ul>
                  <div className="tab-content">
                    {/* General Info */}
                    <div className="active tab-pane fade in" id="generalinfo">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          {" "}
                          OPERATOR EMAIL
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            required
                            onChange={(e) => {
                              setadminemail(e.target.value);
                            }}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          ACCESS SERVICES
                        </label>
                        <br />
                        <br />

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pan Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("pancard")}
                            checked={selectedServices.includes("pancard")}
                          />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          {" "}
                          &nbsp;&nbsp;&nbsp;Udid Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("udidcard")}
                            checked={selectedServices.includes("udidcard")}
                          />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Eshram Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("eshramcard")}
                            checked={selectedServices.includes("eshramcard")}
                          />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Ayushman Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("ayushmancard")
                            }
                            checked={selectedServices.includes("ayushmancard")}
                          />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;VoterId Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("votercard")}
                            checked={selectedServices.includes("votercard")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Labour Card
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("labourcard")}
                            checked={selectedServices.includes("labourcard")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Cast
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("cast")}
                            checked={selectedServices.includes("cast")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Domicile
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("domicile")}
                            checked={selectedServices.includes("domicile")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pfwithdrawal
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("pfwithdrawal")
                            }
                            checked={selectedServices.includes("pfwithdrawal")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pfkyc
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("pfkyc")}
                            checked={selectedServices.includes("pfkyc")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pfnomination
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("pfnomination")
                            }
                            checked={selectedServices.includes("pfnomination")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pfmidtransfer
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("pfmidtransfer")
                            }
                            checked={selectedServices.includes("pfmidtransfer")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Police Verification
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("policeverification")
                            }
                            checked={selectedServices.includes(
                              "policeverification"
                            )}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Income
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("income")}
                            checked={selectedServices.includes("income")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Fir
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("fir")}
                            checked={selectedServices.includes("fir")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Lost Report
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("lostreport")}
                            checked={selectedServices.includes("lostreport")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Aadhar Address
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("aadharaddress")
                            }
                            checked={selectedServices.includes("aadharaddress")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Ayushman Address
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("ayushmanaddress")
                            }
                            checked={selectedServices.includes(
                              "ayushmanaddress"
                            )}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pp Rationcard
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("uprationcard")
                            }
                            checked={selectedServices.includes("uprationcard")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Pancard Correction
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("pancardcorrection")
                            }
                            checked={selectedServices.includes(
                              "pancardcorrection"
                            )}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Otherform
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("otherform")}
                            checked={selectedServices.includes("otherform")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Msme
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("msme")}
                            checked={selectedServices.includes("msme")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Food License
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("foodlicense")}
                            checked={selectedServices.includes("foodlicense")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Fresh Passport
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("freshpassport")
                            }
                            checked={selectedServices.includes("freshpassport")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Tatkal Passport
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("tatkalpassport")
                            }
                            checked={selectedServices.includes(
                              "tatkalpassport"
                            )}
                          />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Renewal Passport
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("renewelpassport")
                            }
                            checked={selectedServices.includes(
                              "renewelpassport"
                            )}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Railway Ticket
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() =>
                              handleCheckboxChange("railwayticket")
                            }
                            checked={selectedServices.includes("railwayticket")}
                          />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                          &nbsp;&nbsp;&nbsp;Insurance
                          <input
                            type="checkbox"
                            className="form-control"
                            name="country"
                            onChange={() => handleCheckboxChange("insurance")}
                            checked={selectedServices.includes("insurance")}
                          />
                        </div>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-danger">
                        {selectedServices}
                      </button>
                      <div className="text-center">
                        <button type="submit" className="btn btn-success">
                          Give Access
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Addservices;
