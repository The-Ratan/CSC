import React from 'react'

import Navsidebar from './Navsidebar'
import Header2 from './Header2'

const Driver = () => {
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
              <a className="nav-btn-admin d-flex justify-content-between align-items-center" >
               
                <span className="fa fa-reorder" />
              </a>
            </div>
           
          </div>
          <div className="aon-admin-heading">
            <h4>Driver</h4>
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
                    <h3 className="sf-title text-black">Driver </h3>
                  </div>
                </div>

                <div className="">
                  <div className="container">
                    <>Working on Driver ????????????????????</>
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

export default Driver


