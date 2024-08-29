import React from "react";

import Navsidebar from "./Navsidebar";
import Header2 from "./Header2";

const Cscrecharge = () => {
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
              {/* <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                 
                  <span className="fa fa-reorder" />
                </a>
              </div> */}
              <div className="admin-area-mid">
                <div className="admin-area-heading">
                  <span>Recharge Type : </span>
                  <strong>Know Your Wallet !</strong>
                </div>
                <div className="admin-area-content">
                  you Are on Extended . Use link bellow to view details or
                  upgrade.Details{" "}
                </div>
              </div>
              <div className="admin-right-area">
                <div className="pro-pic-info-wrap d-flex">
                  <div className="pro-pic-info">
                    <button
                      type="button"
                      class="admin-button btn-sm "
                      title="Change Status"
                    >
                      Instant Skash Recharge (Turant)
                    </button>
                  </div>
                  &nbsp;
                  <div className="pro-pic-info">
                    <button
                      type="button"
                      class="admin-button btn-sm "
                      title="Change Status"
                    >
                      Fast Recharge
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="aon-admin-heading">
              <h4>CSCWALE Documentation</h4>
            </div>
            <div class="section-content  sf-owl-arrow">
              <div className="container" style={{ background: "#022279" }}>
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    {/* <h3 className="sf-title text-white">My Business </h3> */}
                  </div>
                </div>

                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <h4 class="aon-title">Recharge your Skash via NEFT</h4>
                  </div>
                </div>

                <hr />
                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <p>
                      1. Visit <a href="/profile"><span class="admin-button btn-sm">My Profile</span></a> and Click on <span class="aon-title">Easy Recharge.</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <p>
                      2. Find the IFSC Code and Account Number (specific for you). 
                    </p>
                  </div>
                </div>

                <hr />
                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <p>
                      3. Add the Bank details in your Bank Login as beneficiary.
                    </p>
                  </div>
                </div>
                <hr />
                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <p>
                      4. Transfer money via NEFT or Direct transfer (If SBI).
                    </p>
                  </div>
                </div>

                <hr />
                <div class="d-flex">
                  <div class="aon-w-choose-right">
                    <p>
                      5. Get Money in Skash within 30-60 Minutes. Charges Rs
                      1.50 + Taxes.
                    </p>
                  </div>
                </div>
                <hr />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cscrecharge;
