import React from 'react'
import Header2 from './Header2';
import Navsideber from './Navsidebar';
const Uploadidentity = () => {
  return (
    <div>
  
    <div className="page-wraper">
    <Header2/>           
      {/* Sidebar Holder */}
      <Navsideber/>
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
            <h4>Edit Profile</h4>
          </div>                
          <div className="card aon-card">
            <div className="card-header aon-card-header"><h4><i className="fa fa-user" /> Upload Identity Proof</h4>
            </div>
            <div className="card-body aon-card-body">
              <div className="alert alert-warning m-b30">
                Document verification process is going on.  
              </div>
              <form action="https://aonetheme.com/sf-html-demo/upload.php" className="dropzone dropzone-custom m-b30">
                <div className="dz-message">    
                  <span className="note">
                    Upload Front side document
                  </span>
                </div>
              </form>
              <form action="https://aonetheme.com/sf-html-demo/upload.php" className="dropzone dropzone-custom">
                <div className="dz-message">    
                  <span className="note">
                    Upload Back side document
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>       
  
  </div>
  )
}

export default Uploadidentity
