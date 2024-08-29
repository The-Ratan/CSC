import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Services from './Services'
import Serviceshelp from './Serviceshelp'
import Patnerpage from './Patnerpage'
import Cscnews from './Cscnews'
import Section from './Section'

const About = () => {
  return (
    
    <div>
      
  
     <div className="page-wraper" >        {/* HEADER START */}
      <Header/>
      {/* HEADER END */}
      {/* Content */}
      <div className="page-content" >
        
        {/* Banner Area */}
        <div className="aon-page-benner-area" style={{paddingTop:'70px'}} >
          <div className="aon-page-banner-row"  style={{ backgroundImage: 'url(images/banner/job-banner.jpg)'}}>
            <div className="sf-overlay-main" style={{  opacity: '0.2', backgroundColor: 'cornflowerblue'}} />
            <div className="sf-banner-heading-wrap">
              <div className="sf-banner-heading-area">
                <div className="sf-banner-heading-large">About Us</div>
                <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li><a href="index.html"> Home </a></li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Area End */}
        {/* Why Choose us */}
        <section className="aon-why-choose2-area">
          <div className="container">
            <div className="aon-why-choose2-box">
              <div className="row">
                {/* COLUMNS LEFT */}
                <div className="col-lg-6 col-md-12">
                  <div className="aon-why-choose-info">
                    {/*Title Section Start*/}
                    <div className="section-head">
                      <span className="aon-sub-title">Choose</span>
                      <h2 className="aon-title">Why Choose us</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    {/*Title Section Start End*/}
                    <ul className="aon-why-choose-steps list-unstyled">
                      {/* COLUMNS 1 */}
                      <li className="d-flex">
                        <div className="aon-w-choose-left aon-icon-effect">
                          <div className="aon-w-choose-icon"><i className="aon-icon"><img src="images/whychoose/1.png" alt="" /></i></div>
                        </div>
                        <div className="aon-w-choose-right">
                          <h4 className="aon-title">Meet new customers</h4>
                          <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                        </div>
                      </li>
                      {/* COLUMNS 2 */}
                      <li className="d-flex">
                        <div className="aon-w-choose-left aon-icon-effect">
                          <div className="aon-w-choose-icon"><i className="aon-icon"><img src="images/whychoose/2.png" alt="" /></i></div>
                        </div>
                        <div className="aon-w-choose-right">
                          <h4 className="aon-title">Grow your revenue</h4>
                          <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                        </div>
                      </li>
                      {/* COLUMNS 3 */}
                      <li className="d-flex">
                        <div className="aon-w-choose-left aon-icon-effect">
                          <div className="aon-w-choose-icon"><i className="aon-icon"><img src="images/whychoose/3.png" alt="" /></i></div>
                        </div>
                        <div className="aon-w-choose-right">
                          <h4 className="aon-title">Build your online reputation</h4>
                          <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* COLUMNS RIGHT */}
                <div className="col-lg-6 col-md-12">
                  <div className="aon-why-choose2-line">
                    <div className="aon-why-choose2-pic" />
                  </div>     
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose us END */}              
        {/* About Area */}
        <div className="aon-about-area">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex flex-wrap align-items-center a-b-none">
                <div className="col-lg-6 col-md-12">
                  <div className="aon-about-pic">
                    <img src="images/about-pic.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  {/*Title Section Start*/}
                  <div className="section-head">
                    <span className="aon-sub-title">About</span>
                    <h2 className="sf-title">Upgrade Your Skills With Service Finder</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidal abore et dolore magna aliqua. </p>
                  </div>
                  {/*Title Section End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Area END */}            
        {/* How it Work */}
        <section className="bg-white aon-how-service-area">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {/*Title Section Start*/}
                <div className="col-lg-4 col-md-12">
                  <span className="aon-sub-title">Steps</span>
                  <h2 className="sf-title">How Service Finder Works</h2>
                </div>
                {/*Title Section End*/}
                <div className="col-lg-8 col-md-12">
                  {/* Steps Block Start*/}
                  <div className="aon-step-blocks">
                    <div className="row">
                      {/* COLUMNS 1 */}
                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section step-position-1 aon-icon-effect">
                          <div className="aon-step-icon aon-icon-box">
                            <span>
                              <i className="aon-icon"><img src="images/step-icon/1.png" alt="" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Describe Your Task</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
                          </div>
                        </div>
                      </div>
                      {/* COLUMNS 2 */}
                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section step-position-2 aon-icon-effect">
                          <div className="aon-step-icon">
                            <span>
                              <i className="aon-icon"><img src="images/step-icon/2.png" alt="" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Choose a Tasker</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
                          </div>
                        </div>
                      </div>
                      {/* COLUMNS 3 */}
                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section  step-position-3  aon-icon-effect">
                          <div className="aon-step-icon">
                            <span>
                              <i className="aon-icon"><img src="images/step-icon/3.png" alt="" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Live Smarter</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Steps Block End*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How it Work END */} 
        {/* Statics */}
        <div className="site-bg-primary aon-statics-area">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex flex-wrap align-items-center a-b-none">
                <div className="col-lg-6 col-md-12">
                  {/*Title Section Start*/}
                  <div className="section-head">
                    <span className="aon-sub-title">Statics</span>
                    <h2 className="sf-title">Trusted by thousands of people all over the world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                  </div>
                  {/*Title Section End*/}
                </div>
                <div className="col-lg-6 col-md-12">
                  {/*Statics-blocks Section Start*/}
                  <div className="aon-statics-blocks">
                    <div className="row">
                      {/*Block 1*/}
                      <div className="col-lg-6 m-b30 aon-static-position-1">
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-blue">
                            <div className="aon-company-static-num counter aon-icon">36</div>
                            <div className="aon-company-static-name">Providers</div>
                          </div>
                        </div>
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-yellow">
                            <div className="aon-company-static-num counter aon-icon">108</div>
                            <div className="aon-company-static-name">Jobs</div>
                          </div>
                        </div>
                      </div>
                      {/*Block 2*/}
                      <div className="col-lg-6 m-b30 aon-static-position-2">
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-green">
                            <div className="aon-company-static-num counter aon-icon">89</div>
                            <div className="aon-company-static-name">Customer</div>
                          </div>
                        </div>
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-skyblue">
                            <div className="aon-company-static-num counter aon-icon">59</div>
                            <div className="aon-company-static-name">Categories</div>
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
        {/* Provider END */}
        {/* Testimonial Section */}
       </div>
      {/* Content END*/}
      {/* FOOTER START */}
      <Footer/>
      {/* FOOTER END */}
      {/* BUTTON TOP START */}
      <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>
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

export default About
