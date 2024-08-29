import React, { useEffect, useState } from "react";
import Header3 from "./Header3";
import Navsidebar2 from "./Navsidebar2";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";

const List2 = () => {
  const Navigate = useNavigate();
  const [profiledataa, setprofiledataa] = useState();

  const [signaldata, setsignaldata] = useState();
  const [signaldataayushman, setsignaldataayushman] = useState();
  const [signaldatalabour, setsignaldatalabour] = useState();
  const [signaldataudid, setsignaldataudid] = useState();
  const [signaldataeshram, setsignaldataeshram] = useState();
  const [signaldatavoter, setsignaldatavoter] = useState();
  const [isDocumentModalOpen, setDocumentModalOpen] = useState(false);







  const [payment_img, setpayment_img] = useState();
  
  
  
  const sendpaymentdata = (evt ) => {
    evt.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to submit the form?"
    );

    if (isConfirmed) {
      

      let iddd = secureLocalStorage.setItem("docid");
      let typeofdocument = secureLocalStorage.setItem("typeofdoc");

      let tokenn = secureLocalStorage.getItem("otptoken");

      const options = {
        headers: {
          token: tokenn,
        },
      };
      const formdata = new FormData();

      formdata.append("_id", iddd);
      formdata.append("type", typeofdocument);
      formdata.append("payment_img", payment_img);

      axios
        .post(`${apiurl[0].apiUrl}website/all_payment_img`, formdata, options)
        .then((response) => {
          
          toast.success(response.data.msg);
          
        })
        .catch((error) => {});
    }
  };
  

  let idd = secureLocalStorage.getItem("otpid");


  
  useEffect(() => {
    profiledata();
  },[0]);

  const profiledata = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      user_id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/get_user_submitted_data`, data, options)
      .then((res) => {
        setprofiledataa(res.data.data);
      })
      .catch((error) => {});
  };

  const downloadImage = (imageUrl, imageName) => {
    axios({
      url: imageUrl,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imageName);
      document.body.appendChild(link);
      link.click();
    });
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
              <h4>All Document</h4>
            </div>
            <>
              <div className="card aon-card">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-user" /> Details
                  </h4>
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pan Card{" "}
                  </h4>
                  {profiledataa?.pancardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pan Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              className="btn admin-button"
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>




                     

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pancard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    // toggleDocumentModal();
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  ))}

                  {signaldata ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldata?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Father Name</label>
                            <input
                              placeholder={signaldata?.father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              placeholder={signaldata?.phone_no}
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              placeholder={signaldata?.address}
                              maxLength={"10"}
                              minLength={"10"}
                              type="mobile"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldata?.message}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldata?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>User Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldata?.user_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldata?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldata?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldata?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Ayushman Card{" "}
                  </h4>
                  {profiledataa?.ayushmanCardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Ayushman Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "ayushmanaddress");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {signaldataayushman ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldataayushman?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Aadhar Linked Phone Number</label>
                            <input
                              placeholder={
                                signaldataayushman?.aadhar_linked_phon_no
                              }
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Category Detail</label>
                            <input
                              placeholder={signaldataayushman?.category_detail}
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldataayushman?.message}
                              maxLength={"10"}
                              minLength={"10"}
                              type="mobile"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataayushman?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>User Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataayushman?.user_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataayushman?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataayushman?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataayushman?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Labour Card{" "}
                  </h4>
                  {profiledataa?.labourcardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Labour Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "labourcard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {signaldatalabour ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldatalabour?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Father Name</label>
                            <input
                              placeholder={signaldatalabour?.father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Mother Name</label>
                            <input
                              placeholder={signaldatalabour?.mother_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              placeholder={
                                signaldatalabour?.aadhar_linked_phon_no
                              }
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Work Profile</label>
                            <input
                              placeholder={signaldatalabour?.work_profile}
                              maxLength={"10"}
                              minLength={"10"}
                              type="mobile"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldatalabour?.message}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>User Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.user_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Bank Passbook Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.bank_passbook_or_cheque_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Nominee Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.nominee_aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Signature Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.signature_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatalabour?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Udid Card{" "}
                  </h4>
                  {profiledataa?.udidcardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Udid Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "udidcard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {signaldataudid ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldataudid?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Father Name</label>
                            <input
                              placeholder={signaldataudid?.father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Mother Name</label>
                            <input
                              placeholder={signaldataudid?.mother_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              placeholder={
                                signaldataudid?.aadhar_linked_phon_no
                              }
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Disability Type</label>
                            <input
                              placeholder={signaldataudid?.disability_type}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldataudid?.message}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Father/MotherAadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.father_or_mother_aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4>User Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.user_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Disability Certificate Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.disability_certificate}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Signature Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.signature_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataudid?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Eshram Card{" "}
                  </h4>
                  {profiledataa?.eshramcardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Eshram Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "eshramcard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {signaldataeshram ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldataeshram?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Father Name</label>
                            <input
                              placeholder={signaldataeshram?.father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Mother Name</label>
                            <input
                              placeholder={signaldataeshram?.mother_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              placeholder={
                                signaldataeshram?.aadhar_linked_phon_no
                              }
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Work Profile</label>
                            <input
                              placeholder={signaldataeshram?.work_profile}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldataeshram?.message}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4> Bank Passbook/Cheque Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.bank_passbook_or_cheque_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4>Nominee Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.nominee_aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldataeshram?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Voterid Card{" "}
                  </h4>
                  {profiledataa?.votercardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Voterid Card</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "votercard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {signaldatavoter ? (
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              placeholder={signaldatavoter?.name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Father Name</label>
                            <input
                              placeholder={signaldatavoter?.father_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Mother Name</label>
                            <input
                              placeholder={signaldatavoter?.mother_name}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              placeholder={
                                signaldatavoter?.aadhar_linked_phon_no
                              }
                              type="email"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Message</label>
                            <input
                              placeholder={signaldatavoter?.message}
                              disabled
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Aadhar Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.aadhar_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4> User Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.user_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Family Voterid Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.family_voterid_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4>Signature Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.signature_img}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.other_file1}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.other_file2}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h4>Other Image</h4>
                          <div className="aon-inputicon-box">
                            <div className="radio-inline-box service-perform-list">
                              <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={`http://103.104.74.215:3099/uploads/${signaldatavoter?.other_file3}`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Aadhar Address{" "}
                  </h4>
                  {profiledataa?.aadharAddressData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar AddressData</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.aadhar_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "aadharaddress");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Ayushman Address{" "}
                  </h4>
                  {profiledataa?.ayushmanAddressData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Ayushman AddressData</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.aadhar_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "ayushmanaddress");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Domicile Certificate{" "}
                  </h4>
                  {profiledataa?.domicileCertificateData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Doomicile Certificate</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "domicile");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> FirData{" "}
                  </h4>
                  {profiledataa?.firData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Fir</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "fir");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Cast Certificate{" "}
                  </h4>
                  {profiledataa?.castCertificateData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Cast Certificate</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "cast");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Income Certificate{" "}
                  </h4>
                  {profiledataa?.incomeCertificateData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Income Certificate</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "income");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Lost Report{" "}
                  </h4>
                  {profiledataa?.lostReportData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Lost Report</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "lostreport");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Other Form{" "}
                  </h4>
                  {profiledataa?.otherFormData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Other Form</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "otherform");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pancard Correction{" "}
                  </h4>
                  {profiledataa?.pancardCorrectionData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pancard Correction</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pancardcorrection");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pf-Kyc{" "}
                  </h4>
                  {profiledataa?.pfKycData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pf-kyc</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.uan_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pfkyc");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pf Midtransfer{" "}
                  </h4>
                  {profiledataa?.pfMidTransferData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pf Midtransfer</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.uan_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pfmidtransfer");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pf Nomination{" "}
                  </h4>
                  {profiledataa?.pfNominationData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pf Nomination</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.uan_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pfnomination");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Pf Withdrawal{" "}
                  </h4>
                  {profiledataa?.pfWithdrawalData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pf Withdrawal</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.uan_number} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "pfwithdrawal");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>









                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Police Verification{" "}
                  </h4>
                  {profiledataa?.policeVerificationData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Police Verification</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "policeverification");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Up Ration Card{" "}
                  </h4>
                  {profiledataa?.upRationCardData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Up RationCard</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.phone_no} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "uprationcard");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Msme{" "}
                  </h4>
                  {profiledataa?.msmeData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Msme</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "msme");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Food License{" "}
                  </h4>
                  {profiledataa?.foodLicenseData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Food License</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "foodlicense");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Fresh Passport{" "}
                  </h4>
                  {profiledataa?.freshPassportData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Fresh Passport</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "freshpassport");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Tatkal Passport{" "}
                  </h4>
                  {profiledataa?.tatkalPassportData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tatkal Passport</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "tatkalpassport");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Renewal{" "}
                  </h4>
                  {profiledataa?.renewelPassportData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Renewal</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "renewelpassport");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Railway Ticket{" "}
                  </h4>
                  {profiledataa?.railwayTicketData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Railway Ticket</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.ticket_category} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "railwayticket");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-body aon-card-body">
                  <h4>
                    <i className="fa fa-user" /> Insurance{" "}
                  </h4>
                  {profiledataa?.insuranceData?.map((data) => (
                    <div key={data._id} className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Insurance</label>
                          <div className="aon-inputicon-box">
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem("docid", data?._id);
                                window.location.reload(
                                  Navigate("/listdetails2")
                                );
                              }}
                              className="btn admin-button"
                            >
                              {data?.name} - See Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Card Status</label>
                          <div className="aon-inputicon-box">
                            {data?.approve_status == 0 ? (
                              <button className="btn admin-button">
                                Pending For Review
                              </button>
                            ) : (
                              <>
                                <span>{data?.input1}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document1,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>{" "}
                                <span>{data?.input2}</span>
                                <a
                                  onClick={() =>
                                    downloadImage(
                                      `${apiurl[0].apiUrl}uploads/` +
                                        data?.document2,
                                      `Pdf_${data?._id}.png`
                                    )
                                  }
                                >
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Payment Status</label>
                          <div className="aon-inputicon-box">
                            {data?.payment !== undefined ? (
                              






<button data-toggle="modal" data-target="#documentModal" 
  className="btn admin-button"
  onClick={() => { 
    secureLocalStorage.setItem("docid", data?._id);
    secureLocalStorage.setItem("typeofdoc", "insurance");
    secureLocalStorage.setItem("paymentofdoc", data?.payment);
    
  }}
>
  Rs {data?.payment} - Pay Now
</button>


                            ) : (
                              <>
                                
                                <button className="btn admin-button">
                                Pending For Update
                              </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <button type="submit" className="btn admin-button">
                Update
              </button> */}
            </>
          </div>
        </div>
      </div>
    
  <div style={{height:'600px' ,width: '100%', marginTop: '50px' }} className="modal fade" id="documentModal" tabIndex={-1} role="dialog" aria-labelledby="documentModalLabel" aria-hidden="true">
    <div
            className="modal-dialog modal-lg modal-dialog-centered d-flex align-items-center justify-content-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="documentModalLabel">
                  Upload Payment Document
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                 
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <div
                  id="aon-provider-Req-quote"
                  className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
                >
                  <div className="sf-divider-line" />
                  <div className="section-content">
                    <div className="aon-categories-area2-section">
                      <div className="row justify-content-center">
                        
                            <div className="col-lg-10 col-md-10">
                              <div className="media-bg-animate mba-bdr-15">
                                <div className="aon-categories-area2-iconbox aon-icon-effect">
                                <form onSubmit={sendpaymentdata}>
                    <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 ml-5">
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
  );
};

export default List2;
