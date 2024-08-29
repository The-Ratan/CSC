import React, { useEffect, useState } from "react";

import Navsidebar2 from "./Navsidebar2";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Header3 from "./Header3";
import { useNavigate } from "react-router-dom";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Profile2 = () => {
  const [output, setOutput] = useState("");
  let [loaderstatus, setloaderstatus] = useState(true);
  let [simbolstatus, setsimbolstatusstatus] = useState(true);
  let [errorstatus, seterrorstatus] = useState(true);
  const [other_file1, setother_file1] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [gender, setGender] = useState("");
 
  const [whatsapp_no, setwhatsapp_no] = useState("");
  const [phone_no, setphone_no] = useState("");
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
  const Navigate = useNavigate();

  const [profiledataa, setprofiledataa] = useState([]);
  let idd = secureLocalStorage.getItem("otpid");

  useEffect(() => {
    profiledata();
  },[0]);

  const profiledata = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/get_profile`, data ,options)
      .then((res) => {
        console.log("rssradasd",res)
        setprofiledataa(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };

    try {
      let userDetails = new FormData();
      userDetails.append("_id", idd);
      userDetails.append("name", name);
      userDetails.append("email", email);
      userDetails.append("phone_no", phone_no);
      userDetails.append("whatsapp_no", whatsapp_no);

      
      userDetails.append("date_of_birth", date_of_birth);
      userDetails.append("gender", gender);
      userDetails.append("highest_qualification", highest_qualification);
      userDetails.append("house_no", house_no);
      userDetails.append("street_no", street_no);
      userDetails.append("area", area);
      userDetails.append("city", city);
      userDetails.append("state", state);
      userDetails.append("district", district);
      userDetails.append("pincode", pincode);
      userDetails.append("aadhar_no", aadhar_no);
      userDetails.append("pan_card_no", pan_card_no);
      userDetails.append("aadhar_image", aadhar_image);
      userDetails.append("pan_card_image", pan_card_image);
      userDetails.append("home_image", home_image);
      userDetails.append("education_image", education_image);
      userDetails.append("user_type", "self");

      const response = await axios.post(
        `${apiurl[0].apiUrl}website/update_selflogin_data`,
        userDetails ,options
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


  const sumitprofilepic = (evt) => {
    evt.preventDefault();


    let tokenn = secureLocalStorage.getItem("otpetoken");
    // const options = {
    //   headers: {
    //     token: tokenn,
    //   },
    // };
    const formdata = new FormData();

    formdata.append("_id", idd);

    formdata.append("profile", other_file1);

    axios
      .post(`${apiurl[0].apiUrl}website/upload_profile`, formdata )
      .then((response) => {
        
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div className="page-wraper">
        {/* Header Start */}
        <Header3 />
        <Toaster />
        {/* Header End */}

        {/* Sidebar Holder */}
        <Navsidebar2 />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            <div className="aon-admin-heading">
              <h4>Edit Profile</h4>
            </div>

            <div className="col-xl-12">
                      <div className="aon-staff-avtar">
                        <div className="aon-staff-avtar-header">
                          <div className="aon-pro-avtar-pic ">
                            <img src={
                                `${apiurl[0].apiUrl}uploads/` + profiledataa?.profile
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
                                style={{height:'100%' , width:'100%'}}
                                src='images/CSCWALE LOGO1.png'
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

            <div className="sf-provi-qform">
              <font style={{ color: "red" }}>{output}</font>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        name="name"
                        placeholder={profiledataa?.name}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        placeholder={profiledataa?.email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        placeholder={profiledataa?.phone_no}
                        maxLength={"10"}
                        minLength={"10"}
                        value={phone_no}
                        onChange={(e) => setphone_no(e.target.value)}
                        type="mobile"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Whatsaap Number </label>
                      <input
                        placeholder={profiledataa?.whatsapp_no}
                        maxLength={"10"}
                        minLength={"10"}
                        value={whatsapp_no}
                        onChange={(e) => setwhatsapp_no(e.target.value)}
                        type="mobile"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        value={date_of_birth}
                        onChange={(e) => setdate_of_birth(e.target.value)}
                        type="date"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Gender</label>
                      <div class="aon-inputicon-box">
                        <div class="radio-inline-box sf-radio-check-row">
                          <div class="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
                            <input
                              type="radio"
                              id="male"
                              value="male"
                              checked={gender === "male"}
                              onChange={(e) => setGender(e.target.value)}
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
                            />
                            <label htmlFor="female">Female</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Select Highest Qualification</label>
                      <select
                        className="form-control"
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

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>House Number</label>
                      <input
                        placeholder={profiledataa?.house_no}
                        value={house_no}
                        onChange={(e) => sethouse_no(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Street Number</label>
                      <input
                        placeholder={profiledataa?.street_no}
                        value={street_no}
                        onChange={(e) => setstreet_no(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Area</label>
                      <input
                        placeholder={profiledataa?.area}
                        value={area}
                        onChange={(e) => setarea(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        placeholder={profiledataa?.city}
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        placeholder={profiledataa?.state}
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>District</label>
                      <input
                        placeholder={profiledataa?.district}
                        value={district}
                        onChange={(e) => setdistrict(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        placeholder={profiledataa?.pincode}
                        value={pincode}
                        onChange={(e) => setpincode(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <h4>Category</h4>
                    <div className="aon-inputicon-box"></div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Mention your Aadhar Number</label>
                      <input
                        placeholder={profiledataa?.aadhar_no}
                        maxLength={"12"}
                        minLength={"12"}
                        value={aadhar_no}
                        onChange={(e) => setaadhar_no(e.target.value)}
                        rows={8}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Enter Pan Card Number</label>
                      <input
                        placeholder={profiledataa?.pan_card_no}
                        maxLength={"10"}
                        minLength={"10"}
                        value={pan_card_no}
                        onChange={(e) => setpan_card_no(e.target.value)}
                        rows={8}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4>Upload Your Aadhar Card</h4>
                    <div className="aon-inputicon-box">
                      <div className="radio-inline-box service-perform-list">
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setaadhar_image(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4>Add Your Pan Card</h4>
                    <div className="aon-inputicon-box">
                      <div className="radio-inline-box service-perform-list">
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setpan_card_image(e.target.files[0])
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4>Add Your Live Photo</h4>
                    <div className="aon-inputicon-box">
                      <div className="radio-inline-box service-perform-list">
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => sethome_image(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4>Add Your -Highest Education Certificate</h4>
                    <div className="aon-inputicon-box">
                      <div className="radio-inline-box service-perform-list">
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              seteducation_image(e.target.files[0])
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                

                  <div className="col-md-12">
                    <div className="text-center form-group text-center qout-submit-btn">
                      {loaderstatus == true ? (
                        simbolstatus == true ? (
                          <button
                            type="submit"
                            className="text-center site-button clickksidebutton"
                          >
                            Submit
                          </button>
                        ) : errorstatus == true ? (
                          <>
                            <h6 className="text-success m-2">Success</h6>
                          </>
                        ) : (
                          <>
                            <h6 className="text-danger m-2">Try-Agian</h6>
                          </>
                        )
                      ) : errorstatus == true ? (
                        <button className="loader m-2"></button>
                      ) : (
                        <>
                          <h6 className="text-danger m-2">Try-Again</h6>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
