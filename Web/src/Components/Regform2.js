import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";
  import React from "react";

  import { useState } from "react";
import Header3 from "./Header3";
import Navsidebar2 from "./Navsidebar2";
  
  const Regform2 = () => {
  
    const [address, setAddress] = useState("");
  
    const handleSelect = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
  
  
      setAddress(value);
      // secureLocalStorage.setItem("valuee", value);
  
      // secureLocalStorage.setItem("lat", JSON.stringify(latLng));
    };
    return (
      <div>
        <div className="page-wraper">
          <Header3 />
          {/* Sidebar Holder */}
          <Navsidebar2 />
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
                    Fill Details
                  </a>
                </div>
              </div>
              <div className="aon-admin-heading">
                <h4>
                  <strong>Please Fill this detail</strong>
                </h4>
              </div>
              <div className="sf-provi-qform">
                <form
                  action="https://aonetheme.com/sf-html-demo/profile-full.html?"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Name</label>
                        <input
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
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-4">
                          <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="text" required className="form-control" />
                          </div>
                        </div> */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          maxLength={"10"}
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
  
                    {/* <div className="col-md-4">
                          <div className="form-group">
                            <label>Date of Birth</label>
                            <input name="phone" type="date" required className="form-control" />
                          </div>
                        </div>
  
  
                        <div class="col-md-4 ">
                                          <div class="form-group">
                                              <label>Gender</label>
                                              <div class="aon-inputicon-box"> 
  
                                                  <div class="radio-inline-box sf-radio-check-row">
  
                                                      <div class="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
                                                          <input id="any111" name="abc" value="five" type="radio"/>
                                                          <label for="any111">Male</label>
                                                      </div>
                                                      <div class="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
                                                          <input id="body111" name="abc" value="five" type="radio"/>
                                                          <label for="body111">Female</label>
                                                      </div>
  
                                                  </div>
  
                                              </div>
                                          </div>
                                      </div> */}
  
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Select Highest Qualification</label>
                        <select className="form-control">
                          <option>Select One</option>
                          <option>10th</option>
                          <option>12th</option>
                          <option>Bachlor</option>
                          <option>Master</option>
                        </select>
                        {/* <input name="phone" type="date" required className="form-control" /> */}
                      </div>
                    </div>
  
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>House Number</label>
                        <input
                          name="number"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
  
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Street Number</label>
                        <input
                          name="number"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Address</label>
                        <PlacesAutocomplete
                              value={address}
                              onChange={(newValue) => setAddress(newValue)}
                              onSelect={handleSelect}
                            >
                              {({
                                getInputProps,
                                suggestions,
                                getSuggestionItemProps,
                                loading,
                              }) => (
                                <div>
                                  <input
                                    className="form-control"
                                    {...getInputProps({
                                      placeholder: "Type address",
                                    })}
                                  />
                                  <div>
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map((suggestion) => {
                                      const style = {
                                        backgroundColor: suggestion.active
                                          ? "#41b6e6"
                                          : "#fff",
                                      };
                                      return (
                                        <div
                                          {...getSuggestionItemProps(suggestion, {
                                            style,
                                          })}
                                        >
                                          {suggestion.description}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </PlacesAutocomplete>
                        {/* <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                        /> */}
                      </div>
                    </div>
  
                    {/* <div className="col-md-3">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
  
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>State</label>
                        <select className="form-control">
                          <option>Select One</option>
                          <option>10th</option>
                          <option>JAMMU AND KASHMIR</option>
                          <option>HIMACHAL PRADESH</option>
                          <option>PUNJAB</option>
                          <option>CHANDIGARH</option>
                          <option>UTTARAKHAND</option>
                          <option>HARYANA</option>
                          <option>DELHI</option>
                          <option>RAJASTHAN</option>
                          <option>UTTAR PRADESH</option>
                          <option>BIHAR</option>
                          <option>SIKKIM</option>
                          <option>ARUNACHAL PRADESH</option>
                          <option>NAGALAND</option>
                          <option>MANIPUR</option>
                          <option>MIZORAM</option>
                          <option>TRIPURA</option>
                          <option>MEGHALAYA</option>
                          <option>ASSAM</option>
                          <option>WEST BENGAL</option>
                          <option>JHARKHAND</option>
                          <option>CHHATTISGARH</option>
                          <option>MADHYA PRADESH</option>
                          <option>GUJARAT</option>
                          <option>DAMAN AND DIU</option>
                          <option>DADAR AND NAGAR HAVELI</option>
                          <option>MAHARASTRA</option>
                          <option>KARNATAKA</option>
                          <option>GOA</option>
                          <option>LAKSHADWEEP</option>
                          <option>KERALA</option>
  
                          <option>TAMIL NADU</option>
                          <option>PUDUCHERRY</option>
                          <option>ANDAMAN AND NICOBAR</option>
                          <option>TELANGANA</option>
                          <option>ANDHRA PRADESH</option>
                        </select>
                      </div>
                    </div>
  
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>District</label>
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div> */}
  
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Pincode</label>
                        <input
                          name="phone"
                          type="number"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
  
                    <div className="col-md-12">
                      <h4>Category</h4>
                      <div className="aon-inputicon-box"></div>
                    </div>
  
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mention your Aadhar Number</label>
                        <input
                          name="message"
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Enter Pan Card Number</label>
                        <input
                          name="message"
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
  
                    {/* <div className="col-md-12">
                        <h4>Category</h4>
                        <div className="aon-inputicon-box"> 
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc111" name="abc" defaultValue="fivee" type="radio" />
                              <label htmlFor="loc111">Aadhaar</label>
                              
                            </div>
                            
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc222" name="abc" defaultValue="fivee" type="radio" />
                              <label htmlFor="loc222">PanCard</label>
                            </div>
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <input id="loc333" name="abc" defaultValue="fivee" type="radio" />
                              <label htmlFor="loc333">Nominee</label>
                            </div>
                          </div>
                        </div>
                      </div> */}
  
                    <div className="col-md-6">
                      <h4>Upload Your Aadhar Card</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              type="file"
                              accept="image/*"
                              name="abc"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <h4>Add Your Pan Card</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              type="file"
                              accept="image/*"
                              name="abc"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <h4>Add Your Self Photo with Shop or Home</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              type="file"
                              accept="image/*"
                              name="abc"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <h4>Add Your -Highest Education Certificate</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <input
                              type="file"
                              accept="image/*"
                              name="abc"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-md-12">
                      <div className="form-group text-center qout-submit-btn">
                        <input
                          type="submit"
                          defaultValue="Send information"
                          className="site-button"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Regform2;
  