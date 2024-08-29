import React from 'react'

import Navsidebar from './Navsidebar'
import Header2 from './Header2'

const Myservice = () => {
  return (
    <div>
   
    <div className="page-wraper">
    <Header2/>           
      {/* Sidebar Holder */}
     <Navsidebar/>
      {/* Page Content Holder */}
      <div id="content">
        <div className="content-admin-main">
          {/* <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
            <div className="admin-left-area">
              <a className="nav-btn-admin d-flex justify-content-between align-items-center" id="sidebarCollapse">
                
                <span className="fa fa-reorder" />
              </a>
            </div>
           
          </div> */}
          <div className="aon-admin-heading">
            <h4>Wallet</h4>
          </div>                
          <div class="section-content  sf-owl-arrow">
              <div className="container" >
                {/*Title Section Start*/}
                

                <div class="section-content  sf-owl-arrow">
              <div className="container">
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-black">Wallet </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <div className="aon-all-categories-block2">
                      <div className="row">
                        {/*block-1*/}
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{ 
                             border:'1px solid #022279' , height: "200px",
                              backgroundImage:
                                "url(images/all-categories/addbalance.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/cscrecharge">Add Balance</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-2*/}
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{
                             border:'1px solid #022279' , height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-2.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="/recharge">Recharge History</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-3*/}
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{
                             border:'1px solid #022279' , height: "200px",
                              backgroundImage:
                                "url(images/all-categories/pic-3.jpg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Ledger </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*block-4*/}
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{
                             border:'1px solid #022279' , height: "200px",
                              backgroundImage:
                                "url(images/all-categories/refund.jpeg)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Refund</a>
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div
                            className="aon-all-cat-block"
                            style={{
                             border:'1px solid #022279' , height: "200px",
                              backgroundImage:
                                "url(images/all-categories/cashback.png)",
                            }}
                          >
                            <div className="aon-cat-name click">
                              <h3>
                                <a href="#">Cashback</a>
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
    </div>       
  
   
  </div>
  )
}

export default Myservice
