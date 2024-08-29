import React, { useEffect, useState } from "react";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Profile = () => {
  const [output, setOutput] = useState("");
  const [other_file1, setother_file1] = useState("");
  const [name, setname] = useState("");

  const [gender, setGender] = useState("");

  const [phone_no, setphone_no] = useState("");
  const [whatsapp_no, setwhatsapp_no] = useState("");

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
  const [profiledataa, setprofiledataa] = useState([]);
  let idd = secureLocalStorage.getItem("operatorid");

  let tokenn = secureLocalStorage.getItem("operatortoken");
  
  useEffect(() => {
    profiledata();
  }, [0]);

  const profiledata = () => {
    const data = {
      _id: idd,
    };

    const options = {
      headers: {
        token: tokenn,
      },
    };

    axios
      .post(`${apiurl[0].apiUrl}website/get_profile`, data, options)
      .then((res) => {
        setprofiledataa(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  const sumitprofilepic = (evt) => {
    evt.preventDefault();
    let operatoridd = secureLocalStorage.getItem("operatorid");

    const formdata = new FormData();

    formdata.append("_id", operatoridd);

    formdata.append("profile", other_file1);

    axios
      .post(`${apiurl[0].apiUrl}website/upload_profile`, formdata)
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {
        
      });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (!gender) {
        setOutput("Please Select Gender.");
        return;
      }

      if (!highest_qualification) {
        setOutput("Please select Qualification.");
        return;
      }

      let userDetails = new FormData();

      userDetails.append("_id", idd);
      userDetails.append("name", name ? name : "");
      userDetails.append("email", "");
      userDetails.append("phone_no", phone_no ? phone_no : "");
      userDetails.append("whatsapp_no", whatsapp_no ? whatsapp_no : "");
      userDetails.append("date_of_birth", date_of_birth ? date_of_birth : "");
      userDetails.append("gender", gender ? gender : "");
      userDetails.append(
        "highest_qualification",
        highest_qualification ? highest_qualification : ""
      );
      userDetails.append("house_no", house_no ? house_no : "");
      userDetails.append("street_no", street_no ? street_no : "");
      userDetails.append("area", area ? area : "");
      userDetails.append("city", city ? city : "");
      userDetails.append("state", state ? state : "");
      userDetails.append("district", district ? district : "");
      userDetails.append("pincode", pincode ? pincode : "");
      userDetails.append("aadhar_no", aadhar_no ? aadhar_no : "");
      userDetails.append("pan_card_no", pan_card_no ? pan_card_no : "");
      userDetails.append("aadhar_image", aadhar_image ? aadhar_image : "");
      userDetails.append(
        "pan_card_image",
        pan_card_image ? pan_card_image : ""
      );
      userDetails.append("home_image", home_image ? home_image : "");
      userDetails.append(
        "education_image",
        education_image ? education_image : ""
      );
      userDetails.append("user_type", "operator");

      let tokenn = secureLocalStorage.getItem("operatortoken");
      
      const options = {
        headers: {
          token: tokenn,
        },
      };
      const response = await axios.post(
        `${apiurl[0].apiUrl}website/update_profiledata`,
        userDetails,
        options
      );

      if (response.data.msg !== "true") {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <div className="page-wraper">
        {/* Header Start */}
        <Header2 />
        <Toaster />
        {/* Header End */}

        {/* Sidebar Holder */}
        <Navsidebar />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            <div className="aon-admin-heading">
              <h4>Edit Profile</h4>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="card aon-card">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-user" /> About me
                  </h4>
                </div>
                <div className="card-body aon-card-body">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="aon-staff-avtar">
                        <div className="aon-staff-avtar-header">
                          <div className="aon-pro-avtar-pic ">
                            <img
                              src={
                                `${apiurl[0].apiUrl}uploads/` +
                                profiledataa?.profile
                              }
                              alt=""
                            />

                            <button className="admin-button has-toltip">
                              <i className="fa fa-camera" />
                              <span className="header-toltip">
                                Upload Avtar
                              </span>
                              <input
                                onChange={(e) =>
                                  setother_file1(e.target.files[0])
                                }
                                type="file"
                                accept="image/*"
                                name="avtar"
                              />
                            </button>
                          </div>
                          <div className="aon-pro-cover-wrap">
                            <div className="aon-pro-cover-pic">
                              <img
                                style={{ height: "100%", width: "100%" }}
                                src="images/CSCWALE LOGO1.png"
                                alt=""
                              />
                            </div>
                            {/* <div className="admin-button-upload">
                              <span>Upload Cover Image</span>
                              <input
                                onChange={(e) =>
                                  setother_file1(e.target.files[0])
                                }
                                type="file"
                                accept="image/*"
                                name="avtar"
                              />
                            </div> */}
                          </div>
                        </div>
                        <button
                          onClick={sumitprofilepic}
                          className="site-button clickksidebutton"
                        >
                          Upload +
                        </button>
                        {/* <br /> */}
                        {/* <div className="aon-staff-avtar-footer">
                          <h4 className="aon-staff-avtar-title">
                            Upload Your Avatar
                          </h4>
                          <ul>
                            <li>
                              Min width and height: <span>600 x 600 px</span>
                            </li>
                            <li>
                              Max Upload Size: <span>512MB</span>
                            </li>
                            <li>
                              Extensions: <span>JPEG,PNG,GIF,PNG</span>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Upload Your Aadhar Card</label>
                        <div className="aon-inputicon-box">
                          {/* <img
                            src={`http://103.104.74.215:3099/uploads/${profiledataa?.aadhar_image}`}
                          /> */}
                          <input
                            className="form-control sf-form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setaadhar_image(e.target.files[0])}
                          />
                          {/* <i className="aon-input-icon fa fa-building-o" /> */}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Add Your Pan Card</label>
                        <div className="aon-inputicon-box">
                          {/* <img
                            src={`http://103.104.74.215:3099/uploads/${profiledataa?.pan_card_image}`}
                          /> */}
                          <input
                            className="form-control sf-form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setpan_card_image(e.target.files[0])
                            }
                          />
                          {/* <i className="aon-input-icon fa fa-building-o" /> */}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Add Your Self Photo with Shop or Home</label>
                        <div className="aon-inputicon-box">
                          {/* <img
                            src={`http://103.104.74.215:3099/uploads/${profiledataa?.home_image}`}
                          /> */}
                          <input
                            className="form-control sf-form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) => sethome_image(e.target.files[0])}
                          />
                          {/* <i className="aon-input-icon fa fa-building-o" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Add Your -Highest Education Certificate</label>
                        <div className="aon-inputicon-box">
                          {/* <img
                            src={`http://103.104.74.215:3099/uploads/${profiledataa?.education_image}`}
                          /> */}
                          <input
                            className="form-control sf-form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              seteducation_image(e.target.files[0])
                            }
                          />
                          {/* <i className="aon-input-icon fa fa-building-o" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Username</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.name}
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                name="name"
                                type="text"
                                className="form-control sf-form-control"
                              />
                              <i className="aon-input-icon fa fa-user" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-group">
                              <label>Select Highest Qualification</label>
                              <select
                                className="form-control sf-form-control"
                                form-control
                                sf-form-control
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
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>House Number</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.house_no}
                                className="form-control sf-form-control"
                                value={house_no}
                                onChange={(e) => sethouse_no(e.target.value)}
                                type="number"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Street Number</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.street_no}
                                className="form-control sf-form-control"
                                value={street_no}
                                onChange={(e) => setstreet_no(e.target.value)}
                                type="number"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Area</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.area}
                                className="form-control sf-form-control"
                                value={area}
                                onChange={(e) => setarea(e.target.value)}
                                type="text"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.city}
                                className="form-control sf-form-control"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                                type="text"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.state}
                                className="form-control sf-form-control"
                                value={state}
                                onChange={(e) => setstate(e.target.value)}
                                type="text"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>District</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.district}
                                className="form-control sf-form-control"
                                value={district}
                                onChange={(e) => setdistrict(e.target.value)}
                                type="text"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pincode</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.pincode}
                                className="form-control sf-form-control"
                                value={pincode}
                                onChange={(e) => setpincode(e.target.value)}
                                type="number"
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Mention your Aadhar Number</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.aadhar_no}
                                className="form-control sf-form-control"
                                maxLength={"12"}
                                minLength={"12"}
                                value={aadhar_no}
                                onChange={(e) => setaadhar_no(e.target.value)}
                                rows={8}
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Enter Pan Card Number</label>
                            <div className="aon-inputicon-box">
                              <input
                                placeholder={profiledataa?.pan_card_no}
                                className="form-control sf-form-control"
                                maxLength={"10"}
                                minLength={"10"}
                                value={pan_card_no}
                                onChange={(e) => setpan_card_no(e.target.value)}
                              />
                              <i className="aon-input-icon fa fa-building-o" />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6 breck-w1400">
                          <div class="form-group">
                            <label>Gender</label>
                            <div className="aon-inputicon-box">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card aon-card" id="aon-contact-panel">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-envelope" /> Contact Detail
                  </h4>
                </div>
                <div className="card-body aon-card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Mobile</label>
                        <div className="aon-inputicon-box">
                          <input
                            placeholder={profiledataa?.phone_no}
                            className="form-control sf-form-control"
                            maxLength={"10"}
                            minLength={"10"}
                            value={phone_no}
                            onChange={(e) => setphone_no(e.target.value)}
                            type="mobile"
                          />
                          <i className="aon-input-icon fa fa-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Whatsaap Number</label>
                        <div className="aon-inputicon-box">
                          <input
                            placeholder={profiledataa?.whatsapp_no}
                            className="form-control sf-form-control"
                            maxLength={"10"}
                            minLength={"10"}
                            value={whatsapp_no}
                            onChange={(e) => setwhatsapp_no(e.target.value)}
                            type="mobile"
                          />
                          <i className="aon-input-icon fa fa-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Date Of Birth</label>
                        <div className="aon-inputicon-box">
                          <input
                            className="form-control sf-form-control"
                            value={date_of_birth}
                            onChange={(e) => setdate_of_birth(e.target.value)}
                            type="date"
                          />
                          <i className="aon-input-icon fa fa-mobile" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card aon-card">
                <div className="card-body aon-card-body">
                  <div className="sf-upgrade-account-area">
                    <div className="sf-upgrade-top-area">
                      <div className="row">
                        <div className="col-xl-6">
                          <div id="clockdiv">
                            <div>
                              <span className="days">14</span>
                              <div className="smalltext">Days</div>
                            </div>
                            <div>
                              <span className="hours">23</span>
                              <div className="smalltext">Hours</div>
                            </div>
                            <div>
                              <span className="minutes">59</span>
                              <div className="smalltext">Minutes</div>
                            </div>
                            <div>
                              <span className="seconds">26</span>
                              <div className="smalltext">Seconds</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 text-right">
                          <h4 className="sf-upgrade-top-title">
                            Your Current Plan <span>Gold</span>
                          </h4>
                          <button className="admin-button sf-upgrade-btn">
                            Please Renew Your Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn admin-button clickksidebutton"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
