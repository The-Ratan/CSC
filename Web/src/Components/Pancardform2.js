import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";
  import React from "react";
  import Header2 from "./Header2";
  import Navsidebar from "./Navsidebar";
  import { useState } from "react";
  
  const Pancardform = () => {
  
    const [address, setAddress] = useState("");
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [showAdditional, setShowAdditional] = useState(false);

  const handleAddNewClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };


  const handleAddNew = () => {
    setShowAdditional(!showAdditional);
  };





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
                        <label>APPLICANT NAME</label>
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
                        <label>FATHER NAME</label>
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
                      <label> MOBILE NUMBER </label>
                      <input
                        maxLength={"10"}
                        minLength={"10"}
                        name="phone"
                        type="text"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>

                    
                 
   
                  
  
                    
  
                   
  
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
                      <h4>ADD YOUR LIVE PHOTO </h4>
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
                    <div className="form-group">
                    <br/>
                      <label className="site-button"> DELIVERY ADDRESS WILL SAME AS ON AADHAR </label>
                    
                    </div>
                  </div>
                   



                  <div className="col-md-6">
                  <br/>

                    <button onClick={handleAddNew} className="site-button">
                      ADD NEW ADDRESS
                    </button>
                    {showAdditional && (
                      <div>
                        
                        <font style={{color:'red'}}>EXTRA CHARGES MAY BE APPLY</font>
                        <br/>

                        
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
                      </div>
                    )}
                  </div>





                  {/* <div className="col-md-6">
                      <div className="form-group">
                        <label>CHOOSE ADDRESS EXTRA CHARGES MAY BE APPLY</label>
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
                        
                      </div>
                    </div> */}


                   
                    <div className="col-md-6">
                    <button onClick={handleAddNewClick} className="site-button">
                      ADD NEW
                    </button>
                    {showAdditionalFields && (
                      <div>
                        <br />
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            name="abc"
                            defaultValue=""
                          />
                        </div>
                        <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                          <input
                            type="file"
                            accept="image/*"
                            name="abc"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    )}
                  </div>
  
                    <div className="col-md-12">
                      <div className="form-group text-center qout-submit-btn">
                        <input data-target="#login-signup-model"

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
        <div className="modal fade" id="login-signup-model">
          <div className="modal-dialog">
            <div className="modal-content">
              
              <div className="modal-body">
                <div className="sf-custom-tabs sf-custom-new aon-logon-sign-area p-3">
                 
                  <div className="tab-content">
                    {/*Login Form*/}
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <form className="aon-login-form">
                          <div className="row">
                           
                            <div className="col-md-12">
                              <div className="form-group d-flex aon-login-option justify-content-between">
                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    
                                    <label className="site-button w-100">FINAL SUBMIT</label>
                                  </div>  
                                </div>

                                <div className="aon-login-opleft">
                                  <div className="checkbox sf-radio-checkbox">
                                    
                                  
                                    <label className="site-button " data-dismiss="modal" aria-label="Close">CANCEL</label>
                                  </div>  
                                </div>
                               
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
    );
  };
  
  export default Pancardform;
  

