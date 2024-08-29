
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";
  import React from "react";
  import toast, { Toaster } from "react-hot-toast";
  import { useState } from "react";
  import Header3 from "./Header3";
  import Navsidebar2 from "./Navsidebar2";
  import axios from "axios";
import { Link } from "react-router-dom";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
  
  
  const Uprationcard1 = () => {
    const [address, setAddress] = useState("");
    let [loaderstatus, setloaderstatus] = useState(true);
    let [simbolstatus, setsimbolstatusstatus] = useState(true);
    let [errorstatus, seterrorstatus] = useState(true);
    const [term , setterm] = useState();
    
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [showAdditionalFields22, setShowAdditionalFields22] = useState(false);
    const [showAdditionalFields33, setShowAdditionalFields33] = useState(false);
    const [showAdditionalFields1, setShowAdditionalFields1] = useState(false);
  
    const [activeTab, setActiveTab] = useState('hindi'); // 'hindi' or 'english'
    const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(true);
  
    const toggleTab = (tab) => {
      setActiveTab(tab);
    };
  
    const toggleDocumentModal = () => {
      setIsDocumentModalOpen(!isDocumentModalOpen);
    }; 
  
  
    const handleAddNewClick33 = () => {
      setShowAdditionalFields33(!showAdditionalFields33);
    };
  
    const handleAddNewClick22 = () => {
      setShowAdditionalFields22(!showAdditionalFields22);
    };
  
    const handleAddNewClick1 = () => {
      setShowAdditionalFields1(!showAdditionalFields1);
    };
  
    const handleAddNewClick = () => {
      setShowAdditionalFields(!showAdditionalFields);
    };
  
    const handleSelect = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
  
      setAddress(value);
      // securesecureLocalStorage.setItem("valuee", value);
  
      // securesecureLocalStorage.setItem("lat", JSON.stringify(latLng));
    };
  
    const [phone_no, setaadhar_linked_phon_no] = useState("");
    const [father_name, setfather_name] = useState("");
    const [mother_name, setmother_name] = useState("");
    const [husband_name, sethusband_name] = useState("");
    const [rashan_cotedar_name, setrashan_cotedar_name] = useState("");
    const [bijli_bil_no, setbijli_bil_no] = useState("");
    const [gas_connection_no, setgas_connection_no] = useState("");
  
    const [message, setmessage] = useState("");
    const [aadhar_img, setaadhar_img] = useState("");
    const [user_img, setuser_img] = useState("");
    const [bank_passbook_img, setbank_passbook_img] = useState("");
  
    const [family_aadhar_img, setfamily_aadhar_img] = useState("");
  
    const [other_file1, setother_file1] = useState("");
    const [other_file2, setother_file2] = useState("");
    const [other_file3, setother_file3] = useState("");
  
    const [other_details1, setother_details1] = useState("");
    const [other_details2, setother_details2] = useState("");
    const [other_details3, setother_details3] = useState("");
  
    let operatoridd = secureLocalStorage.getItem("otpid");
    
    const senddata = (evt) => {
      evt.preventDefault();
      const isConfirmed = window.confirm("Are you sure you want to submit the form?");
  
  
      if (isConfirmed) {
        if (user_img && user_img.size > 200 * 1024) {
          toast.error("Self Image size should be less than 200KB");
          return; 
        }
        if (aadhar_img && aadhar_img.size > 200 * 1024) {
          toast.error("Aadhar Image size should be less than 200KB");
          return; 
        }
        if (bank_passbook_img && bank_passbook_img.size > 200 * 1024) {
          toast.error("Bank Passbook Image size should be less than 200KB");
          return; 
        }
        
        if (family_aadhar_img && family_aadhar_img.size > 200 * 1024) {
          toast.error("Family Aadhar Image size should be less than 200KB");
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
      let tokenn = secureLocalStorage.getItem("otptoken");
  
      const options = {
        headers: {
          token: tokenn,
        },
      };
      const formdata = new FormData();
  
      formdata.append("user_id", operatoridd);
      formdata.append("father_name", father_name);
      formdata.append("mother_name", mother_name);
      formdata.append("husband_name", husband_name);
      formdata.append("rashan_cotedar_name", rashan_cotedar_name);
      formdata.append("bijli_bil_no", bijli_bil_no);
      formdata.append("gas_connection_no", gas_connection_no);
      formdata.append("phone_no", phone_no);
      formdata.append("user_img", user_img);
      formdata.append("aadhar_img", aadhar_img);
      formdata.append("bank_passbook_img", bank_passbook_img);
      formdata.append("family_aadhar_img", family_aadhar_img);
      formdata.append("message", message ? message : "");
      formdata.append("other_details1", other_details1 ? other_details1 : "");
      formdata.append("other_file1", other_file1 ? other_file1 : "");
      formdata.append("other_details2", other_details2 ? other_details2 : "");
      formdata.append("other_file2", other_file2 ? other_file2 : "");
      formdata.append("other_details3", other_details3 ? other_details3 : "");
      formdata.append("other_file3", other_file3 ? other_file3 : "");
  
      axios
        .post(`${apiurl[0].apiUrl}website/add_up_rationcard_details`, formdata ,options)
        .then((response) => {
          setsimbolstatusstatus(false);
          setloaderstatus(true);
          toast.success(response.data.msg);
          setTimeout(() => {
            window.location.reload('/uprationcard1');
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
          <Header3 />
          <Toaster />
          {/* Sidebar Holder */}
          <Navsidebar2 />
          {/* Page Content Holder */}
          <div id="content">
            <div className="content-admin-main">
            <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a href='/voteridcard1'
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  
                >Voter Card
                </a>
              </div>

              <div className="admin-left-area">
                <a href='/uprationcard1'
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  
                >UP Ration Card
                </a>
              </div>
            </div>
              <div className="aon-admin-heading">
                <h4>
                  <strong>Please Fill this detail for UP Ration Card</strong>
                </h4>
              </div>
              <form onSubmit={senddata} encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6">
                  <div className="sf-provi-qform">
                    <div className="row">
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
                          <label>MOBILE NUMBER </label>
                          <input
                            onChange={(e) =>
                              setaadhar_linked_phon_no(e.target.value)
                            }
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

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>HUSBAND NAME</label>
                          <input
                            onChange={(e) => sethusband_name(e.target.value)}
                            value={husband_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>RASHAN COTEDAR NAME</label>
                          <input
                            onChange={(e) =>
                              setrashan_cotedar_name(e.target.value)
                            }
                            value={rashan_cotedar_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>BIJLI BILL NO. (Optional)</label>
                          <input
                            onChange={(e) => setbijli_bil_no(e.target.value)}
                            value={bijli_bil_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>GAS CONNECTION NO. (Optional)</label>
                          <input
                            onChange={(e) =>
                              setgas_connection_no(e.target.value)
                            }
                            value={gas_connection_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
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
                           Add Detail*
                          </h4>
                        </div>

                        {/* <button
                            onClick={handleAddNewClick}
                            className="site-button clickksidebutton"
                          >
                            ADDITIONAL DETAIL
                          </button> */}
                        {showAdditionalFields && (
                          <div>
                            <div>
                              <textarea
                                onChange={(e) => setmessage(e.target.value)}
                                value={message}
                                name="message"
                                placeholder="Message"
                                class="form-control"
                              ></textarea>
                            </div>
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
                        <h4>ADD YOUR LIVE PHOTO </h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input
                                required
                                onChange={(e) => setuser_img(e.target.files[0])}
                                type="file"
                                accept="image/*"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <h4>UPLOAD YOUR AADHAR CARD</h4>
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
                        <h4>UPLOAD BANK PASSBOOK IMAGE</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input
                                required
                                onChange={(e) =>
                                  setbank_passbook_img(e.target.files[0])
                                }
                                type="file"
                                accept="image/*"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <h4>FAMILY AADHAR CARD </h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input
                                required
                                onChange={(e) =>
                                  setfamily_aadhar_img(e.target.files[0])
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
                    </div>
                  </div>
                  <br />
                  {/* <div className="col-md-12">
                      <button
                        type="submit"
                        className="site-button clickksidebutton"
                      >
                        Submit
                      </button>
                    </div> */}
                </div>
              </div>

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
        {isDocumentModalOpen && (
      <div className="modal fade" id="documentModalterms" tabIndex={-1} role="dialog" aria-labelledby="documentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered d-flex align-items-center justify-content-center" role="document">
          <div className="modal-content">
            <div className="modal-header">
  <ul className="nav nav-tabs"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li className="nav-item">
  <button
    className={`nav-link ${activeTab === 'hindi' ? 'active' : ''}`}
    onClick={() => toggleTab('hindi')}
    style={{ backgroundColor: activeTab === 'hindi' ? '#ffb600' : '' }}
  >
    Hindi
  </button>
  </li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <li className="nav-item">
  <button
    className={`nav-link ${activeTab === 'english' ? 'active' : ''}`}
    onClick={() => toggleTab('english')}
    style={{ backgroundColor: activeTab === 'english' ? '#ffb600' : '' }}
  >
    English
  </button>
  </li>
  </ul>
  
  
             
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleDocumentModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              {activeTab === 'hindi' && (
                <p className="aon-title" style={{textAlign:'justify'}}>मैं घोषणा करता हूँ कि आवेदन के लिए दिये गए सभी विवरण व दस्तावेज़ मेरी जानकारी में शुद्ध एवं सत्य है यदि
                इसमे किसी प्रकार का झूठ व बदलाव पाये जाते है तो मेरे विरुद्ध भा.दं.सं. धारा 199 व 200 की उक्त कार्यवाही की जा सकती है</p>
              )}
              {activeTab === 'english' && (
                <p className="aon-title" style={{textAlign:'justify'}}>I declare that all the details and documents given in the application are correct and true to the best of my knowledge.
                If any kind of lie or change is found in it then FIR will be filed against me. The above action can be taken under section 199 and 200.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )} 
      </div>
    );
  };
  
  export default Uprationcard1;

