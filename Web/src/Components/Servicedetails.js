import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Servicedetails = () => {
  return (
    <div>
         <div className="page-wraper">        {/* HEADER START */}
         <Header/>
          {/* HEADER END */}
          {/* Content */}
          <div className="page-content">
            {/*Top Banner Section Start*/}
            <div className="sf-profile-banner-full" style={{paddingTop:'px'}}>
              <div className="container sf-proBnrfull-container">
                <div className="sf-proBnrfull-row">
                  {/*Top Banner Left*/}
                  {/* <div className=" sf-proBnrfull-left">
                  </div> */}

<div className=" sf-proBnrfull-lef">
                    <img src='./images/banner/services.avif' style={{width:'100%' ,height:'700px' , backgroundPosition:'center' , backgroundSize:'cover' 
                      }}/>

{/* background-position: center;

background-size: cover; */}
                  </div>
                  {/*Top Banner Right*/}
                  <div className=" sf-proBnrfull-right">
                    <h2 className=" sf-proBnrfull-heading">Our  Services</h2>
                    <div className=" sf-proBnrfull-tagline">We Provide best Services</div>
                  </div>
                </div>
              </div>
            </div>
            {/*Top Banner Section End*/}
            {/*Nav Section Start*/}
           
            {/*Nav Section End*/}
            <div className="container">
              {/*About Provider*/}           
              
              {/*About Provider End*/}
              {/*Service List Start*/}
             <br/>
             <div className="aon-news-section-wrap sf-curve-pos">
                            <div className="container">
                                {/*Title Section Start*/}
                                <div className="section-head">
                                    <div className="row">
                                         <div className="col-lg-6 col-md-12">
                                            <h2 className="sf-title">Our Services</h2>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-12">
                f                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div> */}
                                    </div>
                                </div>
                                {/*Title Section End*/}
                                <div className="section-content">
                                    <div className="row">
                                        {/* COLUMNS 1 */}
                                        <div className="col-md-4 mt-2">
                                            <div className="media-bg-animate">
                                                <div className="aon-blog-section-1 shine-hover">
                                                    <div className="aon-post-media shine-box">
                                                        <a href="/servicedetails"><img style={{height:'236px'}} src="./images/gove.webp" alt /></a>
                                                    </div>
                                                    <div className="aon-post-meta">
                                                        <ul>
                                                            <li className="aon-post-category">Government ID Cards</li>
                                                            {/* <li className="aon-post-author"><a href="/servicedetails">By |<span>Admin</span></a> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="aon-post-info ">
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Pan Card</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Voter Card</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Labour Card</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Passport</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>UDID Card</button>
                                                        {/* <h4 className="aon-post-title"><a href="/servicedetails">Helping Companies in their Green.</a></h4>
                                                        <div className="aon-post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <div className="media-bg-animate">
                                                <div className="aon-blog-section-1 shine-hover">
                                                    <div className="aon-post-media shine-box">
                                                        <a href="/servicedetails"><img style={{height:'236px'}} src="./images/edu.avif" alt /></a>
                                                    </div>
                                                    <div className="aon-post-meta">
                                                        <ul>
                                                            <li className="aon-post-category">Education</li>
                                                            {/* <li className="aon-post-author"><a href="/servicedetails">By |<span>Admin</span></a> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="aon-post-info">
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Admission</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Assignment</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Project</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Help Book</button>
                                                        {/* <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>UPmang</button> */}
                                                        {/* <h4 className="aon-post-title"><a href="/servicedetails">Helping Companies in their Green.</a></h4>
                                                        <div className="aon-post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <div className="media-bg-animate">
                                                <div className="aon-blog-section-1 shine-hover">
                                                    <div className="aon-post-media shine-box">
                                                        <a href="/servicedetails"><img style={{height:'236px'}} src="./images/epfo.jpeg" alt /></a>
                                                    </div>
                                                    <div className="aon-post-meta">
                                                        <ul>
                                                            <li className="aon-post-category">EPFO</li>
                                                            {/* <li className="aon-post-author"><a href="/servicedetails">By |<span>Admin</span></a> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="aon-post-info">
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>PF Withdrawal</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>E- Kyc</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Nomination</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>MID Transfer</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>UAN Activation</button>
                                                        {/* <h4 className="aon-post-title"><a href="/servicedetails">Helping Companies in their Green.</a></h4>
                                                        <div className="aon-post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <div className="media-bg-animate">
                                                <div className="aon-blog-section-1 shine-hover">
                                                    <div className="aon-post-media shine-box">
                                                        <a href="/servicedetails"><img src="./images/sarkari1.jpg" alt style={{height:'236px'}} /></a>
                                                    </div>
                                                    <div className="aon-post-meta">
                                                        <ul>
                                                            <li className="aon-post-category">Sarkari Result</li>
                                                            {/* <li className="aon-post-author"><a href="/servicedetails">By |<span>Admin</span></a> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="aon-post-info">
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>SSC</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>CTET</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>SBI Clerk</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Anganwadi</button>
                                                        {/* <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>UPmang</button> */}
                                                        {/* <h4 className="aon-post-title"><a href="/servicedetails">Helping Companies in their Green.</a></h4>
                                                        <div className="aon-post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mt-2">
                                            <div className="media-bg-animate">
                                                <div className="aon-blog-section-1 shine-hover">
                                                    <div className="aon-post-media shine-box">
                                                        <a href="/servicedetails"><img src="./images/7592.avif" style={{height:'236px'}} alt /></a>
                                                    </div>
                                                    <div className="aon-post-meta">
                                                        <ul>
                                                            <li className="aon-post-category">Frequently Used Services</li>
                                                            {/* <li className="aon-post-author"><a href="/servicedetails">By |<span>Admin</span></a> </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="aon-post-info">
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Border Tax</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>E- Challan</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>FIR</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>PCC</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Insurance</button>
                                                        <button className='btn btn- click' style={{margin:"5px" , border:"1px solid" ,borderRadius:""}}>Railway Ticket</button>
                                                        {/* <h4 className="aon-post-title"><a href="/servicedetails">Helping Companies in their Green.</a></h4>
                                                        <div className="aon-post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                                        </div> */}
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

export default Servicedetails









