import React, { useEffect, useState } from "react";
import Navsidebar from "./Navsidebar";
import Header2 from "./Header2";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Support = () => {
  const [output, setOutput] = useState("");
  const [usermessage, setusermessage] = useState("");

  const [answer, setAnswer] = useState([]);
  
  const [activeTab, setActiveTab] = useState("open");
  const [queryselect, setqueryselect] = useState("");
  let operatorid = secureLocalStorage.getItem("operatorid");
  const [querySubmitted, setQuerySubmitted] = useState(false);
  const submitquery = (evt) => {
    evt.preventDefault();

    if (!queryselect) {
      setOutput("Please Select Query");
      return;
    }
    let tokenn = secureLocalStorage.getItem("operatortoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userAppId = {
      user_id: operatorid,
      question: queryselect,
      message: usermessage,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/send_question`, userAppId , options)
      .then((res) => {
        toast.success(res.data.msg);
        window.location.reload();
        setQuerySubmitted(true);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAnswer();
  }, [0]);

  const getAnswer = () => {
    const data = {
      user_id: operatorid,
    };

    
    let tokenn = secureLocalStorage.getItem("operatortoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    axios
      .post(`${apiurl[0].apiUrl}website/get_answer`, data ,options)
      .then((res) => {

        setAnswer(res.data);
      })
      .catch((error) => {});
  };

  const tabClickHandler = (tab) => {
    setActiveTab(tab);
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
            <div className="aon-admin-heading">
              <h4>Support</h4>
            </div>
            {/* <div
              className="section-content sf-owl-arrow"
              style={{ border: "8px solid #022279" }}
            > */}
            <div className="section-content sf-owl-arrow">
              <div className="container">
                <div class="section-content sf-owl-arrow">
                  <div className="container">
                    {/*Title Section Start*/}
                    <div className="sf-contact-form-wrap">
                      {/*Tabs*/}
                      <br />

                      <ul className="nav nav-tabs">
                        <li
                          style={{ width: "33%" }}
                          className="nav-item"
                          onClick={() => tabClickHandler("open")}
                        >
                          <a
                            className={`nav-link ${
                              activeTab === "open" ? "active" : ""
                            }`}
                            href="#"
                          >
                            Create Ticket
                          </a>
                        </li>
                        <li
                          style={{ width: "33%" }}
                          className="nav-item"
                          onClick={() => tabClickHandler("close")}
                        >
                          <a
                            className={`nav-link ${
                              activeTab === "close" ? "active" : ""
                            }`}
                            href="#"
                          >
                            Close Ticket
                          </a>
                        </li>
                        <li
                          style={{ width: "33%" }}
                          className="nav-item"
                          onClick={() => tabClickHandler("pending")}
                        >
                          <a
                            className={`nav-link ${
                              activeTab === "pending" ? "active" : ""
                            }`}
                            href="#"
                          >
                            Pending Ticket
                          </a>
                        </li>
                      </ul>
                      <br />
                      {/*Content based on active tab*/}
                      {activeTab === "open" && (
                        <div className="sf-contact-form">
                          <form
                            onSubmit={submitquery}
                            style={{ color: "#022279" }}
                          >
                            <h4>
                              Selected Query -{" "}
                              <font className="site-button">
                                {" "}
                                {queryselect}
                              </font>
                            </h4>
                            <br />
                            <div className="row">
                              <div className="col-md-8">
                                <label>
                                  <h4>I have a query related to service</h4>
                                </label>
                                <div className="form-group">
                                  <div className="aon-inputicon-box">
                                    <div>
                                      <div>
                                        <select
                                          onChange={(e) => {
                                            setqueryselect(e.target.value);
                                          }}
                                          className="form-control"
                                          value={queryselect}
                                          disabled={querySubmitted}
                                        >
                                          <option>Choose Services </option>
                                          <option>
                                            Instant Service ( Frequently Used
                                            Services)
                                          </option>
                                          <option>Government ID card</option>
                                          <option>Education</option>
                                          <option>Sarkari Result</option>
                                          <option>Online Form</option>
                                          <option>Other Services</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-8">
                                <label>
                                  <h4>I have a query related to Transaction</h4>
                                </label>
                                <div className="form-group">
                                  <div className="aon-inputicon-box">
                                    <div>
                                      <div>
                                        <select
                                          onChange={(e) => {
                                            setqueryselect(e.target.value);
                                          }}
                                          className="form-control"
                                          value={queryselect}
                                          disabled={querySubmitted}
                                        >
                                          <option>Choose Services</option>
                                          <option>
                                            Transaction Failed/Pending
                                          </option>
                                          <option>Add balance</option>
                                          <option>Refund</option>
                                          <option>Cashback</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>
                                    <h4>Message/Feedback if any</h4>
                                  </label>
                                  <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="form-control"
                                    required
                                    onChange={(e) =>
                                      setusermessage(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="sf-contact-submit-btn">
                              <button
                                className="site-button clickksidebutton"
                                type="submit"
                                disabled={querySubmitted}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                      {activeTab === "close" && (
                        <div className="row">
                          {answer?.closeAnswerData?.map((data) => {
                            return (
                              <div className="col-md-12">
                                <div className="sf-jobs-section">
                                  <div className="sf-jobs-head">
                                    <span className="sf-jobs-position">
                                    {data?.question}
                                    <br />
                                      Question :- {data?.query}
                                      
                                      
                                    </span>

                                    {/* <span className="sf-jobs-position">
                                      {data?.question}
                                    </span> */}
                                  </div>
                                  <div className="sf-jobs-info">
                                    <h4 className="sf-title">
                                      <a href="">Answer - {data?.answer} </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {activeTab === "pending" && (
                        <div className="sf-contact-form">
                          {answer?.pendingAnswerData?.map((data) => {
                            return (
                              <div className="col-md-12">
                                <div className="sf-jobs-section">
                                  <div className="sf-jobs-head">
                                    <span className="sf-jobs-position">
                                    {data?.question}
                                    <br />
                                      Question :- {data?.query}
                                      
                                      
                                    </span>

                                    {/* <span className="sf-jobs-position">
                                      {data?.question}
                                    </span> */}
                                  </div>
                                  <div className="sf-jobs-info">
                                    <h4 className="sf-title">
                                      <a href="">Message - {data?.message} </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
