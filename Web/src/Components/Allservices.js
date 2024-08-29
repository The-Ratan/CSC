import React, { useState } from "react";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
import './allservices.css';

const Allservices = () => {
  const [showAdditional, setShowAdditional] = useState(false);
  const [showAdditionalpassport, setShowAdditionalpassport] = useState(false);
  const handleAddNewpassport = () => {
    setShowAdditionalpassport(!showAdditionalpassport);
  };
  const handleAddNew = () => {
    setShowAdditional(!showAdditional);
  };
  return (
    <div>
      <div className="page-wraper">
        <Header2 />  
        {/* Sidebar Holder */}
        <Navsidebar />


        
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            {/* <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                  
                  <span className="fa fa-reorder" />
                </a>
              </div>

            </div> */}
            <div className="aon-admin-heading">
              <h4>
                <strong>All Services</strong>
              </h4>
            </div>



            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Query Services</h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}

                        <div className="col-lg-3 col-md-6" >
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/query.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click " >
                              <h3>
                              
                              <a href="/query">Query</a>
                                {/* <a onClick={handleAddNew}>EPFO</a> */}
                              </h3>
                            </div>
                          </div>
                        </div>
                      

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/other.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/other">Other</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                       
                        
                    
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Frequently Used Services</h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}

                        <div className="col-lg-3 col-md-6" >
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/epfwith.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click " >
                              <h3>
                              
                              <a href="/pfwithdraw">EPFO</a>
                                {/* <a onClick={handleAddNew}>EPFO</a> */}
                              </h3>
                            </div>
                          </div>
                        </div>
                        {showAdditional && (
                          <><div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/epfwith.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/pfwithdraw">PF Withdrawal</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/ekyc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/pfkyc">E- Kyc</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/nomination.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/pfnomination">Nomination</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/midtransfer.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/midtransfer">MID Transfer</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/uanactivation.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">UAN Activation</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        </> 
                            
                        )}

                        {/* <div className="col-lg-3 col-md-6" >
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/vehicletax.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click " >
                              <h3>
                                <a href="#">Border Tax</a>
                              </h3>
                            </div>
                          </div>
                        </div> */}
                        {/*block-2*/}
                        {/* <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/echallan.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">E- Challan</a>
                              </h3>
                            </div>
                          </div>
                        </div> */}
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/fir.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/fir">FIR</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/pcc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/policeverification">PCC</a>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/insurance.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/insurance">Insurance</a>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/railwayticket.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/railwayticket">Railway Ticket</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-5*/}
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Government ID Cards </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                      <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/eshram.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/eshramcard">Eshram Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-1*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/aayushman.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/aayushmancard">Ayushman Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                             className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pan.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/pancardform">Pan Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/voterid.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/voteridcard">Voter Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/labour.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/labourcard">Labour Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/passport.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>

                              
                              <a href="/freshpassport">Passport</a>
                                {/* <a onClick={handleAddNewpassport}>Passport</a> */}
                              </h3>
                            </div>
                          </div>
                        </div>
                        {showAdditionalpassport && (
<>  <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-1.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/freshpassport">Fresh Passport</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-2.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/tatkalpassport">Tatkal Passport</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-3.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/renewal">Renewal</a>
                              </h3>
                            </div>
                          </div>
                        </div></>
                        )}

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/UDID.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/udidcard">UDID Card</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-5*/}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Education </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/admission.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/other">Admission</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/asignment.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/other">Assignment</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/project.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/other">Project</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/helpbook.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/other">Help Book</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-5*/}
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* <div class="section-content  sf-owl-arrow">
              <div className="container">
                
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">EPFO</h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/epfwith.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">PF Withdrawal</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/ekyc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">E- Kyc</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/nomination.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Nomination</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/midtransfer.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">MID Transfer</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/uanactivation.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">UAN Activation</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr /> */}
            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Sarkari Result</h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/sscresult.webp)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">SSC</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/ctet.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">CTET</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/clerkresult.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">SBI Clerk </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/anganwadi.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Anganwadi</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           

            <hr />
            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Online Form </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/admission.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Admission</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/neet.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">NEET</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/ssc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">SSC MTS</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/ugc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">UGC NET</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-5*/}
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            {/* <div class="section-content  sf-owl-arrow">
              <div className="container">
                
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Passport </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-1.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Fresh Passport</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-2.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Tatkal Passport</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-3.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Renewal</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr /> */}
            
           
            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Other Services </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                      
                        {/*block-5*/}

                        
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/pcc.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/policeverification">Police Verification</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-1.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/fir">Fir</a>
                              </h3>
                            </div>
                          </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/lostreport.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/lostreport">Lost Report</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/Adhar.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/aadharcard">Aadhar Address</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/pancard.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/pancardcorrection">Pancard Correction</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/rationcard.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/uprationcard">UP RationCard</a>
                              </h3>
                            </div>
                          </div>
                        </div>







                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/msme.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/msme">MSME</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/foodlicense.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/foodlicense">Food License </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/edistrict.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/cast">E-District Services</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                       
                        {/*block-5*/}
                        
                        {/*block-6*/}
                       
                       
                      
                        
                       


                     
                       


                       
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <hr />
            <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Upcoming Services</h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/vehicletax.jpg)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Vehicle Tax</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/vehicletax.jpg)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Border Tax</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/echallan.png)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Online Challan</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/pension.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Pension Form</a>
                              </h3>
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/electricity.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Electricity Connection</a>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{opacity:'0.7', border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/khatoni.png)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Khatoni Download</a>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ opacity:'0.7',border:'1px solid rgb(2, 34, 121)' , 
    height: "200px",
                              backgroundImage:
                                "url(images/digital.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name ">
                              <h3>
                                <a href="#">Digital Signature</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-5*/}
                      
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
  );
};

export default Allservices;
