import React, { useEffect, useState } from "react";
import Header2 from "./Header2";
import Navsidebar from "./Navsidebar";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import userEvent from "@testing-library/user-event";
import Header3 from "./Header3";
import Navsidebar2 from "./Navsidebar2";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const Payment2 = () => {
  const [payment_img, setpayment_img] = useState();
  let typeofdocument = secureLocalStorage.setItem("typeofdoc");
  let idd = secureLocalStorage.setItem("docid");
  console.log("idd",idd)
  console.log("typeofdocumentsadasd",typeofdocument)
  const sendpaymentdata = (evt) => {
    evt.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to submit the form?"
    );

    if (isConfirmed) {
      //   if (user_img && user_img.size > 200 * 1024) {
      //     toast.error("Self Image size should be less than 200KB");
      //     return;
      //   }

      let idd = secureLocalStorage.setItem("docid");
      let typeofdocument = secureLocalStorage.setItem("typeofdoc");

      let tokenn = secureLocalStorage.getItem("otptoken");

      const options = {
        headers: {
          token: tokenn,
        },
      };
      const formdata = new FormData();

      formdata.append("_id", idd);
      formdata.append("type", typeofdocument);
      formdata.append("payment_img", payment_img);

      axios
        .post(`${apiurl[0].apiUrl}website/all_payment_img`, formdata, options)
        .then((response) => {
          toast.success(response.data.msg);
          setTimeout(() => {
            window.location.reload("/payment2");
          }, 3000);
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <div className="page-wraper">
        {/* Header Start */}
        <Header3 />
        <Toaster />
        {/* Header End */}

        {/* Sidebar Holder */}
        <Navsidebar2 />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            <div className="aon-admin-heading">
              <h4>Upload Payment Done Screenshot Document </h4>
            </div>
            <>
              <div className="card aon-card pt-1">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-user" /> Details
                  </h4>
                </div>

                <div >
                  <form onSubmit={sendpaymentdata}>
                    <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-5 ml-5">
                      <div className="form-group">
                        <label>Payment Screenshot Image</label>
                        <input
                          type="file"
                          placeholder="Upload screenshot of payment"
                          name="name"
                          onChange={(e) => {
                            setpayment_img(e.target.files[0]);
                          }}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-5 col-lg-5 col-sm-5" style={{marginTop:'40px'}}>
                      <div className="form-group">
                        <button type="submit" className="btn admin-button">
                          Upload
                        </button>
                      </div>
                    </div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
