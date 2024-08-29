import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <Header />

      <aside className="right-sidebar">
        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="#tab_overview" data-toggle="tab">OVERVIEW</a></li>
          <li role="presentation"><a href="#tab_settings" data-toggle="tab">SETTINGS</a></li>
        </ul>
        <div className="tab-content">
          <div className="right-sidebar-close">
            <i className="fa fa-times" />
          </div>
          <div role="tabpanel" className="tab-pane fade in active" id="tab_overview">
            <div className="tab-container">
              <label>UPCOMING EVENTS</label>
              <ul>
                <li>
                  <b className="display-block">Business Meeting</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Dinner With John</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Deadline Project For E-Commerce</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Last Check For E-Comerce</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Ask For Vacation</b> Lorem ipsum dolor sit amet
                </li>
              </ul>
              <label>TODO LIST</label>
              <ul>
                <li>
                  <b className="display-block">Get To Know More HTML5</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Get To Know More CSS3 - Transitions</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Learn AngularJS</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Learn AngularJS Routing</b> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <b className="display-block">Get To Know More jQuery v3</b> Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="tab_settings">
            <div className="tab-container">
              <label>GENERAL SETTINGS</label>
              <ul>
                <li>
                  <span>Report Panel Usage</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" defaultChecked />
                  </div>
                </li>
                <li>
                  <span>Email Redirect</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" />
                  </div>
                </li>
              </ul>
              <label>SYSTEM SETTINGS</label>
              <ul>
                <li>
                  <span>Notifications</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" defaultChecked />
                  </div>
                </li>
                <li>
                  <span>Auto Updates</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" defaultChecked />
                  </div>
                </li>
              </ul>
              <label>ACCOUNT SETTINGS</label>
              <ul>
                <li>
                  <span>Offline</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" />
                  </div>
                </li>
                <li>
                  <span>Location Permission</span>
                  <div className="switch">
                    <input type="checkbox" className="js-switch" data-size="small" defaultChecked />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {/* #END# Right Sidebar */}
      <section className="content">
        <div className="page-heading">
          <h1>CONTACT DETAIL</h1>
          <ol className="breadcrumb">
            <li><Link to="/deashboard">Dashboard</Link></li>
            <li className="active"><a href="#">Profile</a></li>
          </ol>
        </div>
        <div className="page-body">
          <div className="row  justify-content-center">
            {/* User Image */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div className="panel panel-default">
             
                <div className="panel-body">
                  <div className="align-center">
                    <img src="../../assets/images/avatars/face2.jpg" className="img-circle m-b-10" height={100} width={100} alt="User Avatar" />
                    <div className="font-15 font-bold">Admin Name</div>
                    <p className="font-15 ">Admin@gmail.com</p>
                    <button className="btn btn-sm btn-default m-t-25" onclick="$('.js-image-upload').click();">
                      <i className="fa fa-upload font-15 m-r-5" />Upload New Image
                    </button>
                  </div>
                  <input type="file" className="js-image-upload form-control hide" />
                </div>
              </div>

            </div>

          </div>
        </div>  
      </section>


    </>
  )
}

export default Profile