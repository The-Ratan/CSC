import React, { useState } from "react";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
import axios from "axios";
import { toast ,  Toaster } from "react-hot-toast";
import apiurl from "./config";

const Changepassword = () => {
  const [output, setoutput] = useState("");
  const [pan_card_no, setpan_card_no] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [repeatpassword, setrepeatpassword] = useState("");


 
  const changepassword = (evt) => {
    evt.preventDefault();

    if(newpassword !== repeatpassword) {
      setoutput("Please Enter Same Data in Repeat & Newpassword ")
      return;
    }
    const userData = {
      pan_card_no: pan_card_no,
      old_password: oldpassword,
      new_password: newpassword,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/change_password`
       , userData)
      .then((res) => {
       
        toast.success(res.data.msg);
      })
      .catch((error) => {
     
        
        setoutput("Envalid Data Provide By You");
      });
  };

  return (
    <div>
      <div className="page-wraper">
        <Header2 />
        <Toaster/>
        {/* Sidebar Holder */}
        <Navsidebar />
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
              <h4>
                <strong>Edit Profile</strong>
              </h4>
            </div>
            <div class="card aon-card" id="aon-passUpdate-panel">
              <font style={{ color: "red" }}>{output}</font>
              <form onSubmit={changepassword}>
                <div class="card-header aon-card-header">
                  <h4>
                    <i class="fa fa-lock"></i> Password Update
                  </h4>
                </div>
                <div class="card-body aon-card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Pan Card Number</label>
                        <div class="aon-inputicon-box">
                          <input
                            class="form-control sf-form-control"
                            maxLength={"10"}
                            minLength={"10"}
                            required
                            value={pan_card_no}
                            onChange={(e) => setpan_card_no(e.target.value)}
                            rows={8}
                            className="form-control"
                            defaultValue={""}
                          />

                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Old Password</label>
                        <div class="aon-inputicon-box">
                          <input
                            class="form-control sf-form-control"
                            required
                            value={oldpassword}
                            onChange={(e) => setoldpassword(e.target.value)}
                            type="text"
                          />
                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>New Password</label>
                        <div class="aon-inputicon-box">
                          <input
                            class="form-control sf-form-control"
                            required
                            value={newpassword}
                            onChange={(e) => setnewpassword(e.target.value)}
                            type="password"
                          />
                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Repeat Password</label>
                        <div class="aon-inputicon-box">
                          <input required
                            value={repeatpassword}
                            onChange={(e) => setrepeatpassword(e.target.value)} 
                            class="form-control sf-form-control"
                            name="company_name"
                            type="password"
                          />
                          <i class="aon-input-icon fa fa-lock"></i>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <p>
                    Enter same password in both fields. Use an uppercase letter
                    and a number for stronger password.
                  </p>
                </div>

                <button type="submit" class="site-button w-100">
                  Submit <i class="feather-arrow-right"></i>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
