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

const Listdetails2 = () => {
  const [profiledataa, setprofiledataa] = useState();

  const [signaldata, setsignaldata] = useState();

  const [signaldataayushman, setsignaldataayushman] = useState();
  const [signaldatalabour, setsignaldatalabour] = useState();
  const [signaldataudid, setsignaldataudid] = useState();
  const [signaldataeshram, setsignaldataeshram] = useState();
  const [signaldatavoter, setsignaldatavoter] = useState();
  const [signaldataincome, setsignaldataincome] = useState();

  const [signaldatadomicile, setsignaldatadomicile] = useState();

  const [signaldatacast, setsignaldatacast] = useState();

  const [signaldatapfwithdraw, setsignaldatapfwithdraw] = useState();

  const [signaldatapfkyc, setsignaldatapfkyc] = useState();

  const [signaldatapfnomination, setsignaldatapfnomination] = useState();

  const [signaldatapfmidtransfer, setsignaldatapfmidtransfer] = useState();

  const [signaldatapoliceverification, setsignaldatapoliceverification] =
    useState();

  const [signaldatafir, setsignaldatafir] = useState();

  const [signaldatalostreport, setsignaldatalostreport] = useState();
  const [signaldataaadharaddress, setsignaldataaadharaddress] = useState();

  const [signaldataayusmanaddress, setsignaldataayusmanaddress] = useState();

  const [signaldataupration, setsignaldataupration] = useState();

  const [signaldatapancorrection, setsignaldatapancorrection] = useState();

  const [signaldataotherform, setsignaldataotherform] = useState();

  const [signaldatamsme, setsignaldatamsme] = useState();
  const [signaldatafoodlicense, setsignaldatafoodlicense] = useState();
  const [signaldatafreshpassport, setsignaldatafreshpassport] = useState();
  const [signaldatatatkalpassport, setsignaldatatatkalpassport] = useState();
  const [signaldatarenewalpassport, setsignaldatarenewalpassport] = useState();
  const [signaldatarailwayticket, setsignaldatarailwayticket] = useState();
  const [signaldatainsurance, setsignaldatainsurance] = useState();

  let idd = secureLocalStorage.getItem("docid");

  useEffect(() => {
    singledata();
  },[0]);
  const singledata = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_pancard_data`, data ,options)
      .then((res) => {

        setsignaldata(res.data.data);
      })
      .catch((error) => {
        
        
      });
  };

  useEffect(() => {
    singledataayushman();
  },[0]);
  const singledataayushman = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_ayushmancard_data`, data ,options)
      .then((res) => {
        setsignaldataayushman(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatalabour();
  },[0]);
  const singledatalabour = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };
    
    axios
      .post(`${apiurl[0].apiUrl}website/single_labourcard_data`, data , options)
      .then((res) => {
        setsignaldatalabour(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataudid();
  },[0]);
  const singledataudid = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };
    
    axios
      .post(`${apiurl[0].apiUrl}website/single_udidcard_data`, data , options)
      .then((res) => {
        setsignaldataudid(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataeshram();
  },[0]);
  const singledataeshram = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_eshramcard_data`, data , options)
      .then((res) => {
        setsignaldataeshram(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatavoter();
  },[0]);
  const singledatavoter = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_votercard_data`, data ,options)
      .then((res) => {
        setsignaldatavoter(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataincome();
  },[0]);
  const singledataincome = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_income_certificate_data`,
        data , options
      )
      .then((res) => {

        setsignaldataincome(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatadomicile();
  },[0]);
  const singledatadomicile = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_domicile_certificate_data`,
        data ,options
      )
      .then((res) => {
        setsignaldatadomicile(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatacast();
  },[0]);
  const singledatacast = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_cast_certificate_data`,
        data ,options
      )
      .then((res) => {
        setsignaldatacast(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapfwithdraw();
  },[0]);
  const singledatapfwithdraw = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_pf_withdrawal_data`,
        data , options
      )
      .then((res) => {
        setsignaldatapfwithdraw(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapfkyc();
  },[0]);
  const singledatapfkyc = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_pf_kyc_data`, data ,options)
      .then((res) => {
        setsignaldatapfkyc(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapfnomination();
  },[0]);
  const singledatapfnomination = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_pf_nomination_data`,
        data , options
      )
      .then((res) => {
        setsignaldatapfnomination(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapfmidtransfer();
  },[0]);
  const singledatapfmidtransfer = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_pf_midtransfer_data`,
        data , options
      )
      .then((res) => {
        setsignaldatapfmidtransfer(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapoliceverification();
  },[0]);
  const singledatapoliceverification = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_police_verification_data`,
        data ,options
      )
      .then((res) => {
        setsignaldatapoliceverification(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatafir();
  },[0]);
  const singledatafir = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_fir_data`, data ,options)
      .then((res) => {
        setsignaldatafir(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatalostreport();
  },[0]);
  const singledatalostreport = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_lost_report_data`, data , options)
      .then((res) => {
        setsignaldatalostreport(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataaadharaddress();
  },[0]);
  const singledataaadharaddress = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_aadhar_address_data`,
        data ,options
      )
      .then((res) => {
        setsignaldataaadharaddress(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataayusmanaddress();
  },[0]);
  const singledataayusmanaddress = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };

    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_ayushman_address_data`,
        data , options
      )
      .then((res) => {
        setsignaldataayusmanaddress(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataupration();
  },[0]);
  const singledataupration = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_up_rationcard_data`,
        data ,options
      )
      .then((res) => {
        setsignaldataupration(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledatapancorrection();
  },[0]);
  const singledatapancorrection = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}website/single_pancard_correction_data`,
        data ,options
      )
      .then((res) => {
        setsignaldatapancorrection(res.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    singledataotherform();
  },[0]);
  const singledataotherform = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_other_form_data`, data ,options)
      .then((res) => {
        setsignaldataotherform(res.data.data);
      })
      .catch((error) => {
        
      });
  };



  useEffect(() => {
    singledatamsme();
  },[0]);
  const singledatamsme = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_msme_data`, data ,options)
      .then((res) => {

        setsignaldatamsme(res.data.data);
      })
      .catch((error) => {
        
      });
  };



  useEffect(() => {
    singledatafoodlicense();
  },[0]);
  const singledatafoodlicense = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_food_license_data`, data ,options)
      .then((res) => {

        setsignaldatafoodlicense(res.data.data);
      })
      .catch((error) => {
        
      });
  };



  useEffect(() => {
    singledatafreshpassport();
  },[0]);
  const singledatafreshpassport = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_fresh_passport_data`, data ,options)
      .then((res) => {
        
        setsignaldatafreshpassport(res.data.data);
      })
      .catch((error) => {
        
      });
  };


  useEffect(() => {
    singledatatatkalpassport();
  },[0]);
  const singledatatatkalpassport = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_tatkal_passport_data`, data ,options)
      .then((res) => {
        
        setsignaldatatatkalpassport(res.data.data);
      })
      .catch((error) => {
        
      });
  };


  useEffect(() => {
    singledatarenewalpassport();
  },[0]);
  const singledatarenewalpassport = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_renewel_passport_data`, data ,options)
      .then((res) => {
        
        setsignaldatarenewalpassport(res.data.data);
      })
      .catch((error) => {
        
      });
  };




  useEffect(() => {
    singledatarailwayticket();
  },[0]);
  const singledatarailwayticket = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_railway_ticket_data`, data ,options)
      .then((res) => {
        setsignaldatarailwayticket(res.data.data);
      })
      .catch((error) => {
        
      });
  };


  useEffect(() => {
    singledatainsurance();
  },[0]);
  const singledatainsurance = () => {
    let tokenn = secureLocalStorage.getItem("otptoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const data = {
      _id: idd,
    };

    axios
      .post(`${apiurl[0].apiUrl}website/single_insurance_data`, data ,options)
      .then((res) => {
       
        setsignaldatainsurance(res.data.data);
      })
      .catch((error) => {
        
      });
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
              <h4>Single Document Details</h4>
            </div>
            <>
              <div className="card aon-card pt-1">
                <div className="card-header aon-card-header">
                  <h4>
                    <i className="fa fa-user" /> Details
                  </h4>
                </div>

                {signaldata ? (
                  <>
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldata?.aadhar_img}
                                
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
                                src={`${apiurl[0].apiUrl}uploads/`+ signaldata?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldata?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldata?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldata?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldata?.user_img,
                                  `Pdf_${signaldata?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataayushman ? (
                  <>
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayushman?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayushman?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayushman?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayushman?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayushman?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataayushman?.aadhar_img,
                                  `Pdf_${signaldataayushman?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatalabour ? (
                  <>
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.bank_passbook_or_cheque_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.nominee_aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalabour?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatalabour?.user_img,
                                  `Pdf_${signaldatalabour?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataudid ? (
                  <>
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
                            placeholder={signaldataudid?.aadhar_linked_phon_no}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.father_or_mother_aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.disability_certificate}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataudid?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataudid?.user_img,
                                  `Pdf_${signaldataudid?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataeshram ? (
                  <>
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.bank_passbook_or_cheque_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.nominee_aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataeshram?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataeshram?.aadhar_img,
                                  `Pdf_${signaldataeshram?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatavoter ? (
                  <>
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
                            placeholder={signaldatavoter?.aadhar_linked_phon_no}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.family_voterid_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatavoter?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatavoter?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataincome ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldataincome?.name}
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
                            placeholder={signaldataincome?.father_name}
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
                            placeholder={signaldataincome?.mother_name}
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
                            placeholder={signaldataincome?.phone_no}
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
                            placeholder={signaldataincome?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Letterhead Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.sabhasad_or_parshad_letterhead_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.svapramanit_ghoshnapatra_or_signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataincome?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataincome?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatadomicile ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatadomicile?.name}
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
                            placeholder={signaldatadomicile?.father_name}
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
                            placeholder={signaldatadomicile?.mother_name}
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
                            placeholder={signaldatadomicile?.phone_no}
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
                            placeholder={signaldatadomicile?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Letterhead Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.sabhasad_or_parshad_letterhead_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.svapramanit_ghoshnapatra_or_signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatadomicile?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatacast ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatacast?.name}
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
                            placeholder={signaldatacast?.father_name}
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
                            placeholder={signaldatacast?.mother_name}
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
                            placeholder={signaldatacast?.phone_no}
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
                            placeholder={signaldatacast?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Letterhead Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.sabhasad_or_parshad_letterhead_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.svapramanit_ghoshnapatra_or_signature_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Cast Certificate Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.jati_praman_patra_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatacast?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatacast?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapfwithdraw ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Uan No.</label>
                          <input
                            placeholder={signaldatapfwithdraw?.uan_number}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            placeholder={signaldatapfwithdraw?.password}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapfwithdraw?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Withdraw Amount</label>
                          <input
                            placeholder={signaldatapfwithdraw?.withdraw_amount}
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
                            placeholder={signaldatapfwithdraw?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Bank Passbook Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.bank_passbook_or_cheque_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Pancard Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.pancard_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapfwithdraw?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapfkyc ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Uan No.</label>
                          <input
                            placeholder={signaldatapfkyc?.uan_number}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            placeholder={signaldatapfkyc?.password}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapfkyc?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Withdraw Amount</label>
                          <input
                            placeholder={signaldatapfkyc?.withdraw_amount}
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
                            placeholder={signaldatapfkyc?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Bank Passbook Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.bank_passbook_or_cheque_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Pancard Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.pancard_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapfkyc?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapfnomination ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Uan No.</label>
                          <input
                            placeholder={signaldatapfnomination?.uan_number}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            placeholder={signaldatapfnomination?.password}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapfnomination?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Withdraw Amount</label>
                          <input
                            placeholder={
                              signaldatapfnomination?.withdraw_amount
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
                            placeholder={signaldatapfnomination?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Bank Passbook Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.bank_passbook_or_cheque_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Pancard Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.pancard_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Nominee Aadhar Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.nominee_aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapfnomination?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapfmidtransfer ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Uan No.</label>
                          <input
                            placeholder={signaldatapfmidtransfer?.uan_number}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            placeholder={signaldatapfmidtransfer?.password}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapfmidtransfer?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Withdraw Amount</label>
                          <input
                            placeholder={
                              signaldatapfmidtransfer?.withdraw_amount
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
                            placeholder={signaldatapfmidtransfer?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Bank Passbook Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.bank_passbook_or_cheque_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Pancard Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.pancard_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapfmidtransfer?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapoliceverification ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatapoliceverification?.name}
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
                            placeholder={
                              signaldatapoliceverification?.father_name
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
                          <label>Email</label>
                          <input
                            placeholder={signaldatapoliceverification?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapoliceverification?.phone_no}
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
                            placeholder={signaldatapoliceverification?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapoliceverification?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapoliceverification?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapoliceverification?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapoliceverification?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapoliceverification?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatafir ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatafir?.name}
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
                            placeholder={signaldatafir?.father_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatafir?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatafir?.phone_no}
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
                            placeholder={signaldatafir?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafir?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Fir Content Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafir?.fir_content_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafir?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafir?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafir?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatafir?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatalostreport ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatalostreport?.name}
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
                            placeholder={signaldatalostreport?.father_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatalostreport?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatalostreport?.phone_no}
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
                            placeholder={signaldatalostreport?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4> Fir Content Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.fir_content_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatalostreport?.user_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataaadharaddress ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar Number</label>
                          <input
                            placeholder={signaldataaadharaddress?.aadhar_number}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar Linked Phone No.</label>
                          <input
                            placeholder={
                              signaldataaadharaddress?.aadhar_linked_phone_no
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
                          <label>Message</label>
                          <input
                            placeholder={signaldataaadharaddress?.message}
                            disabled
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Address Proof Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataaadharaddress?.address_proof_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataaadharaddress?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataaadharaddress?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataaadharaddress?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataaadharaddress?.address_proof_img,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataayusmanaddress ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar No.</label>
                          <input
                            placeholder={
                              signaldataayusmanaddress?.aadhar_number
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
                          <label>Aadhar Linked Phone No.</label>
                          <input
                            placeholder={
                              signaldataayusmanaddress?.aadhar_linked_phone_no
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
                          <label>Message</label>
                          <input
                            placeholder={signaldataayusmanaddress?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataayusmanaddress?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataupration ? (
                  <>
                    <div className="row">
                      
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Bijli Bill No.</label>
                          <input
                            placeholder={signaldataupration?.bijli_bil_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Gas Connection No.</label>
                          <input
                            placeholder={signaldataupration?.gas_connection_no}
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
                            placeholder={signaldataupration?.father_name}
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
                            placeholder={signaldataupration?.mother_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Husband Name</label>
                          <input
                            placeholder={signaldataupration?.husband_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Ration Cotedar Name</label>
                          <input
                            placeholder={signaldataupration?.rashan_cotedar_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Aadhar Linked Phone No.</label>
                          <input
                            placeholder={
                              signaldataupration?.phone_no
                            }
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldataupration?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataupration?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataupration?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataupration?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataupration?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataupration?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataupration?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldatapancorrection ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatapancorrection?.name}
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
                            placeholder={signaldatapancorrection?.father_name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatapancorrection?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            placeholder={signaldatapancorrection?.address}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatapancorrection?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Correction Proof Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.correction_proof_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.signature_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatapancorrection?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {signaldataotherform ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldataotherform?.name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldataotherform?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldataotherform?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldataotherform?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Document Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.add_document}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.signature_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>10th Result Tenth Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.tenth_result_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldataotherform?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldataotherform?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}



{signaldatamsme ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatamsme?.name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatamsme?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatamsme?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatamsme?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatamsme?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatamsme?.user_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatamsme?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatamsme?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatamsme?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatamsme?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}



{signaldatafoodlicense ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatafoodlicense?.name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatafoodlicense?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatafoodlicense?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatafoodlicense?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.aadhar_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.user_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Office Address Proof Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.office_address_proof_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatafoodlicense?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}




{signaldatafreshpassport ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatafreshpassport?.name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatafreshpassport?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatafreshpassport?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatafreshpassport?.message}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.aadhar_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Pancard Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.pancard_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>10th Marksheet Result Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.tenth_marksheet_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatafreshpassport?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}



{signaldatatatkalpassport ? (
                   <>
                   <div className="row">
                     <div className="col-md-4">
                       <div className="form-group">
                         <label>Name</label>
                         <input
                           placeholder={signaldatatatkalpassport?.name}
                           name="name"
                           type="text"
                           required
                           className="form-control"
                         />
                       </div>
                     </div>

                     <div className="col-md-4">
                       <div className="form-group">
                         <label>Email</label>
                         <input
                           placeholder={signaldatatatkalpassport?.email}
                           name="name"
                           type="text"
                           required
                           className="form-control"
                         />
                       </div>
                     </div>

                     <div className="col-md-4">
                       <div className="form-group">
                         <label>Phone No.</label>
                         <input
                           placeholder={signaldatatatkalpassport?.phone_no}
                           name="name"
                           type="text"
                           required
                           className="form-control"
                         />
                       </div>
                     </div>

                     <div className="col-md-12">
                       <div className="form-group">
                         <label>Message</label>
                         <input
                           placeholder={signaldatatatkalpassport?.message}
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
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.aadhar_img}
                             />
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="col-md-6">
                       <h4>Pancard Image</h4>
                       <div className="aon-inputicon-box">
                         <div className="radio-inline-box service-perform-list">
                           <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                             <img
                               style={{ borderRadius: "10px" }}
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.pancard_img}
                             />
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="col-md-6">
                       <h4>10th Marksheet Result Image</h4>
                       <div className="aon-inputicon-box">
                         <div className="radio-inline-box service-perform-list">
                           <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                             <img
                               style={{ borderRadius: "10px" }}
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.tenth_marksheet_img}
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
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.other_file1}
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
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.other_file2}
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
                               src={`${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.other_file3}
                             />
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="col-md-6">
                       <h4>Download Document</h4>
                       <div className="aon-inputicon-box">
                         <div className="radio-inline-box service-perform-list">
                           <a
                             onClick={() =>
                               downloadImage(
                                `${apiurl[0].apiUrl}uploads/`+signaldatatatkalpassport?.document1,
                                 `Pdf_${signaldatavoter?._id}.png`
                               )
                             }
                           >
                             <button className="btn admin-button">
                               Download
                             </button>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </>
                ) : (
                  <></>
                )}


{signaldatarenewalpassport ? (
                  <>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          placeholder={signaldatarenewalpassport?.name}
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
                          placeholder={signaldatarenewalpassport?.mother_name}
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          placeholder={signaldatarenewalpassport?.email}
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Phone No.</label>
                        <input
                          placeholder={signaldatarenewalpassport?.phone_no}
                          name="name"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="form-group">
                        <label>Message</label>
                        <input
                          placeholder={signaldatarenewalpassport?.message}
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
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.aadhar_img}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Pancard Image</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <img
                              style={{ borderRadius: "10px" }}
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.pancard_img}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>10th Marksheet Result Image</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <img
                              style={{ borderRadius: "10px" }}
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.tenth_marksheet_img}
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-md-6">
                      <h4>old Passport or Fir Image</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                            <img
                              style={{ borderRadius: "10px" }}
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.old_passport_or_fir_img}
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
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.other_file1}
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
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.other_file2}
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
                              src={`${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.other_file3}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Download Document</h4>
                      <div className="aon-inputicon-box">
                        <div className="radio-inline-box service-perform-list">
                          <a
                            onClick={() =>
                              downloadImage(
                                `${apiurl[0].apiUrl}uploads/`+signaldatarenewalpassport?.document1,
                                `Pdf_${signaldatavoter?._id}.png`
                              )
                            }
                          >
                            <button className="btn admin-button">
                              Download
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                ) : (
                  <></>
                )}



{signaldatarailwayticket ? (
                  <>
                   
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Train No.</label>
                          <input
                            placeholder={signaldatarailwayticket?.train_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>From</label>
                          <input
                            placeholder={signaldatarailwayticket?.from}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>To</label>
                          <input
                            placeholder={signaldatarailwayticket?.to}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Date</label>
                          <input
                            placeholder={signaldatarailwayticket?.date}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Ticket Category</label>
                          <input
                            placeholder={signaldatarailwayticket?.ticket_category}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>


                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatarailwayticket?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                    
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Passengers</label>

                          {signaldatarailwayticket?.passengers?.map((dataa,index)=>{
                             return(
                             <p className="form-control">{dataa?.name} - {dataa?.age} - {dataa?.gender}</p>
                             )
                            })}
                         
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatarailwayticket?.message}
                            disabled
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Irctc Train Status Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatarailwayticket?.irctc_train_status_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatarailwayticket?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatarailwayticket?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatarailwayticket?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatarailwayticket?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}



{signaldatainsurance ? (
                  <>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            placeholder={signaldatainsurance?.name}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            placeholder={signaldatainsurance?.email}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Phone No.</label>
                          <input
                            placeholder={signaldatainsurance?.phone_no}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Category</label>
                          <input
                            placeholder={signaldatainsurance?.category}
                            name="name"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            placeholder={signaldatainsurance?.message}
                            disabled
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Old Insurance Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.old_insurance_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Owner Id Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.owner_id_img}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>RC Image</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                              <img
                                style={{ borderRadius: "10px" }}
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.rc_img}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.other_file1}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.other_file2}
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
                                src={`${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.other_file3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Download Document</h4>
                        <div className="aon-inputicon-box">
                          <div className="radio-inline-box service-perform-list">
                            <a
                              onClick={() =>
                                downloadImage(
                                  `${apiurl[0].apiUrl}uploads/`+signaldatainsurance?.document1,
                                  `Pdf_${signaldatavoter?._id}.png`
                                )
                              }
                            >
                              <button className="btn admin-button">
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listdetails2;
