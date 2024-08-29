import React, { useEffect, useState } from "react";

import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Header from "../Header";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "../Oparaterlogin/config";
import { Link } from "react-router-dom";
const Adminsinglequery = () => {
  const [pancard, setpancard] = useState();

  let id = secureLocalStorage.getItem("query");

  useEffect(() => {
    deletepancard();
  });
  const deletepancard = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const Userdata = {
      _id: id,
    };

    axios
      .post(
        `${apiurl[0].apiUrl}admin/single_querybox`,
        Userdata ,options
      )
      .then((res) => {
        setpancard(res.data.data);
      })
      .catch((error) => {

      });
  };

  const createdAt = pancard?.createdAt;
const formattedDateTime = new Date(createdAt).toLocaleString(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  // timeZoneName: 'short',
});
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
    let tokenn = secureLocalStorage.getItem("adminidtoken");
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
      .post(`${apiurl[0].apiUrl}admin/domicile_document`, formdata, options)
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <Header />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1>Query Raise Date - {formattedDateTime}</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Query</li>
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
                  <label>Phone Number</label>
                  <p
                    disabled
                    placeholder={pancard?.phone_no}
                    className="form-control"
                  >
                    {pancard?.phone_no}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Concern</label>
                  <p
                    disabled
                    placeholder={pancard?.message}
                    className="form-control"
                  >
                    {pancard?.concern}
                  </p>
                </div>
              </div>


            </div>
          </form>
        </div>

        
      </section>
    </>
  );
};

export default Adminsinglequery;


