import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Earnmore = () => {
  return (
    <div>
     
         <div className="page-wraper">        {/* HEADER START */}
          <Header/>
          {/* HEADER END */}
          {/* Content */}
          <div className="page-content">
            <div className="section-content sf-allCaty-info-wrap">
              <div className="container" style={{paddingTop:'62px'}}>
                {/*Category Detail Section Start*/}
                <div className="row">
                  {/*Category Detail Left*/}
                  <div className="col-md-6">
                    <div className="sf-caty-pic">
                      <div className="sf-caty-btn">View Providers</div>
                      <div className="sf-caty-cirle"><i className="fa fa-arrow-circle-down" /></div>
                    </div>
                  </div>
                  {/*Category Detail Right*/}
                  <div className="col-md-6">
                    <div className="sf-caty-info">
                      <div className="m-b10"><strong>Services </strong> / Earn More</div>
                      <h3>Earn More</h3>
                      <div className="sf-caty-text">
                        <p>Pro house cleaners work with you to assess your home cleaning needs. Whether you need weekly, bi-weekly, or monthly services, 
                          house cleaning professionals can schedule cleanings, so that your home has routine care They can also deep clean the house in 
                          between cleaning, before special occasions, or for move-in and move-out cleaning.</p>
                        <p>On average, house cleaners on Zaarly cost $30 - $50 per hour per house cleaner. The price will depend on factors like size of the home, supplies needed, and special cleaning circumstances. A 2000 square foot home will typically cost $250. One-time deep cleanings will 
                          cost more and signing up for regular cleaning usually will be more cost-effective. </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Category Detail Section End*/}
              </div>
            </div>
            <div className="section-content sf-allCaty-grid-wrap sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="sf-title text-white">All Services</h2>
                    </div>
                    <div className="col-md-6">
                    </div>
                  </div>
                </div>
                {/*Title Section End*/}
                <div className="section-content">
                  <div className="owl-carousel owl-caty-carousel sf-owl-arrow">
                    {/* COLUMNS 1 */}
                    <div className="item sf-caty-item-col">
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic1.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Car Mechanics</a></h5>
                      </div>
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic2.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">House Cleaning</a></h5>
                      </div>
                    </div>
                    {/* COLUMNS 2 */}
                    <div className="item sf-caty-item-col">
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic3.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Kitchen Cleaning</a></h5>
                      </div>
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic4.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Cafe</a></h5>
                      </div>
                    </div>
                    {/* COLUMNS 3 */}
                    <div className="item sf-caty-item-col">
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic5.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Plumber</a></h5>
                      </div>
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic6.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Fitness</a></h5>
                      </div>
                    </div>
                    {/* COLUMNS 4 */}
                    <div className="item sf-caty-item-col">
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic7.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Hair Salon</a></h5>
                      </div>
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic8.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Gym</a></h5>
                      </div>
                    </div>
                    {/* COLUMNS 5 */}
                    <div className="item sf-caty-item-col">
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic9.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Gardening</a></h5>
                      </div>
                      <div className="sf-catyitem-box">
                        <div className="sf-catyitem-pic" style={{backgroundImage: 'url(images/categories/pic10.jpg)'}}>
                          <span className="sf-caty-num" />
                          <a href="#" className="sf-caty-link" />
                        </div>
                        <h5 className="sf-catyitem-title"><a href="categories-detail.html">Electrician</a></h5>
                      </div>
                    </div>
                  </div>
                </div>                       
              </div>
            </div>
            <div className="section-content sf-caty-listResult-wrap">
              <div className="container">
                <div className="section-content">
                  {/*Showing results topbar Start*/}
                  {/* <div className="sf-search-result-top flex-wrap d-flex justify-content-between">
                    <div className="sf-search-result-title"> <h5>Showing 1 – 10 of 16 results</h5></div>
                    <div className="sf-search-result-option">
                      <ul className="sf-search-sortby">
                        <li className="sf-select-sort-by">
                          <select className="sf-select-box form-control sf-form-control bs-select-hidden" title="SORT BY" name="setorderby" id="setorderby">
                            <option className="bs-title-option" value>SORT BY</option>
                            <option value="rating">Rating</option>
                            <option value="title">Title</option>
                            <option value="distance">Distance</option>
                          </select>
                        </li>
                        <li>
                          <select className="sf-select-box form-control sf-form-control bs-select-hidden" title="DESC" name="setorder" id="setorder">
                            <option className="bs-title-option" value>DESC</option>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                          </select>
                        </li>
                        <li>
                          <select className="sf-select-box form-control sf-form-control bs-select-hidden" title={9} name="numberofpages" id="numberofpages">
                            <option className="bs-title-option" value>9</option>
                            <option value={9}>9</option>
                            <option value={12}>12</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                            <option value={30}>30</option>
                          </select>
                        </li>
                      </ul>
                      <ul className="sf-search-grid-option" id="viewTypes">
                        <li data-view="grid-3">
                          <button type="button" className="btn btn-border btn-icon"><i className="fa fa-th" /></button>
                        </li>
                        <li data-view="listview" className="active">
                          <button type="button" className="btn btn-border btn-icon"><i className="fa fa-th-list" /></button>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/*Showing results topbar End*/}
                  <div className="row">
                    {/*BLock 1*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic1.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">E-Governance</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 2*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic2.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Banking Services</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 3*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic3.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Payment Services</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 4*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic4.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Insurance</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 5*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic5.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">E-Learning</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 6*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic6.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Tours & Travels</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 7*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic7.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Entertainment</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BLock 8*/}
                    <div className="col-md-6">
                      <div className="sf-vender-list-wrap">
                        <div className="sf-vender-list-box d-flex">
                          <div className="sf-vender-list-pic" style={{backgroundImage: 'url(images/categories/pic8.jpg)'}}>
                            <a className="sf-vender-pic-link" href="/servicedetails" />
                          </div>
                          <div className="sf-vender-list-info">
                            <h4 className="sf-venders-title"><a href="/servicedetails">Earn More</a></h4>
                            
                            
                            <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>                       
              </div>
            </div>
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

export default Earnmore






