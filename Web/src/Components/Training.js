import React from "react";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
const Training = () => {
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
              <h4>
                <strong>Training</strong>
              </h4>
            </div>
            <div class="section-content  sf-owl-arrow">
              <div className="container" style={{ background: "#022279" }}>
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    <h3 className="sf-title text-white">Our Services </h3>
                  </div>
                </div>
                <section className="bg-white pt-3">
        <div className="container">
          {/*Title Section Start*/}
          
          {/*Title Section End*/}
          <div className="section-content">
            <div className="aon-categories-area2-section">
              <div className="row justify-content-center">
                {/* COLUMNS 1 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/1.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Car Service</a></h4>
                        <p>124 Listing</p>
                      </div>
                    </div>
                  </div>    
                </div>
                {/* COLUMNS 2 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span> 
                          <i className="aon-icon"><img src="images/popular-categories-icon/2.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Salon Services</a></h4>
                        <p>132 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 3 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/3.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Plumber</a></h4>
                        <p>124 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 4 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/4.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Electrician</a></h4>
                        <p>128 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 5 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/5.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Yoga Classes</a></h4>
                        <p>145 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 6 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/6.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">House Ceaning</a></h4>
                        <p>165 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 7 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/7.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Gym Classes</a></h4>
                        <p>156 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 8 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/8.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">Transport</a></h4>
                        <p>149 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 9 */}
                <div className="col-lg-4 col-md-6">
                  <div className="media-bg-animate mba-bdr-15">
                    <div className="aon-categories-area2-iconbox aon-icon-effect">
                      <div className="aon-cate-area2-icon">
                        <span>
                          <i className="aon-icon"><img src="images/popular-categories-icon/9.png" alt="" /></i>
                        </span>
                      </div>
                      <div className="aon-cate-area2-content">
                        <h4 className="aon-tilte"><a href="categories-detail.html">AC Repair</a></h4>
                        <p>175 Listing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
             
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;



