import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "../Header";
import apiurl from "../Oparaterlogin/config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Adminuserdetails = () => {
  const [pancard, setpancard] = useState();

  let id = secureLocalStorage.getItem("userdetails");

  useEffect(() => {
    deletepancard();
  });
  const deletepancard = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const Userdata = {
      _id: id,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/get_single_user`, Userdata ,options)
      .then((res) => {
        setpancard(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Header />

      <section className="content">
        <div className="page-heading">
          <h1>User Details</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Aayushman Card</li>
          </ol>
        </div>
        <div className="sf-provi-qform">
          <form style={{ marginLeft: "20px" }}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    disabled
                    placeholder={pancard?.name}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Application No.</label>
                  <input
                    disabled
                    placeholder={pancard?.application_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Area </label>
                  <input
                    disabled
                    placeholder={pancard?.area}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>City </label>
                  <input
                    disabled
                    placeholder={pancard?.city}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Date of Birth </label>
                  <input
                    disabled
                    placeholder={pancard?.date_of_birth}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>District </label>
                  <input
                    disabled
                    placeholder={pancard?.district}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Email </label>
                  <input
                    disabled
                    placeholder={pancard?.email}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Gender </label>
                  <input
                    disabled
                    placeholder={pancard?.gender}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Highest Qualification </label>
                  <input
                    disabled
                    placeholder={pancard?.highest_qualification}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>House No.</label>
                  <input
                    disabled
                    placeholder={pancard?.house_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Pancard No.</label>
                  <input
                    disabled
                    placeholder={pancard?.pan_card_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    disabled
                    placeholder={pancard?.password}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Phone No.</label>
                  <input
                    disabled
                    placeholder={pancard?.phone_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    disabled
                    placeholder={pancard?.pincode}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>State</label>
                  <input
                    disabled
                    placeholder={pancard?.state}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Street No.</label>
                  <input
                    disabled
                    placeholder={pancard?.street_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>User Type</label>
                  <input
                    disabled
                    placeholder={pancard?.user_type}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Aadhar No.</label>
                  <input
                    disabled
                    placeholder={pancard?.aadhar_no}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Aadhar Image</label>

                  <img
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/`+pancard?.aadhar_image}
                    height={300}
                    width={300}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Profile Image</label>

                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/`+pancard?.profile}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Pancard Image</label>

                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/`+pancard?.pan_card_image}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Education Image</label>

                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/`+pancard?.education_image}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Home Image</label>

                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/`+pancard?.home_image}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Adminuserdetails;
