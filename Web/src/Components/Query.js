import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Query = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone_no, setphone_no] = useState("");

  const [message, setmessage] = useState("");
  const [output, setoutput] = useState("");
  let [loaderstatus, setloaderstatus] = useState(true);
  let [simbolstatus, setsimbolstatusstatus] = useState(true);
  let [errorstatus, seterrorstatus] = useState(true);
  const [activeTab, setActiveTab] = useState("hindi"); // 'hindi' or 'english'
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(true);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const toggleDocumentModal = () => {
    setIsDocumentModalOpen(!isDocumentModalOpen);
  };
  let operatoridd = secureLocalStorage.getItem("operatorid");
  let tokenn = secureLocalStorage.getItem("operatortoken");
  const sumitprofilepic = (evt) => {
    evt.preventDefault();

    const isConfirmed = window.confirm(
      "Are you sure you want to submit the form?"
    );

    if (isConfirmed) {
      let tokenn = secureLocalStorage.getItem("operatortoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
      const formdata = {
        user_id: operatoridd,
        name: name,
        email: email,
        phone_no: phone_no,

        concern: message,
      };

      axios
        .post(`${apiurl[0].apiUrl}website/add_querybox_data`, formdata ,options)
        .then((response) => {
          toast.success(response.data.msg);
          setoutput(response.data.msg);
          setsimbolstatusstatus(false);
          setloaderstatus(true);
        })
        .catch((error) => {});
      setloaderstatus(false);
      setname("");
      setemail("");
      setphone_no("");
      setmessage("");
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
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  
                >
                  {/* <span className="nav-btn-text">Dashboard Menu</span> */}
                  Query
                </a>
              </div>
            </div>
            <div className="aon-admin-heading">
              <h4>
                <strong>Please Fill this detail for Any Query</strong>
              </h4>
              <font className="site-button">Payment Will Charge 10₹ <br/> {output}</font>
            </div>
            <form onSubmit={sumitprofilepic}>
              <div className="row">
                {/* COLUMNS 1 */}
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setname(e.target.value)}
                      value={name}
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                {/* COLUMNS 2 */}
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      name="name"
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                {/* COLUMNS 3 */}
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setphone_no(e.target.value)}
                      value={phone_no}
                      name="name"
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      required
                      maxLength={"10"}
                      minLength={"10"}
                    />
                  </div>
                </div>

                {/* COLUMNS 5 */}
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      onChange={(e) => setmessage(e.target.value)}
                      value={message}
                      name="name"
                      type="text"
                      placeholder="Concern"
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LfcCr0eAAAAAN2P-3cJJC1StgxbUWvwELbMVjnp"
                  />
                </div>

                <div className="col-md-12">
                  <div class="checkbox sf-radio-checkbox ">
                    <input id="td2_2" name="abc" value="five" type="checkbox" />
                    <label for="td2_2">
                      I have read{" "}
                      <a
                        class="aon-title clickdataterm"
                        data-toggle="modal"
                        data-target="#documentModalterms"
                        onClick={toggleDocumentModal}
                        style={{
                          borderBottom: "3px solid #022279",
                          color: "blue",
                        }}
                      >
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                  <br />
                </div>
              </div>
              <div className="sf-contact-submit-btn">
                <button className="site-button clickksidebutton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>{" "}
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

export default Query;
