import React, { useEffect, useState } from "react";
import OpHeader from "./OpHeader";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
const Opinsurance = () => {
  const [pancard, setaccessdata] = useState();

  let accessdatadid = secureLocalStorage.getItem("opinsurance");

  useEffect(() => {
    useraccessdata();
  });
  const useraccessdata = () => {
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      _id: accessdatadid,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/single_insurance_data`, userdata , options)
      .then((res) => {
        setaccessdata(res.data.data);
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

  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [document1, setdocument1] = useState("");
  const [document2, setdocument2] = useState("");
  const [output, setoutput] = useState("");
  const senddata = () => {
    if (!input1) {
      setoutput("Please Enter All Details");
      return;
    }
    if (!input2) {
      setoutput("Please Enter All Details");
      return;
    }
    if (!document1) {
      setoutput("Please Enter All Details");
      return;
    }
    if (!document2) {
      setoutput("Please Enter All Details");
      return;
    }
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };

    const formdata = new FormData();
    formdata.append("user_id", pancard?.user_id);
    formdata.append("_id", pancard?._id);
    formdata.append("input1", input1);
    formdata.append("input2", input2);
    formdata.append("document1", document1);
    formdata.append("document2", document2);
    axios
      .post(`${apiurl[0].apiUrl}subadmin/insurance_document`, formdata, options)
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {});
  };

  const createdAt = pancard?.createdAt;
  const formattedDateTime = new Date(createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    // timeZoneName: 'short',
  });

  return (
    <div>
      <OpHeader />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1> Upload Date - {formattedDateTime}</h1>
          <h1 style={{ opacity: "0" }}>Services accessdataaa</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>
            {/* <li><a href="javascript:void(0);"></a></li> */}
            <li className="active">Services accessdata</li>
          </ol>
        </div>
        <div className="sf-provi-qform">
          <form style={{ marginLeft: "20px" }}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Name</label>
                  <p
                    disabled
                    placeholder={pancard?.name}
                    className="form-control"
                  >
                    {pancard?.name}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Email</label>
                  <p
                    disabled
                    placeholder={pancard?.email}
                    className="form-control"
                  >
                    {pancard?.email}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Phone No.</label>
                  <p
                    disabled
                    placeholder={pancard?.phone_no}
                    className="form-control"
                  >
                    {pancard?.phone_no}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Category</label>
                  <p
                    disabled
                    placeholder={pancard?.category}
                    className="form-control"
                  >
                    {pancard?.category}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Details</label>
                  <p
                    disabled
                    placeholder={pancard?.other_details1}
                    className="form-control"
                  >
                    {pancard?.other_details1}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Details</label>
                  <p
                    disabled
                    placeholder={pancard?.other_details2}
                    className="form-control"
                  >
                    {pancard?.other_details2}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Details</label>
                  <p
                    disabled
                    placeholder={pancard?.other_details3}
                    className="form-control"
                  >
                    {pancard?.other_details3}
                  </p>
                </div>
              </div>

              <div className="col-md-8">
                <div className="form-group">
                  <label>Message</label>
                  <p
                    disabled
                    placeholder={pancard?.message}
                    className="form-control"
                  >
                    {pancard?.message}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Old Insurance Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` +
                          pancard?.old_insurance_img,
                        `Aadhar_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    disabled
                    src={
                      `${apiurl[0].apiUrl}uploads/` + pancard?.old_insurance_img
                    }
                    height={300}
                    width={300}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Owner Id Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` + pancard?.owner_id_img,
                        `Pancard_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + pancard?.owner_id_img}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>RC Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` + pancard?.rc_img,
                        `Signature_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + pancard?.rc_img}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` + pancard?.other_file1,
                        `Aadhar_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + pancard?.other_file1}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` + pancard?.other_file2,
                        `Aadhar_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + pancard?.other_file2}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Other Image</label>{" "}
                  <a
                    onClick={() =>
                      downloadImage(
                        `${apiurl[0].apiUrl}uploads/` + pancard?.other_file3,
                        `Aadhar_Image_${pancard?._id}.png`
                      )
                    }
                  >
                    Download
                  </a>
                  <img
                    height={300}
                    width={300}
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + pancard?.other_file3}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="sf-provi-qform">
          <div style={{ marginLeft: "20px" }}>
            <br />
            <h5 className="btn btn-success">
              Firstly Approve the Document Then you can send the document from
              your side.
            </h5>
            <br />
            <br />
            <font style={{ color: "red" }}>{output}</font>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Enter Detail</label>
                  <input
                    onChange={(e) => setinput1(e.target.value)}
                    value={input1}
                    name="name"
                    type="text"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4>UPLOAD DOCUMENT</h4>
                <div className="aon-inputicon-box">
                  <div className="radio-inline-box service-perform-list">
                    <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                      <input
                        required
                        onChange={(e) => setdocument1(e.target.files[0])}
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />

              <div className="col-md-6">
                <div className="form-group">
                  <label>Enter Detail</label>
                  <input
                    onChange={(e) => setinput2(e.target.value)}
                    value={input2}
                    name="name"
                    type="text"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 ">
                <h4>UPLOAD DOCUMENT</h4>
                <div className="aon-inputicon-box">
                  <div className="radio-inline-box service-perform-list">
                    <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                      <input
                        required
                        onChange={(e) => setdocument2(e.target.files[0])}
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 ">
                <div className="aon-inputicon-box">
                  <div className="radio-inline-box service-perform-list">
                    <div className="checkbox sf-radio-checkbox sf-radio-check-2">
                      <button onClick={senddata} className="btn btn-success">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opinsurance;
