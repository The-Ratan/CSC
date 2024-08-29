import React, { useEffect, useRef, useState } from "react";
import { TbSunElectricity, TbWindElectricity } from "react-icons/tb";
import { MdOutlineStorefront } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { GiHealthPotion } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import {  GrUserPolice } from "react-icons/gr";
import { MdAgriculture } from "react-icons/md";
import {FaAddressCard, FaDatabase, FaRegAddressCard, FaStackExchange, FaToolbox} from 'react-icons/fa'
import { BsBank } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { BiLogoDrupal } from "react-icons/bi";

import { FaUserTag } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, useNavigate } from "react-router-dom";
import Header3 from "./Header3";
import Navsidebar2 from "./Navsidebar2";
import {MdDirectionsRailway} from 'react-icons/md'
import { LuStepForward } from "react-icons/lu";
const Dashboard2 = () => {
  const [backgroundColor, setBackgroundColor] = useState("null");
  const colors = ["", "", "", ""];
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    
    marqueeRef.current.start();
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextColor =
        colors[(colors.indexOf(backgroundColor) + 1) % colors.length];
      setBackgroundColor(nextColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [backgroundColor, colors]);

  const settings = {
    autoplay: true,
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Navigate = useNavigate();

  return (
    <div>
      <div className="page-wraper">
        {/* Header Start */}
        <Header3 />
        {/* Header End */}

        {/* Sidebar Holder */}
        <Navsidebar2 />
        {/* Page Content Holder */}
        <div
          id="content"
          style={{ background: "rgb(2, 34, 121)", color: "white" }}
        >
          <div className="content-admin-main">
          <Slider {...settings}>
              <div
                onClick={() => window.location.reload(Navigate("/insurance1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                
                <FaRegAddressCard  style={{ fontSize: "30px", color: "white" , marginLeft:'20px'}} />
                <br />
                Insurance
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/pancardform1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FaRegAddressCard style={{ fontSize: "30px", color: "white" ,marginLeft:'12px' }} />
                Pancard
              </div>
            
              <div
                onClick={() => window.location.reload(Navigate("/railwayticket1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <MdDirectionsRailway style={{ fontSize: "30px", color: "white" ,marginLeft:'12px' }} />
                Railway
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/voteridcard1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FaRegAddressCard style={{ fontSize: "30px", color: "white" , marginLeft:'12px' }} />
                Voterid
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/pfwithdraw1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <LuStepForward style={{ fontSize: "30px", color: "white" , marginLeft:'2px'}}/>
                EPFO
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/msme1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FaToolbox  style={{ fontSize: "30px", color: "white" ,marginLeft:'8px'}}/>
                MSME
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/other1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FaDatabase style={{ fontSize: "30px", color: "white" ,marginLeft:'20px' }} />
                Resumecv
              </div>

              <div
                onClick={() => window.location.reload(Navigate("/other1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <GrUserPolice style={{ fontSize: "30px", color: "white" ,marginLeft:'22px' }}/>
                GdConstable
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/eshramcard1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <TbSunElectricity style={{ fontSize: "30px", color: "white" ,marginLeft:'6px' }}/>
                Eshram
              </div>
              <div
                onClick={() => window.location.reload(Navigate("/query1"))}
                className="col-lg-2 mb-4 text-center clickk1"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FaStackExchange style={{ fontSize: "30px", color: "white" ,marginLeft:'4px' }}/>
                Query
              </div>
            </Slider>
           
            <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                  Dashboard 
                  {/* <span className="fa fa-reorder" /> */}
                </a>
                
              </div>
              {/* <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                   Wallet Amount 3000
                
                </a>
                
              </div> */}
            </div>

            {/* <div className="aon-admin-heading">
              <h4>Dashboard</h4>
            </div> */}
            <div className="card aon-card">
              {/* <div className="card-header aon-card-header"><h4><i className="fa fa-user" /> About me</h4></div> */}
              <div className="card-body aon-card-body">
                <div className="row">
                  {/* <div className="col-xl-6">
                    <div className="aon-staff-avtar">
                      <div
                        className="aon-staff-avtar-footer"
                        style={{ background: "#0cb6f5" , borderRadius:'10px' }}
                      >
                        <h4
                          className="aon-staff-avtar-title"
                          style={{ color: "white" }}
                        >
                          Welcome , Jarvis
                        </h4>
                        <ul>
                          <li style={{ color: "white" }}>
                          

                            SM ID {" "}
                            <button style={{marginLeft:'20px'}}
                              type="button"
                              className="admin-button btn-sm aon-company-static-num counter "
                              
                            >
                              9928766361311880
                            </button>
                          </li>
                          <li style={{ color: "white" }}>
                          <span class="feather-user-pic"><img style={{height:'50px', paddingTop:'10px' , width:'50px'}} src="images/contact-us/3757881.png" alt=""/></span>
                             <font style={{marginLeft:'20px'}}>SRL SKASH WALLET:{" "}</font><br/>
                             <button style={{marginLeft:'70px'}}
                              type="button"
                              className="admin-button btn-sm aon-company-static-num counter "
                              
                            >
                              2201.59
                            </button>{" "}
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Recharge
                            </button>
                          </li>


                          <li style={{ color: "white" }}>
                          <span class="feather-user-pic"><img style={{height:'50px' ,paddingTop:'10px' , width:'50px'}} src="images/contact-us/3757881.png" alt=""/></span>
                             <font style={{marginLeft:'20px'}}>AEPS WALLET:{" "}</font><br/>
                             <button style={{marginLeft:'70px'}}
                              type="button"
                              className="admin-button btn-sm aon-company-static-num counter "
                              
                            >
                              2201.59
                            </button>{" "}
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Recharge
                            </button>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-xl-12">
                    <div className="row">
                      <div className="aon-staff-avtar">
                        <div
                          className="aon-staff-avtar-footer"
                          style={{
                            background: backgroundColor,
                            borderRadius: "10px",
                          }}
                        >
                          <h4
                            className="aon-staff-avtar-title"
                            style={{ color: "" }}
                          >
                            Notifications :-
                          </h4>
                          <marquee behavior="alternate"
                            ref={marqueeRef}
                            scrollamount="8"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <ul className="ml-2 mr-2">
                              <li style={{ color: "white" ,fontSize:'16px' }}>
                                {/* SM ID:{" "} */}
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  style={{fontSize:'17px'}}>
                                  बेहतर सुविधा व सपोर्ट के लिए अपनी 'Profile'
                                  तुरंत अपडेट करे
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  वैबसाइट में समस्या आने पर 'History' और 'Cache'
                                  को डिलीट करें व 'Refresh' करके दोबारा चलाएं
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  'Refund' का अधिकतम समय 7-10 दिन तक हो सकता है
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  'Other Form' ऑप्शन में सभी तरह के फॉर्म भरे
                                  जाते है
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  फॉर्म भरते समय अधिक जानकारी 'Share' करने के
                                  लिए 'Add Detail' का उपयोग करें
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  'Form Final Submit' होने का अधिकतम समय 6 घंटे
                                  तक हो सकता है
                                </button>
                              </li>
                              <li style={{ color: "white" }}>
                                {/* SM ID:{" "} */}
                                <button style={{fontSize:'17px'}}
                                  type="button"
                                  className="admin-button btn-sm "
                                >
                                  हम केवल सही व सुचारु रूप से फॉर्म भरने के
                                  गारण्टी लेते है किसी भी प्रकार के 'Objection'
                                  और 'Rejection' में हमारी कोई ज़िम्मेदारी नहीं है
                                </button>
                              </li>
                            </ul>
                          </marquee>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="card aon-card">
              <div className="card-body aon-card-body">
                <div className="row">
                  <div
                    className="col-md-2"
                    style={{height:'160px' , 
                      background: "rgb(149 157 149)",
                      

                      boxShadow: "5px 0px 0px 0px  rgb(50 217 50)",
                    }}
                  >
                    <div className="aon-staff-avtar">
                      <br />
                      <button style={{  background:'rgb(50 217 50)'}}
                        type="button"
                        className="admin-button btn-sm "
                        
                      >
                         Add Balance
                      </button>

                      <br />

                      <p style={{  color:'rgb(50 217 50)'}}>₹ 40</p>
                    </div>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    className="col-md-2"
                    style={{height:'160px' ,
                      background: "rgb(112 106 106)",
                      

                      boxShadow: "5px 0px 0px 0px  #b5f3df",
                    }}
                  >
                    <div className="aon-staff-avtar">
                      <br />
                      <strong style={{color:'#b5f3df'}}>
                        Total Application
                      </strong>

                      <br />

                      <p style={{background:'#b5f3df' , color:'black'}} className="admin-button btn-sm ">14</p>
                    </div>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    className="col-md-2"
                    style={{height:'160px' ,
                      background: "rgb(22 232 253)",
                      

                      boxShadow: "5px 0px 0px 0px  green"
                    }}
                  >
                    <div className="aon-staff-avtar">
                      <br />
                      <strong style={{color:'green'}}
                      >
                        Approved Application
                      </strong>

                      <br />

                      <p style={{color:'white' , background:'green'}} className="admin-button btn-sm ">4</p>
                    </div>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    className="col-md-2"
                    style={{height:'160px' ,
                      background: "rgb(211 196 194)",
                      boxShadow: "5px 0px 0px 0px  red"
                    }}
                  >
                    <div className="aon-staff-avtar">
                      <br />
                      <strong style={{color:'red'}}
                      >
                        Reject Application
                      </strong>

                      <br />

                      <p style={{background:'red' , color:'white'}} className="admin-button btn-sm ">14</p>
                    </div>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    className="col-md-3"
                    style={{height:'160px' ,
                      background: "rgb(0 0 0)",
                      

                      boxShadow: "5px 0px 0px 0px  #ffef29d6"
                    }}
                  >
                    <div className="aon-staff-avtar">
                      <br />
                      <strong
                        strong style={{color:'#ffef29d6'}}
                      >
                        Pending Application
                      </strong>

                      <br />

                      <p style={{background:'#ffef29d6' , color:'black'}} className="admin-button btn-sm ">14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

<div className="site-bg-primary ">
              <div className="container">
                <div className="section-content">
                  <div className="row d-flex flex-wrap align-items-center a-b-none">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      {/*Statics-blocks Section Start*/}
                      <div className="aon-statics-blocks">
                        <div className="row">
                          {/*Block 1*/}

                          <div class="col-lg-3  m-b30 aon-static-position-2">
                            <div class="media-bg-animate media-statics aon-icon-effect">
                              <div class="aon-static-section aon-t-green">
                                <div class="aon-company-static-num counter aon-icon">
                                  68
                                </div>
                                <div class="aon-company-static-name">
                                  Total Application
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 m-b30 aon-static-position-2">
                            <div class="media-bg-animate media-statics aon-icon-effect">
                              <div class="aon-static-section aon-t-red">
                                <div
                                  class="aon-company-static-num counter aon-icon"
                                  style={{ color: "red" }}
                                >
                                  39
                                </div>
                                <div
                                  class="aon-company-static-name"
                                  style={{ color: "red" }}
                                >
                                  Reject Application
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 m-b30 aon-static-position-2">
                            <div class="media-bg-animate media-statics aon-icon-effect">
                              <div class="aon-static-section aon-t-skyblue">
                                <div class="aon-company-static-num counter aon-icon">
                                  59
                                </div>
                                <div class="aon-company-static-name">
                                  Pending Application
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-3 m-b30 aon-static-position-2">
                            <div class="media-bg-animate media-statics aon-icon-effect">
                              <div class="aon-static-section aon-t-green">
                                <div class="aon-company-static-num counter aon-icon">
                                  78
                                </div>
                                <div class="aon-company-static-name">
                                  Approved Application
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Statics-blocks Section End*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card aon-card">
              <div className="card-body aon-card-body">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <div className="aon-staff-avtar">
                      <div
                        className="aon-staff-avtar-footer"
                        style={{ background: "" }}
                      >
                        <h4 className="aon-staff-avtar-title">
                          Subscribed Services
                        </h4>
                        <ul
                          style={{
                            overflow: "scroll",
                            height: "400px",
                            width: "100%",
                          }}
                        >
                          <li>
                            <img
                              src="./images/vid-img.jpg"
                              style={{ height: "100px", width: "100%" }}
                            />
                            <br />
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Insurance
                            </button>
                          </li>

                          <li>
                            <img
                              src="./images/payment.jpg"
                              style={{ height: "100px", width: "100%" }}
                            />
                            <br />
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Railway Ticket
                            </button>
                          </li>

                          <li style={{ color: "white" }}>
                            <img
                              src="./images/gove.webp"
                              style={{ height: "100px", width: "100%" }}
                            />
                            <br />
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Police Help
                            </button>
                          </li>

                          <li style={{ color: "white" }}>
                            <img
                              src="./images/sarkari1.jpg"
                              style={{ height: "100px", width: "100%" }}
                            />
                            <br />
                            <button
                              type="button"
                              className="admin-button btn-sm "
                              
                            >
                              Passport
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div> */}

                    {/* <div className="aon-staff-avtar">
                      <div
                        className="aon-staff-avtar-footer pt-3"
                        style={{ background: "#022279" }}
                      >
                        <h4
                          className="aon-staff-avtar-title"
                          style={{ color: "white" }}
                        >
                          Maximize your earning potential with accurate income
                          calculations.{" "}
                        </h4>
                        <button
                          type="button"
                          className="admin-button btn-sm "
                          
                        >
                          Income Calculator
                        </button>
                      </div>
                    </div> */}
                  </div>

                  <div className="col-xl-12">
                    <div className="aon-staff-avtar">
                      <div className="aon-staff-avtar-footer">
                        <h4 className="aon-staff-avtar-title">
                          Recent History
                        </h4>

                        <div className="table-responsive">
                          <table
                            className="table table-striped table-bordered example-table aon-booking-table"
                            style={{ width: "100%" }}
                          >
                            <thead>
                              <tr>
                                <th>Service</th>
                                <th>Txn Id</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="sf-booking-info-col">
                                    <div className="sf-booking-customer">
                                      <ul className="customer-info">
                                        <li>Minimum transaction</li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner">
                                    <h3>
                                      <span
                                        className="sf-booking-payment-info"
                                        data-container="body"
                                        data-placement="top"
                                        id="payinfo-1115"
                                        data-original-title
                                        title
                                      >
                                        85.00₹{" "}
                                      </span>
                                      <span className="sf-payment-status">
                                        Paid
                                      </span>
                                    </h3>
                                    <div
                                      id="popover-content-payinfo-1115"
                                      className="hide sf-pop-hide"
                                    >
                                      <ul className="list-unstyled margin-0 booking-payment-data">
                                        <li>
                                          <strong>Total Amount:</strong> 85.00₹
                                        </li>
                                        <li>
                                          <strong>Providers Fee:</strong> 57.00₹
                                        </li>
                                        <li>
                                          <strong>Admin Fee:</strong> 28.00₹
                                        </li>
                                        <li>
                                          <strong>Payment Method:</strong>{" "}
                                        </li>
                                        <li>
                                          <strong>
                                            Admin pay to providers:
                                          </strong>{" "}
                                          Pending
                                        </li>
                                        <li>
                                          <strong>Transaction ID:</strong> NA
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="admin-button btn-sm "
                                  >
                                    40
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="sf-booking-info-col">
                                    <div className="sf-booking-customer">
                                      <ul className="customer-info">
                                        <li>Minimum transaction</li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner">
                                    <h3>
                                      <span
                                        className="sf-booking-payment-info"
                                        data-container="body"
                                        data-placement="top"
                                        id="payinfo-1114"
                                        data-original-title
                                        title
                                      >
                                        85.00₹{" "}
                                      </span>
                                      <span className="sf-payment-status">
                                        Paid
                                      </span>
                                    </h3>
                                    <div
                                      id="popover-content-payinfo-1114"
                                      className="hide sf-pop-hide"
                                    >
                                      <ul className="list-unstyled margin-0 booking-payment-data">
                                        <li>
                                          <strong>Total Amount:</strong> 85.00₹
                                        </li>
                                        <li>
                                          <strong>Providers Fee:</strong> 57.00₹
                                        </li>
                                        <li>
                                          <strong>Admin Fee:</strong> 28.00₹
                                        </li>
                                        <li>
                                          <strong>Payment Method:</strong>{" "}
                                        </li>
                                        <li>
                                          <strong>
                                            Admin pay to providers:
                                          </strong>{" "}
                                          Pending
                                        </li>
                                        <li>
                                          <strong>Transaction ID:</strong> NA
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="admin-button btn-sm "
                                  >
                                    40
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="sf-booking-info-col">
                                    <div className="sf-booking-customer">
                                      <ul className="customer-info">
                                        <li>Minimum transaction</li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner">
                                    <h3>
                                      <span
                                        className="sf-booking-payment-info"
                                        data-container="body"
                                        data-placement="top"
                                        id="payinfo-11113"
                                        data-original-title
                                        title
                                      >
                                        85.00₹{" "}
                                      </span>
                                      <span className="sf-payment-status">
                                        Paid
                                      </span>
                                    </h3>
                                    <div
                                      id="popover-content-payinfo-11113"
                                      className="hide sf-pop-hide"
                                    >
                                      <ul className="list-unstyled margin-0 booking-payment-data">
                                        <li>
                                          <strong>Total Amount:</strong> 85.00₹
                                        </li>
                                        <li>
                                          <strong>Providers Fee:</strong> 57.00₹
                                        </li>
                                        <li>
                                          <strong>Admin Fee:</strong> 28.00₹
                                        </li>
                                        <li>
                                          <strong>Payment Method:</strong>{" "}
                                        </li>
                                        <li>
                                          <strong>
                                            Admin pay to providers:
                                          </strong>{" "}
                                          Pending
                                        </li>
                                        <li>
                                          <strong>Transaction ID:</strong> NA
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="admin-button btn-sm "
                                  >
                                    40
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>



                 
                

                
                 
                  
                </div>

                <div className="col-xl-12">
                    <div className="aon-staff-avtar">
                      
                      <div className="aon-staff-avtar-footer">
                      <h4 className="aon-staff-avtar-title">
                      Advertisement
                        </h4>
                        <img src="images/Advertisment.png"/>

                        
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

export default Dashboard2;
