import React from 'react'
import Header2 from './Header2';
import Navsidebar from './Navsidebar';
const Upgradeaccount = () => {
  return (
    <div>
     
        <div className="page-wraper">
         <Header2/>            
          {/* Sidebar Holder */}
        <Navsidebar/>
          {/* Page Content Holder */}
          <div id="content">
            <div className="content-admin-main">
              <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
                <div className="admin-left-area">
                  <a className="nav-btn-admin d-flex justify-content-between align-items-center" id="sidebarCollapse">
                    {/* <span className="nav-btn-text">Dashboard Menu</span> */}
                    <span className="fa fa-reorder" />
                  </a>
                </div>
                {/* <div className="admin-area-mid">
                  <div className="admin-area-heading">
                    <span>Your Tariff Plan : </span>
                    <strong>Extended <i className="fa fa-caret-down" /></strong>
                  </div>
                  <div className="admin-area-content">you Are on Extended . Use link bellow to view details or upgrade.Details </div>
                </div>
                <div className="admin-right-area">
                  <div className="pro-pic-info-wrap d-flex">
                    <div className="pro-pic-box">
                      <img src="images/user.jpg" alt="" />
                    </div>
                    <div className="pro-pic-info">
                      <strong>David Wood</strong>
                      <span>Designer</span>
                    </div>
                    <span className="feather-icon has-toltip">
                      <i className="feather-power" />
                      <span className="header-toltip">Notification</span>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="aon-admin-heading">
                <h4><strong>Edit Profile</strong></h4>
              </div>                
              <div className="card aon-card">
                <div className="card-header aon-card-header"><h4><i className="fa fa-gear" /> Upgrade Account</h4></div>
                <div className="card-body aon-card-body">
                  <div className="sf-upgrade-account-area">
                    <div className="sf-upgrade-top-area">
                      <div className="row">
                        <div className="col-xl-6">
                          <div id="clockdiv">
                            <div>
                              <span className="days" />
                              <div className="smalltext">Days</div>
                            </div>
                            <div>
                              <span className="hours" />
                              <div className="smalltext">Hours</div>
                            </div>
                            <div>
                              <span className="minutes" />
                              <div className="smalltext">Minutes</div>
                            </div>
                            <div>
                              <span className="seconds" />
                              <div className="smalltext">Seconds</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 text-right">
                          <h4 className="sf-upgrade-top-title">Your Current Plan <span>Gold</span></h4>
                          <button className="admin-button sf-upgrade-btn">Please Renew Your Plan</button>
                        </div>
                      </div>
                    </div>
                    <div className="sf-upgrade-bot-area">
                      <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
                          <div className="sf-upgrade-account-plans">
                            <div className="sf-plans-bx">
                              <h4 className="sf-plans-name">Silver</h4>
                              <div className="sf-plans-price"> USD</div>
                              <div className="sf-plan-list">
                                <ul>
                                  <li><span><i className="fa fa-check" />Booking</span></li>
                                  <li><span><i className="fa fa-check" />Cover Image</span></li>
                                  <li><span><i className="fa fa-check" />Gallery Images</span></li>
                                  <li><span><i className="fa fa-check" />Multiple Categories</span></li>
                                  <li><span><i className="fa fa-check" />Number of Categories</span></li>
                                  <li><span><i className="fa fa-check" />Apply For Job</span></li>
                                  <li><span><i className="fa fa-check" />Job Alerts</span></li>
                                  <li><span><i className="fa fa-check" />Branches</span></li>
                                  <li><span><i className="fa fa-check" />Google Calendar</span></li>
                                  <li><span><i className="fa fa-check" />Invoice</span></li>
                                  <li><span><i className="fa fa-check" />Availability</span></li>
                                  <li><span><i className="fa fa-check" />Staff Members</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="sf-plans-done"><i className="fa fa-check" /></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
                          <div className="sf-upgrade-account-plans selected-plan">
                            <div className="sf-plans-bx">
                              <h4 className="sf-plans-name">Gold</h4>
                              <div className="sf-plans-price">20 USD</div>
                              <div className="sf-plan-list">
                                <ul>
                                  <li><span><i className="fa fa-check" />Booking</span></li>
                                  <li><span><i className="fa fa-check" />Cover Image</span></li>
                                  <li><span><i className="fa fa-check" />Gallery Images</span></li>
                                  <li><span><i className="fa fa-check" />Multiple Categories</span></li>
                                  <li><span><i className="fa fa-check" />Number of Categories</span></li>
                                  <li><span><i className="fa fa-check" />Apply For Job</span></li>
                                  <li><span><i className="fa fa-check" />Job Alerts</span></li>
                                  <li><span><i className="fa fa-check" />Branches</span></li>
                                  <li><span><i className="fa fa-check" />Google Calendar</span></li>
                                  <li><span><i className="fa fa-check" />Invoice</span></li>
                                  <li><span><i className="fa fa-check" />Availability</span></li>
                                  <li><span><i className="fa fa-check" />Staff Members</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="sf-plans-done"><i className="fa fa-check" /></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
                          <div className="sf-upgrade-account-plans">
                            <div className="sf-plans-bx">
                              <h4 className="sf-plans-name">Bronze</h4>
                              <div className="sf-plans-price">50 USD</div>
                              <div className="sf-plan-list">
                                <ul>
                                  <li><span><i className="fa fa-check" />Booking</span></li>
                                  <li><span><i className="fa fa-check" />Cover Image</span></li>
                                  <li><span><i className="fa fa-check" />Gallery Images</span></li>
                                  <li><span><i className="fa fa-check" />Multiple Categories</span></li>
                                  <li><span><i className="fa fa-check" />Number of Categories</span></li>
                                  <li><span><i className="fa fa-check" />Apply For Job</span></li>
                                  <li><span><i className="fa fa-check" />Job Alerts</span></li>
                                  <li><span><i className="fa fa-check" />Branches</span></li>
                                  <li><span><i className="fa fa-check" />Google Calendar</span></li>
                                  <li><span><i className="fa fa-check" />Invoice</span></li>
                                  <li><span><i className="fa fa-check" />Availability</span></li>
                                  <li><span><i className="fa fa-check" />Staff Members</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="sf-plans-done"><i className="fa fa-check" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sf-upgrade-account-btn">
                    <button className="admin-button">Continue</button>
                  </div>                       
                </div>
              </div>
            </div>
          </div>
        </div>       
    
      </div>
  )
}

export default Upgradeaccount
