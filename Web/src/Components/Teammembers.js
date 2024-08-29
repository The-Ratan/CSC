import React from 'react'
import Navsidebar from './Navsidebar'

import Header2 from './Header2'

const Teammembers = () => {
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
                <h4>Add Team Members</h4>
              </div>                
              <div className="card aon-card" >
                <div className="card-body aon-card-body">
                  <div className="sf-bd-data-tb-head">
                    <button className="admin-button" data-toggle="modal" data-target="#addteammembers" type="button">
                      <i className="fa fa-plus" />
                      Add Team Members  
                    </button>
                  </div> 
                  <div className="sf-bs-data-table">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered example-table" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="th1" name="abc"  type="radio" />
                                <label htmlFor="th1">
                                  <span className="btn btn-danger btn-xs" title="Delete">
                                    <i className="fa fa-trash-o" />
                                  </span>
                                </label>
                              </div>
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Is Admin?</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td2" name="abc"  type="radio" />
                                <label htmlFor="td2" />
                              </div>
                            </td>
                            <td>James Miller</td>
                            <td>+01 234 567 89</td>
                            <td>xyz78576@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td11" name="abc"  type="radio" />
                                <label htmlFor="td11" />
                              </div>
                            </td>
                            <td>Devid</td>
                            <td>+01 234 567 67</td>
                            <td>demo123@gmail.com</td>
                            <td>No</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td33" name="abc"  type="radio" />
                                <label htmlFor="td33" />
                              </div>
                            </td>
                            <td>Jilly</td>
                            <td>+01 234 567 49</td>
                            <td>sample@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td44" name="abc"  type="radio" />
                                <label htmlFor="td44" />
                              </div>
                            </td>
                            <td>James Miller</td>
                            <td>+01 234 567 89</td>
                            <td>xyz78576@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td55" name="abc"  type="radio" />
                                <label htmlFor="td55" />
                              </div>
                            </td>
                            <td>Devid</td>
                            <td>+01 234 567 67</td>
                            <td>demo123@gmail.com</td>
                            <td>No</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td66" name="abc"  type="radio" />
                                <label htmlFor="td66" />
                              </div>
                            </td>
                            <td>Jilly</td>
                            <td>+01 234 567 49</td>
                            <td>sample@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td77" name="abc"  type="radio" />
                                <label htmlFor="td77" />
                              </div>
                            </td>
                            <td>James Miller</td>
                            <td>+01 234 567 89</td>
                            <td>xyz78576@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td88" name="abc"  type="radio" />
                                <label htmlFor="td88" />
                              </div>
                            </td>
                            <td>Devid</td>
                            <td>+01 234 567 67</td>
                            <td>demo123@gmail.com</td>
                            <td>No</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td99" name="abc"  type="radio" />
                                <label htmlFor="td99" />
                              </div>
                            </td>
                            <td>Jilly</td>
                            <td>+01 234 567 49</td>
                            <td>sample@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td111" name="abc"  type="radio" />
                                <label htmlFor="td111" />
                              </div>
                            </td>
                            <td>James Miller</td>
                            <td>+01 234 567 89</td>
                            <td>xyz78576@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td999" name="abc"  type="radio" />
                                <label htmlFor="td999" />
                              </div>
                            </td>
                            <td>Devid</td>
                            <td>+01 234 567 67</td>
                            <td>demo123@gmail.com</td>
                            <td>No</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox sf-radio-checkbox">
                                <input id="td100" name="abc"  type="radio" />
                                <label htmlFor="td100" />
                              </div>
                            </td>
                            <td>Jilly</td>
                            <td>+01 234 567 49</td>
                            <td>sample@gmail.com</td>
                            <td>Yes</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>       
        {/* Modal add group*/}
        <div className="modal fade content-admin-main" id="addteammembers" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog model-w800" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Team Members</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="sf-md-padding">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="profile-pic-bx">
                          <div className="rwmb-field rwmb-plupload_image-wrapper">
                            <div className="rwmb-input">
                              <div style={{position: 'relative'}}>
                                <div className="drag-drop-inside text-center"> 
                                  <div className="m-tb20 team-user-avtar-pic"><img src="images/user.jpg" alt="" /></div>
                                  <div className="drag-drop-buttons">
                                    <input type="file"  />
                                    <input type="button"  className="admin-button" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <div className="aon-inputicon-box"> 
                          <input className="form-control sf-form-control" name="company_name" type="text" />
                          <i className="aon-input-icon fa fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Member Email</label>
                        <div className="aon-inputicon-box"> 
                          <input className="form-control sf-form-control" name="company_name" type="text" />
                          <i className="aon-input-icon fa fa-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Member Phone</label>
                        <div className="aon-inputicon-box"> 
                          <input className="form-control sf-form-control" name="company_name" type="text" />
                          <i className="aon-input-icon fa fa-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Services</label>
                        <div className="aon-inputicon-box"> 
                          <div className="radio-inline-box radio-inline-box-warp">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc1" name="abc"  type="radio" />
                              <label htmlFor="loc1">WEB APPLICATION DEVELOPMENT</label>
                            </div>
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc2" name="abc"  type="radio" />
                              <label htmlFor="loc2">APPLICATION DEVELOPMENT </label>
                            </div>
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc3" name="abc"  type="radio" />
                              <label htmlFor="loc3">MOBILE APPS DEVELOPMENT </label>
                            </div>
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc4" name="abc"  type="radio" />
                              <label htmlFor="loc4">IT SUPPORT SERVICES</label>
                            </div>
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc5" name="abc"  type="radio" />
                              <label htmlFor="loc5">GAME DEVELOPMENT</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="admin-button" data-dismiss="modal">Cancel</button>
                <button type="button" className="admin-button">Create</button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
  )
}

export default Teammembers
