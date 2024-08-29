import React from "react";

import Navsidebar from "./Navsidebar";
import Header2 from "./Header2";

const Commissionstructure = () => {
  return (
    <div>
      <div className="page-wraper">
        <Header2 />
        {/* Sidebar Holder */}
        <Navsidebar />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                  {/* <span className="nav-btn-text">Dashboard Menu</span> */}
                  <span className="fa fa-reorder" />
                </a>
              </div>
            </div>
            <div className="aon-admin-heading">
              <h4>Commission Structure</h4>
            </div>
            <div className="card aon-card">
              <div className="card-body aon-card-body" style={{background:'#032c6a' , height:'150px' , width:'100%'}}>
                {/* Week Tabs*/}
                <div className="sf-availability-times-tab m-b50" >
                  <div className="sf-custom-tabs sf-custom-new" >
                  <div class="job_listing type-job_listing job-type-hourly" >
                            <a class="job-clickable-box" href="#"></a>
                           
                            <div class="job-comapny-info pl-0" style={{color:'white'}}>
                              <div class="position pl-0" style={{width:'32%' }}>
                                <h3 style={{ color:'white'}}>Income Calculator</h3>
                                <div class="company"> <strong style={{color:'white'}}>Income per day</strong> </div>
                                <div class="company"> <strong class="admin-nav-label" style={{color:'black'}}>₹ 4000</strong> </div>
                                
                              </div>

                              <div class="position pl-0" style={{width:'32%'}}>
                              <h3 style={{ color:'white'}}>Income Days</h3>
                                <div class="company"> <strong style={{color:'white'}}>Number of days</strong> </div>
                                <div class="company"> <strong class="admin-nav-label" style={{color:'black'}}>30</strong> </div>
                              </div>

                              <div class="position pl-0 " style={{width:'32%'}}>
                              <h3 style={{ color:'white'}}>Total Monthly Income</h3>
                                <div class="company"> <strong style={{color:'white'}}>Number of days</strong> </div>
                                <div class="company"> <strong class="admin-nav-label" style={{color:'black'}}>₹ 12000</strong> </div>
                              </div>

                             

                              
                              


                            </div>
                          </div>
                    {/* <img
                      src="./images/fc.png"
                      style={{
                        height: "200px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    /> */}
                    
                    <div className="tab-content">
                     

                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered example-table aon-booking-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Banking Services</th>
                              <th>Daily Transactions</th>
                              <th>Your income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="sf-booking-info-col">
                                 
                                  <div className="sf-booking-customer">
                                    <ul className="customer-info">
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                      Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                              <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div> 
                               
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                              <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
                                >
                                  40
                                </button>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>



                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered example-table aon-booking-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Utility Services</th>
                              <th>Daily Transactions</th>
                              <th>Your income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="sf-booking-info-col">
                                 
                                  <div className="sf-booking-customer">
                                    <ul className="customer-info">
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                      Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4" >
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
                                >
                                  40
                                </button>
                              </td>
                            </tr>
                            
                           
                          </tbody>
                        </table>
                      </div>









                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered example-table aon-booking-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Insurance</th>
                              <th>Daily Transactions</th>
                              <th>Your income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="sf-booking-info-col">
                                 
                                  <div className="sf-booking-customer">
                                    <ul className="customer-info">
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                      Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                                    <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
                                >
                                  40
                                </button>
                              </td>
                            </tr>
                            
                           
                          </tbody>
                        </table>
                      </div>









                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered example-table aon-booking-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Earn More</th>
                              <th>Daily Transactions</th>
                              <th>Your income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="sf-booking-info-col">
                                 
                                  <div className="sf-booking-customer">
                                    <ul className="customer-info">
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                      Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                              <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
                                      <>
                                        <strong>
                                          <i className="fa fa-user" /> Money Transfer


                                        </strong>
                                      </>
                                      <li>
                                        
                                        Minimum transaction of <span className="sf-payment-status">₹4500</span>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                  
                                </div>
                              </td>
                              <td>
                              <div className="col-md-4">
                        <div className="form-group">
                          
                          <input name="phone" type="number" required placeholder="1" className="form-control" />
                        </div>
                      </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="admin-button btn-sm "
                                  title="Change Status"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commissionstructure;
