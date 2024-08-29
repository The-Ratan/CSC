import React from 'react'
import Header from './Header' 
import Footer from './Footer'
const Continuereg = () => {
  return (
    <div>
      
        <div className="page-wraper">        {/* HEADER START */}
          <Header/>
          {/* HEADER END */}
          {/* Content */}
          <div className="page-content">
            {/*Top Banner Section Start*/}
            <div className="sf-profile-banner-full" style={{paddingTop:'70px'}}>
              <div className="container sf-proBnrfull-container">
                <div className="sf-proBnrfull-row">
                  {/*Top Banner Left*/}
                  <div className=" sf-proBnrfull-left">
                  </div>
                  {/*Top Banner Right*/}
                  <div className=" sf-proBnrfull-right">
                    <h2 className=" sf-proBnrfull-heading">Continue Registrastion</h2>
                    <div className=" sf-proBnrfull-tagline">We Provide best services</div>
                  </div>
                </div>
              </div>
            </div>
            {/*Top Banner Section End*/}
            {/*Nav Section Start*/}
          
            {/*Nav Section End*/}
            <div className="container">
              {/*About Provider*/}           
              <div className="sf-provi-bio-box cleafix margin-b-50 sf-provi-fullBox">
                {/*Left*/}
               
                {/*Right*/}
               
              </div>
              {/*About Provider End*/}
              {/*Service List Start*/}
             
              {/*Service List End*/}
              {/*Request a Quote*/}
              <div id="aon-provider-Req-quote" className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox">
                <h3 className="sf-provi-title">Continue Your Registration</h3>
                <div className="sf-divider-line" />                
                <div className="sf-provi-qform">
                  <form action="https://aonetheme.com/sf-html-demo/profile-full.html?" method="post">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="form-group">
                          <label>Form ID</label>
                          <input name="name" type="text" required className="form-control" />
                        </div>
                      </div>
                     
                    



                    
                      <div className="col-md-6">
                      <h3>OR</h3>
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input name="message" rows={8} className="form-control" defaultValue={""} />
                        </div>
                      </div>
                     
                      <div className="col-md-12">
                        <div className="form-group text-center qout-submit-btn">
                          
                          <input type="submit" defaultValue="Send information" className="site-button" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            
             
           
           
            </div>
          </div>
          {/* Content END*/}        {/* FOOTER START */}
         <Footer/>
          {/* FOOTER END */}
          {/* BUTTON TOP START */}
          <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>
          {/* Booking Summery box */}
          <div className="sf-summery-box">
            <button className="sf-suumery-close">
              <i className="fa fa-close" />
            </button>
            <div className="sf-summery-total">
              <span className="sf-sum-cel-one">Total Amount</span>
              <span className="sf-sum-cel-four">$185.25</span>
            </div>
            <div className="sf-summery-inr">
              <ul>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>
                <li>
                  <div className="sf-sum-cel-one">
                    <strong>Home Cleaning </strong>
                    <span>01:30 to 02:30</span>
                    <span>12 MAR  2022</span>
                  </div>
                  <div className="sf-sum-cel-four">$18.25</div>
                </li>                   
              </ul>
            </div>
          </div>
        </div>
        {/* Login Sign Up Modal */}
        <div className="modal fade" id="login-signup-model">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close aon-login-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <div className="sf-custom-tabs sf-custom-new aon-logon-sign-area p-3">
                  {/*Tabs*/}
                  <ul className="nav nav-tabs nav-table-cell">
                    <li><a data-toggle="tab" href="#Upcoming" className="active">Login</a></li>
                    <li><a data-toggle="tab" href="#Past">Sign up</a></li>
                  </ul>
                  {/*Tabs Content*/} 
                  <div className="tab-content">
                    {/*Login Form*/}
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="company_name" type="text" placeholder="User Name" />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="company_name" type="password" placeholder="Password" />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group d-flex aon-login-option justify-content-between">
                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    <input id="td2_2" name="abc" defaultValue="five" type="checkbox" />
                                    <label htmlFor="td2_2">Keep me logged</label>
                                  </div>  
                                </div>
                                <div className="aon-login-opright">
                                  <a href="#">Forget Password</a>
                                </div>
                              </div>
                            </div>  
                            <div className="col-md-12">
                              <button type="submit" className="site-button w-100">Submit <i className="feather-arrow-right" /> </button>
                            </div>                                          
                          </div>
                        </form>
                      </div>
                    </div>
                    {/*Sign up Form*/}
                    <div id="Past" className="tab-pane">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="First_Name" type="text" placeholder="First Name" />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="company_name" type="password" placeholder="Last Name" />
                                  <i className="aon-input-icon fa fa-user" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="Phone" type="password" placeholder="Phone" />
                                  <i className="aon-input-icon fa fa-phone" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="email" type="password" placeholder="Email" />
                                  <i className="aon-input-icon fa fa-envelope-o" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="password" type="password" placeholder="Password" />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="aon-inputicon-box"> 
                                  <input className="form-control sf-form-control" name="password" type="password" placeholder="Confirm Password" />
                                  <i className="aon-input-icon fa fa-lock" />
                                </div>
                              </div>
                            </div>                                        
                            <div className="col-md-12">
                              <div className="form-group sign-term-con">
                                <div className="checkbox sf-radio-checkbox">
                                  <input id="td33" name="abc" defaultValue="five" type="checkbox" />
                                  <label htmlFor="td33">I've read and agree with your <a href="#">Privacy Policy</a> and <a href="#">Terms &amp; Conditions</a> </label>
                                </div>
                              </div>
                            </div>  
                            <div className="col-md-12">
                              <button type="submit" className="site-button w-100">Submit <i className="feather-arrow-right" /> </button>
                            </div>                                          
                          </div>
                        </form>
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

export default Continuereg


