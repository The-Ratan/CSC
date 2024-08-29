import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import secureLocalStorage from "react-secure-storage";

const Registrastionsuccessfully = () => {
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    const dataa = secureLocalStorage.getItem("registrastiondata");

    if (dataa) {
      const parsedData = JSON.parse(dataa);
      setRegistrationData(parsedData);
    }
  }, []);
  const dataaa = secureLocalStorage.getItem("registrastiondata");
  
  return (
    <div>
      {/* LOADING AREA START ===== */}

      {/* LOADING AREA  END ====== */}
      <div className="page-wraper">
        {/* HEADER START */}
        <Header />
        {/* HEADER END */}
        {/* Content */}
        <div className="page-content">
          {/*Banner*/}
          <div className="aon-page-benner-area" style={{ paddingTop: "72px" }}>
            <div
              className="aon-page-banner-row"
              style={{ backgroundImage: "url(images/banner/regis1.webp)" }}
            >
              <div
                className="sf-overlay-main"
                style={{ opacity: "0.2", backgroundColor: "#022279" }}
              />
              <div className="sf-banner-heading-wrap">
                <div className="sf-banner-heading-area">
                  <div
                    className="sf-banner-heading-large"
                    style={{ color: "#022279", fontWeight: "bold" }}
                  >
                    Welcom to Cscwale , You have registered successfully!
                  </div>
                  {/* <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li><a href="index.html"> Home </a></li>
                    <li>Registerd</li>
                  </ul>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*Banner*/}
          {/* Contact Us*/}
          <div className="aon-contact-area">
            <div className="container">
              {/*Title Section Start*/}
              <div className="section-head text-center">
                <h2 className="sf-title">
                  Cscwale Your Registration No. - {registrationData?.application_no} & Password {registrationData?.password}
                </h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
              </div>
              {/*Title Section End*/}
              <div
                id="aon-provider-Req-quote"
                className="sf-provi-qoute-box cleafix m-b50 sf-provi-fullBox"
              >
                <h3 className="sf-provi-title">Overview </h3>
                <div className="sf-divider-line" />
                <div className="sf-provi-qform">
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            disabled
                            placeholder={registrationData?.name}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            disabled
                            placeholder={registrationData?.email}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            disabled
                            placeholder={registrationData?.phone_no}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input
                            disabled
                            placeholder={registrationData?.date_of_birth}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Gender</label>
                          <input
                            disabled
                            placeholder={registrationData?.gender}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Highest Qualification</label>
                          <input
                            disabled
                            placeholder={
                              registrationData?.highest_qualification
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>House Number</label>
                          <input
                            disabled
                            placeholder={registrationData?.house_no}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Street Number</label>
                          <input
                            disabled
                            placeholder={registrationData?.street_no}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Area</label>
                          <input
                            disabled
                            placeholder={registrationData?.area}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            disabled
                            placeholder={registrationData?.city}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            disabled
                            placeholder={registrationData?.state}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>District</label>
                          <input
                            disabled
                            placeholder={registrationData?.district}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pincode</label>
                          <input
                            disabled
                            placeholder={registrationData?.pincode}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar Number</label>
                          <input
                            disabled
                            placeholder={registrationData?.aadhar_no}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pan Card Number</label>
                          <input
                            disabled
                            placeholder={registrationData?.pan_card_no}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Aadhar Image</label>
                          <img
                            disabled
                            src={`http://103.104.74.215:3099/uploads/${registrationData?.aadhar_image}`}
                            
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Pan Card Image</label>
                          <img
                            disabled
                            src={`http://103.104.74.215:3099/uploads/${registrationData?.pan_card_image}`}
                            
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Home Image</label>
                          <img
                            disabled
                            src={`http://103.104.74.215:3099/uploads/${registrationData?.home_image}`}
                            
                          />
                        </div>
                      </div>


                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Education Image</label>
                          <img
                            disabled
                            src={`http://103.104.74.215:3099/uploads/${registrationData?.education_image}`}
                            
                          />
                        </div>
                      </div>


                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Us*/}
        </div>
        {/* Content END*/}
        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
      </div>
    </div>
  );
};

export default Registrastionsuccessfully;
