import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";
  import React from "react";
  import Header2 from "./Header2";
  import Navsidebar from "./Navsidebar";
  import { useState } from "react";
  import axios from "axios";
  import toast, { Toaster } from "react-hot-toast";
  import "./pancard.css";
  import { Link } from "react-router-dom";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
  
  const Income = () => {
    const [address, setAddress] = useState("");
    let [loaderstatus, setloaderstatus] = useState(true);
    let [simbolstatus, setsimbolstatusstatus] = useState(true);
    let [errorstatus, seterrorstatus] = useState(true);
  
    const [showAdditionalFields1, setShowAdditionalFields1] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [showAdditionalFields22, setShowAdditionalFields22] = useState(false);
    const [showAdditionalFields33, setShowAdditionalFields33] = useState(false);
    const [showAdditional, setShowAdditional] = useState(false);
  
    const handleAddNewClick33 = () => {
      setShowAdditionalFields33(!showAdditionalFields33);
    };
  
    const handleAddNewClick22 = () => {
      setShowAdditionalFields22(!showAdditionalFields22);
    };
  
    const handleAddNewClick = () => {
      setShowAdditionalFields(!showAdditionalFields);
    };
  
    const handleAddNewClick1 = () => {
      setShowAdditionalFields1(!showAdditionalFields1);
    };
  
    const handleAddNew = () => {
      setShowAdditional(!showAdditional);
    };
  
    const handleSelectQualification = (e) => {
      setShowAdditional(e.target.value === "Others");
    };
  
    const handleSelect = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
  
      setAddress(value);
      // securesecureLocalStorage.setItem("valuee", value);
  
      // securesecureLocalStorage.setItem("lat", JSON.stringify(latLng));
    };
  
    const [name, setname] = useState("");
    const [father_name, setfather_name] = useState("");
    const [phone_no, setphone_no] = useState("");
    const [mother_name, setmother_name] = useState("");
    const [message, setmessage] = useState("");
    const [aadhar_img, setaadhar_img] = useState("");
    const [user_img, setuser_img] = useState("");
    const [signature_img, setsignature_img] = useState("");
    const [sabhasad_or_parshad_letterhead_img, setsabhasad_or_parshad_letterhead_img] = useState("");
    const [address_proof_img, setaddress_proof_img] = useState("");

    const [other_file1, setother_file1] = useState("");
    const [other_file2, setother_file2] = useState("");
    const [other_file3, setother_file3] = useState("");
  
    const [other_details1, setother_details1] = useState("");
    const [other_details2, setother_details2] = useState("");
    const [other_details3, setother_details3] = useState("");
  
    const [activeTab, setActiveTab] = useState("hindi"); // 'hindi' or 'english'
    const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(true);
  
    const toggleTab = (tab) => {
      setActiveTab(tab);
    };
  
    const toggleDocumentModal = () => {
      setIsDocumentModalOpen(!isDocumentModalOpen);
    };
  
    const senddata = (evt) => {
      evt.preventDefault();
      const isConfirmed = window.confirm(
        "Are you sure you want to submit the form?"
      );
  
      if (isConfirmed) {

        if (sabhasad_or_parshad_letterhead_img && sabhasad_or_parshad_letterhead_img.size > 200 * 1024) {
          toast.error("Letter Image size should be less than 200KB");
          return; 
        }
        if (signature_img && signature_img.size > 200 * 1024) {
          toast.error("Sign Image size should be less than 200KB");
          return; 
        }
  
        if (aadhar_img && aadhar_img.size > 200 * 1024) {
          toast.error("Aadhar  Image size should be less than 200KB");
          return; 
        }
        if (user_img && user_img.size > 200 * 1024) {
          toast.error("Live Image size should be less than 200KB");
          return; 
        }
  
        if (other_file1 && other_file1.size > 200 * 1024) {
          toast.error("Add document First Image size should be less than 200KB");
          return; 
        }
        if (other_file2 && other_file2.size > 200 * 1024) {
          toast.error("Add document Second Image size should be less than 200KB");
          return; 
        }
        if (other_file3 && other_file3.size > 200 * 1024) {
          toast.error("Add document Third Image size should be less than 200KB");
          return; 
        }
        
        let operatoridd = secureLocalStorage.getItem("operatorid");
        let tokenn = secureLocalStorage.getItem("operatortoken");
  
        const options = {
          headers: {
            token: tokenn,
          },
        };
        const formdata = new FormData();
  
        formdata.append("user_id", operatoridd);
        formdata.append("name", name);
        formdata.append("father_name", father_name);
        formdata.append("mother_name", mother_name);
         formdata.append("phone_no", phone_no);
         formdata.append("address_proof_img", address_proof_img);
        formdata.append("message", message ? message : "");
        formdata.append("aadhar_img", aadhar_img);
        formdata.append("user_img", user_img);
        formdata.append("svapramanit_ghoshnapatra_or_signature_img", signature_img);
        formdata.append("sabhasad_or_parshad_letterhead_img", sabhasad_or_parshad_letterhead_img);
        formdata.append("other_details1", other_details1 ? other_details1 : "");
        formdata.append("other_file1", other_file1 ? other_file1 : "");
        formdata.append("other_details2", other_details2 ? other_details2 : "");
        formdata.append("other_file2", other_file2 ? other_file2 : "");
        formdata.append("other_details3", other_details3 ? other_details3 : "");
        formdata.append("other_file3", other_file3 ? other_file3 : "");
  
        axios
          .post(`${apiurl[0].apiUrl}website/add_income_certificate_details`
            ,
            formdata,
            options
          )
          .then((response) => {
            setsimbolstatusstatus(false);
            setloaderstatus(true);
  
            toast.success(response.data.msg);
            setTimeout(() => {
              window.location.reload("/income");
            }, 3000);
          })
          .catch((error) => {

          });
  
        setloaderstatus(false);
      }
    };
  
    return (
      <div>
        <div className="page-wraper">
          <Header2 />
          <Toaster />
          {/* Sidebar Holder */}
          <Navsidebar />
          {/* Page Content Holder */}
          <div id="content">
            <div className="content-admin-main">
              <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
                <div className="admin-left-area">
                  <a href='/income'
                    className="nav-btn-admin d-flex justify-content-between align-items-center"
                    
                  >
                    Income Certificate
                  </a>
                </div>
                <div className="admin-left-area">
                  <a href='/domicile'
                    className="nav-btn-admin d-flex justify-content-between align-items-center"
                    
                  >
                    Domicile Certificate
                  </a>
                </div>
                <div className="admin-left-area">
                  <a href='/cast'
                    className="nav-btn-admin d-flex justify-content-between align-items-center"
                    
                  >
                    Caste Certificate
                  </a>
                </div>
              </div>
              <div className="aon-admin-heading">
                <h4>
                  <strong>Please Fill this detail for Income</strong>
                </h4>
              </div>
              <form onSubmit={senddata} encType="multipart/form-data">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sf-provi-qform">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>APPLICANT NAME</label>
                            <input
                              onChange={(e) => setname(e.target.value)}
                              value={name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
  
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>FATHER NAME</label>
                            <input
                              onChange={(e) => setfather_name(e.target.value)}
                              value={father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>


                        <div className="col-md-12">
                        <div className="form-group">
                          <label>MOTHER NAME</label>
                          <input
                            onChange={(e) => setmother_name(e.target.value)}
                            value={mother_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
  
                        <div className="col-md-12">
                          <div className="form-group">
                            <label> MOBILE NUMBER </label>
                            <input
                              onChange={(e) => setphone_no(e.target.value)}
                              value={phone_no}
                              maxLength={"10"}
                              minLength={"10"}
                              name="phone"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
  
                       
  
                        <br />
                        <br />
                        <div className="col-md-12">
                          <div
                            onClick={handleAddNewClick1}
                            className="aon-admin-heading "
                          >
                            <h4
                              className="clickdata"
                              style={{
                                // color: "rgb(55 82 156)",
                                display: "inline-block",
                                borderBottom: "5px solid rgb(55 82 156)",
                              }}
                            >
                             Add Detail*
                            </h4>
                          </div>
  
                          {showAdditionalFields1 && (
                            <div>
                              <textarea
                                onChange={(e) => setmessage(e.target.value)}
                                value={message}
                                name="message"
                                placeholder="Message"
                                class="form-control"
                                required=""
                              ></textarea>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-6">
                    <div className="sf-provi-qform">
                      <div className="row">
                      <div className="col-md-12">
                          <h4>ADDRESS PROOF (Electricity Bill , Rent Agreement ,Voter ID Card,Bank Passbook) </h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  required
                                  onChange={(e) =>
                                    setaddress_proof_img(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <h4>UPLOAD YOR AADHAR CARD</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  required
                                  onChange={(e) =>
                                    setaadhar_img(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="col-md-12">
                          <h4>ADD YOUR LIVE PHOTO </h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  required
                                  onChange={(e) => setuser_img(e.target.files[0])}
                                  type="file"
                                  accept="image/*"
                                  name="abc"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
  
                        


                        <div className="col-md-12">
                          <h4>सभासद/पार्षद लेटर हेड </h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  required
                                  onChange={(e) =>
                                    setsabhasad_or_parshad_letterhead_img(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <h4>SIGN </h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  required
                                  onChange={(e) =>
                                    setsignature_img(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {showAdditionalFields && (
                            <div>
                              <br />
                              <div className="">
                                <input
                                  value={other_details1}
                                  onChange={(e) =>
                                    setother_details1(e.target.value)
                                  }
                                  name="name"
                                  type="text"
                                  placeholder="Add Document"
                                  required
                                  className="form-control"
                                />
                              </div>
                              <br />
                              <font style={{ borderBottom: "5px solid #022279" }}>
                                <h4>Add Image*</h4>
                              </font>
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  onChange={(e) =>
                                    setother_file1(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                  name="abc"
                                />
                              </div>
                              <br />
                            </div>
                          )}
  
                          <div
                            onClick={handleAddNewClick}
                            className="aon-admin-heading "
                          >
                            <h4
                              className="clickdata"
                              style={{
                                // color: "rgb(55 82 156)",
                                display: "inline-block",
                                borderBottom: "5px solid rgb(55 82 156)",
                              }}
                            >
                              Add Document*
                            </h4>
                          </div>
                        </div>
  
                        <div className="col-md-12">
                          {showAdditionalFields22 && (
                            <div>
                              <br />
                              <div className="">
                                <input
                                  value={other_details2}
                                  onChange={(e) =>
                                    setother_details2(e.target.value)
                                  }
                                  name="name"
                                  type="text"
                                  placeholder="Add Document"
                                  required
                                  className="form-control"
                                />
                              </div>
                              <br />
                              <font style={{ borderBottom: "5px solid #022279" }}>
                                <h4>Add Image*</h4>
                              </font>
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  onChange={(e) =>
                                    setother_file2(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                  name="abc"
                                />
                              </div>
                              <br />
                            </div>
                          )}
  
                          <div
                            onClick={handleAddNewClick22}
                            className="aon-admin-heading "
                          >
                            <h4
                              className="clickdata"
                              style={{
                                // color: "rgb(55 82 156)",
                                display: "inline-block",
                                borderBottom: "5px solid rgb(55 82 156)",
                              }}
                            >
                              Add Document*
                            </h4>
                          </div>
                        </div>
  
                        <div className="col-md-12">
                          {showAdditionalFields33 && (
                            <div>
                              <br />
                              <div className="">
                                <input
                                  value={other_details3}
                                  onChange={(e) =>
                                    setother_details3(e.target.value)
                                  }
                                  name="name"
                                  type="text"
                                  placeholder="Add Document"
                                  required
                                  className="form-control"
                                />
                              </div>
                              <br />
                              <font style={{ borderBottom: "5px solid #022279" }}>
                                <h4>Add Image*</h4>
                              </font>
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <input
                                  onChange={(e) =>
                                    setother_file3(e.target.files[0])
                                  }
                                  type="file"
                                  accept="image/*"
                                  name="abc"
                                />
                              </div>
                              <br />
                            </div>
                          )}
  
                          <div
                            onClick={handleAddNewClick33}
                            className="aon-admin-heading "
                          >
                            <h4
                              className="clickdata"
                              style={{
                                // color: "rgb(55 82 156)",
                                display: "inline-block",
                                borderBottom: "5px solid rgb(55 82 156)",
                              }}
                            >
                              Add Document*
                            </h4>
                          </div>
  
                          <br />
                        </div>
  
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <br />
                    {/* <div className="col-md-12">
                    <button type="submit" className="site-button clickksidebutton">
                      Submit
                    </button>
                  </div> */}
                  </div>
                </div>
                <br />
                <div class="checkbox sf-radio-checkbox ">
                  <input id="td2_2" name="abc" value="five" type="checkbox" />
                  <label for="td2_2">
                    I have read{" "}
                    <a
                      class="aon-title clickdataterm"
                      data-toggle="modal"
                      data-target="#documentModalterms"
                      onClick={toggleDocumentModal}
                      style={{ borderBottom: "3px solid #022279", color: "blue" }}
                    >
                      Terms & Conditions
                    </a>
                  </label>
                </div>
  
                <br />
  
                <div className="text-center">
                  {loaderstatus == true ? (
                    simbolstatus == true ? (
                      <button
                        type="submit"
                        className="site-button clickksidebutton"
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
              </form>
            </div>
          </div>
        </div>
        <div className="modal fade" id="login-signup-model">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="sf-custom-tabs sf-custom-new aon-logon-sign-area p-3">
                  <div className="tab-content">
                    {/*Login Form*/}
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group d-flex aon-login-option justify-content-between">
                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    <label className="site-button w-100">
                                      FINAL SUBMIT
                                    </label>
                                  </div>
                                </div>
  
                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    <label
                                      className="site-button "
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      CANCEL
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isDocumentModalOpen && (
          <div
            className="modal fade"
            id="documentModalterms"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="documentModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-sm modal-dialog-centered d-flex align-items-center justify-content-center"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  {/* <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <button className={`nav-link ${activeTab === 'hindi' ? 'active' : ''}`} onClick={() => toggleTab('hindi')}>
                        Hindi
                      </button>
                    </li>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <li className="nav-item">
                      <button className={`nav-link ${activeTab === 'english' ? 'active' : ''}`} onClick={() => toggleTab('english')}>
                        English
                      </button>
                    </li>
                  </ul> */}
  
                  <ul className="nav nav-tabs">
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "hindi" ? "active" : ""
                        }`}
                        onClick={() => toggleTab("hindi")}
                        style={{
                          backgroundColor: activeTab === "hindi" ? "#ffb600" : "",
                        }}
                      >
                        Hindi
                      </button>
                    </li>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "english" ? "active" : ""
                        }`}
                        onClick={() => toggleTab("english")}
                        style={{
                          backgroundColor:
                            activeTab === "english" ? "#ffb600" : "",
                        }}
                      >
                        English
                      </button>
                    </li>
                  </ul>
  
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={toggleDocumentModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body ">
                  {activeTab === "hindi" && (
                    <p className="aon-title" style={{ textAlign: "justify" }}>
                      मैं घोषणा करता हूँ कि आवेदन के लिए दिये गए सभी विवरण व
                      दस्तावेज़ मेरी जानकारी में शुद्ध एवं सत्य है यदि इसमे किसी
                      प्रकार का झूठ व बदलाव पाये जाते है तो मेरे विरुद्ध भा.दं.सं.
                      धारा 199 व 200 की उक्त कार्यवाही की जा सकती है
                    </p>
                  )}
                  {activeTab === "english" && (
                    <p className="aon-title" style={{ textAlign: "justify" }}>
                      I declare that all the details and documents given in the
                      application are correct and true to the best of my
                      knowledge. If any kind of lie or change is found in it then
                      FIR will be filed against me. The above action can be taken
                      under section 199 and 200.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Income;
  


