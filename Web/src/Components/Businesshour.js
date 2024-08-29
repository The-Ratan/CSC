import React from 'react'

import Navsidebar from './Navsidebar'
import Header2 from './Header2'

const Businesshour = () => {
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
                <h4>Business Hours</h4>
              </div>                
              <div className="card aon-card">
                <div className="card-body aon-card-body">
                  {/*Monday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Monday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Tuesday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Tuesday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Wednesday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Wednesday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Thursday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Thursday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Friday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Friday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Saturday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Saturday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Sunday*/}
                  <div className="row working-hours-admin m-b10 staff-schedule-item-row">
                    <div className="col-lg-3">
                      <div className="sf-bh-onoff">
                        <h5>Sunday</h5> 
                        <input type="checkbox" defaultChecked data-toggle="toggle" data-size="sm" />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row sf-bh-timing-row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Start Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00" selected="selected">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>End Time</label>
                            <select name="start_time[0]" className="working-start sf-select-box bs-select-hidden">
                              <option value="00:00:00">12:00 am</option>
                              <option value="00:15:00">12:15 am</option>
                              <option value="00:30:00">12:30 am</option>
                              <option value="00:45:00">12:45 am</option>
                              <option value="01:00:00">1:00 am</option>
                              <option value="01:15:00">1:15 am</option>
                              <option value="01:30:00">1:30 am</option>
                              <option value="01:45:00">1:45 am</option>
                              <option value="02:00:00">2:00 am</option>
                              <option value="02:15:00">2:15 am</option>
                              <option value="02:30:00">2:30 am</option>
                              <option value="02:45:00">2:45 am</option>
                              <option value="03:00:00">3:00 am</option>
                              <option value="03:15:00">3:15 am</option>
                              <option value="03:30:00">3:30 am</option>
                              <option value="03:45:00">3:45 am</option>
                              <option value="04:00:00">4:00 am</option>
                              <option value="04:15:00">4:15 am</option>
                              <option value="04:30:00">4:30 am</option>
                              <option value="04:45:00">4:45 am</option>
                              <option value="05:00:00">5:00 am</option>
                              <option value="05:15:00">5:15 am</option>
                              <option value="05:30:00">5:30 am</option>
                              <option value="05:45:00">5:45 am</option>
                              <option value="06:00:00">6:00 am</option>
                              <option value="06:15:00">6:15 am</option>
                              <option value="06:30:00">6:30 am</option>
                              <option value="06:45:00">6:45 am</option>
                              <option value="07:00:00">7:00 am</option>
                              <option value="07:15:00">7:15 am</option>
                              <option value="07:30:00">7:30 am</option>
                              <option value="07:45:00">7:45 am</option>
                              <option value="08:00:00">8:00 am</option>
                              <option value="08:15:00">8:15 am</option>
                              <option value="08:30:00">8:30 am</option>
                              <option value="08:45:00">8:45 am</option>
                              <option value="09:00:00">9:00 am</option>
                              <option value="09:15:00">9:15 am</option>
                              <option value="09:30:00">9:30 am</option>
                              <option value="09:45:00">9:45 am</option>
                              <option value="10:00:00">10:00 am</option>
                              <option value="10:15:00">10:15 am</option>
                              <option value="10:30:00">10:30 am</option>
                              <option value="10:45:00">10:45 am</option>
                              <option value="11:00:00">11:00 am</option>
                              <option value="11:15:00">11:15 am</option>
                              <option value="11:30:00">11:30 am</option>
                              <option value="11:45:00">11:45 am</option>
                              <option value="12:00:00">12:00 pm</option>
                              <option value="12:15:00">12:15 pm</option>
                              <option value="12:30:00">12:30 pm</option>
                              <option value="12:45:00">12:45 pm</option>
                              <option value="13:00:00">1:00 pm</option>
                              <option value="13:15:00">1:15 pm</option>
                              <option value="13:30:00">1:30 pm</option>
                              <option value="13:45:00">1:45 pm</option>
                              <option value="14:00:00">2:00 pm</option>
                              <option value="14:15:00">2:15 pm</option>
                              <option value="14:30:00">2:30 pm</option>
                              <option value="14:45:00">2:45 pm</option>
                              <option value="15:00:00">3:00 pm</option>
                              <option value="15:15:00">3:15 pm</option>
                              <option value="15:30:00">3:30 pm</option>
                              <option value="15:45:00">3:45 pm</option>
                              <option value="16:00:00">4:00 pm</option>
                              <option value="16:15:00">4:15 pm</option>
                              <option value="16:30:00">4:30 pm</option>
                              <option value="16:45:00">4:45 pm</option>
                              <option value="17:00:00">5:00 pm</option>
                              <option value="17:15:00">5:15 pm</option>
                              <option value="17:30:00">5:30 pm</option>
                              <option value="17:45:00">5:45 pm</option>
                              <option value="18:00:00" selected="selected">6:00 pm</option>
                              <option value="18:15:00">6:15 pm</option>
                              <option value="18:30:00">6:30 pm</option>
                              <option value="18:45:00">6:45 pm</option>
                              <option value="19:00:00">7:00 pm</option>
                              <option value="19:15:00">7:15 pm</option>
                              <option value="19:30:00">7:30 pm</option>
                              <option value="19:45:00">7:45 pm</option>
                              <option value="20:00:00">8:00 pm</option>
                              <option value="20:15:00">8:15 pm</option>
                              <option value="20:30:00">8:30 pm</option>
                              <option value="20:45:00">8:45 pm</option>
                              <option value="21:00:00">9:00 pm</option>
                              <option value="21:15:00">9:15 pm</option>
                              <option value="21:30:00">9:30 pm</option>
                              <option value="21:45:00">9:45 pm</option>
                              <option value="22:00:00">10:00 pm</option>
                              <option value="22:15:00">10:15 pm</option>
                              <option value="22:30:00">10:30 pm</option>
                              <option value="22:45:00">10:45 pm</option>
                              <option value="23:00:00">11:00 pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-2 sf-add-breaktime-btn">
                          <a href="javascript:;" className="admin-button">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="selected-working-hours">
                          <ul className="list-unstyled">
                            <li>01:00 pm TO 02:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                            <li>02:00 pm TO 04:00 pm <span className="working-hours-remove"><i className="fa fa-close" /></span></li>
                          </ul>
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
  )
}

export default Businesshour
