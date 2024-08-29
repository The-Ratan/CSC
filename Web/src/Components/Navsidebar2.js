import axios from "axios";
import React, { useEffect, useState } from "react";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Navsidebar2 = () => {
  const [isDocumentModalOpen, setDocumentModalOpen] = useState(false);
  const [isDocumentModalOpen1, setDocumentModalOpen1] = useState(false);
  const toggleDocumentModal = () => {
    setDocumentModalOpen(!isDocumentModalOpen);
  };

  const toggleDocumentModal1 = () => {
    setDocumentModalOpen1(!isDocumentModalOpen1);
  };
  const [documentfile, setdocumentfile] = useState([]);
  const [documentfile1, setdocumentfile1] = useState([]);
  let tokenn = secureLocalStorage.getItem("otptoken");


  useEffect(() => {
    getdriver();
  },[0]);

 
  const getdriver = () => {
    const options = {
      headers: {
        token: tokenn,
      },
    };
    axios.get(`${apiurl[0].apiUrl}website/get_drivers`,options).then((res) => {
      setdocumentfile1(res.data.data);
    });
  };
  useEffect(() => {
    getdocument();
  },[0]);  
          
  const options = {
    headers: {
      token: tokenn,
    },
  };

  const getdocument = () => {
    axios.get(`${apiurl[0].apiUrl}website/get_document`,options).then((res) => {
      setdocumentfile(res.data.data);
    });
  };

  const downloadImage = (imageUrl, imageName) => {
    axios({
      url: imageUrl,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imageName);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <nav
        id="sidebar-admin-wraper"
        className="mCustomScrollbar _mCS_1 mCS-autoHide"
        style={{ paddingTop: "0px", overflow: "visible" }}
      >
        <div
          id="mCSB_1"
          className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
          style={{ maxHeight: "none" }}
          tabIndex={0}
        >
          <div
            id="mCSB_1_container"
            className="mCSB_container"
            style={{ position: "relative", top: 0, left: 0 }}
            dir="ltr"
          >
            <div className="admin-nav">
              <div className="" style={{ padding: "px" }}>
                <a href="/dashboard2">
                  {" "}
                  <img
                    src="images/fc22.png"
                    className="mCS_img_loaded"
                    style={{ height: "75px", width: "55%", marginLeft: "-4px" }}
                  />
                </a>
              </div>

              {/* <div className="pro-my-account-wrap" style={{padding:'8px'}}>
              <a href="/dashboard2">
                {" "}
                <img
                  src="images/fc22.png"
                  className="mCS_img_loaded"
                  style={{ height: "70px",width: "70%", marginLeft: "-15px" }}
                />
              </a>
            </div> */}
              <ul>
                <li className="active clickkside">
                  <a href="/dashboard2">
                    <i className="fa fa-dashboard" />
                    <span className="admin-nav-text">Dashboard</span>
                  </a>
                </li>
                <li className="clickkside">
                  <a href="/allservices2">
                    <i className="fa fa-user-circle-o" />
                    <span className="admin-nav-text">All Services</span>
                  </a>
                </li>

                <li className="clickkside" data-toggle="modal" data-target="#documentModal1" onClick={toggleDocumentModal1}>
                  <a href="#!">
                    <i className="fa fa-users" />
                    <span className="admin-nav-text">Driver</span>
                  </a>
                </li>
                {/* <li className="clickkside">
                <a href="/document2">
                  <i className="fa fa-calendar-check-o" />
                  <span className="admin-nav-text">Document</span>
                </a>
              </li> */}

                <li
                  className="clickkside"
                  data-toggle="modal"
                  data-target="#documentModal"
                  onClick={toggleDocumentModal}
                >
                  <a href="#!">
                    <i className="fa fa-calendar-check-o" />
                    <span className="admin-nav-text">Document</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="mCSB_1_scrollbar_vertical"
          className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal mCSB_scrollTools_vertical"
          style={{ display: "block" }}
        >
          <div className="mCSB_draggerContainer">
            <div
              id="mCSB_1_dragger_vertical"
              className="mCSB_dragger"
              style={{
                position: "absolute",
                minHeight: "50px",
                height: "622px",
                top: "0px",
                display: "block",
                maxHeight: "393.785px",
              }}
            ></div>
          </div>
        </div>
      </nav>
      {isDocumentModalOpen && (
        <div
          style={{ height: "500px", width: "100%", marginTop: "50px" }}
          className="modal fade"
          id="documentModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="documentModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered d-flex align-items-center justify-content-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="documentModalLabel">
                  Document
                </h5>
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
              <div>
                <div
                  id="aon-provider-Req-quote"
                  className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
                >
                  <div className="sf-divider-line" />
                  <div className="section-content">
                    <div className="aon-categories-area2-section">
                      <div className="row justify-content-center">
                        {documentfile?.map((data) => {
                          return (
                            <div className="col-lg-5 col-md-5">
                              <div className="media-bg-animate mba-bdr-15">
                                <div className="aon-categories-area2-iconbox aon-icon-effect">
                                  <div className="aon-cate-area2-icon">
                                    <button className="site-button">
                                      <a
                                        onClick={() =>
                                          downloadImage(
                                            `${apiurl[0].apiUrl}uploads/`+data?.file,
                                            `Pdf_${data?._id}.pdf`
                                          )
                                        }
                                      >
                                        <img
                                          style={{
                                            height: "20px",
                                            width: "20px",
                                          }}
                                          src="img/download.webp"
                                        />
                                      </a>
                                    </button>
                                  </div>
                                  
                                  <div className="aon-cate-area2-content-justify">
                                    <h6 className="aon-tilte">
                                      <a href="#"> {data?.description}</a>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



{isDocumentModalOpen1 && (
  <div style={{height:'500px' ,width: '100%', marginTop: '50px' }} className="modal fade" id="documentModal1" tabIndex={-1} role="dialog" aria-labelledby="documentModalLabel" aria-hidden="true">
    <div
            className="modal-dialog modal-lg modal-dialog-centered d-flex align-items-center justify-content-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="documentModalLabel">
                  Drivers
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggleDocumentModal1}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <div
                  id="aon-provider-Req-quote"
                  className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
                >
                  <div className="sf-divider-line" />
                  <div className="section-content">
                    <div className="aon-categories-area2-section">
                      <div className="row justify-content-center">
                        {documentfile1?.map((data) => {
                          return (
                            <div className="col-lg-5 col-md-5">
                              <div className="media-bg-animate mba-bdr-15">
                                <div className="aon-categories-area2-iconbox aon-icon-effect">
                                  <div className="aon-cate-area2-icon">
                                    <button className="site-button">
                                      <a
                                        onClick={() =>
                                          downloadImage(
                                            `${apiurl[0].apiUrl}uploads/`+data?.driver,
                                            `Pdf_${data?._id}.exe`
                                          )
                                        }
                                      >
                                        <img
                                          style={{
                                            height: "20px",
                                            width: "20px",
                                          }}
                                          src="img/download.webp"
                                        />
                                      </a>
                                    </button>
                                  </div>
                                  
                                  <div className="aon-cate-area2-content-justify" >
                                    <h6 className="aon-tilte">
                                      <a href="#"> {data?.driver}</a>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>
)}
    </>
  );
};

export default Navsidebar2;
