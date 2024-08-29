import React, { useState } from "react";
import Header from "../Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "../Oparaterlogin/config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Admincreatesubadmin = () => {
  const [output, setoutput] = useState("");
  const [adminemail, setadminemail] = useState("");
  const [adminpassword, setadminpassword] = useState("");
  const [createdata, setcreatedata] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      email: adminemail,
      password: adminpassword,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/create_subadmin`, userdata ,options)
      .then((response) => {
        setcreatedata(response.data.data);
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
        setoutput("Some Error Occured May be Email Already Exist or Invalid");
      });
  };

  return (
    <div>
      <Header />
      <Toaster />

      <div>
        <section className="content">
          <div className="page-heading">
            <h1>CREATE NEW MANAGER</h1>
            <ol className="breadcrumb">
              <li>
                <Link to="/deashboard">Dashboard</Link>
              </li>
              <li className="active">
                <a href="#">OPERATOR</a>
              </li>
            </ol>
          </div>
          <div className="page-body">
            <div className="row justify-content-center clearfix">
              {/* User Image */}
              <font style={{ color: "red" }}>{output}</font>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                <form onSubmit={handlesubmit} className="form-horizontal">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="active">
                      <a href="#" role="tab" data-toggle="tab">
                        <i className="fa fa-bars m-r-5" />
                        ENTER DETAILS
                      </a>
                    </li>
                    <li></li>
                  </ul>
                  <div className="tab-content">
                    {/* General Info */}
                    <div className="active tab-pane fade in" id="generalinfo">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          ENTER EMAIL
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            required
                            onChange={(e) => {
                              setadminemail(e.target.value);
                            }}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          PASSWORD
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            onChange={(e) => {
                              setadminpassword(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-success">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <ul className="nav nav-tabs" role="tablist">
                                        <li className="active" style={{float:"right"}}>
                                            <a href="#generalinfo" role="tab" data-toggle="tab">
                                                 <div className='text-center'>
                                                    <button className='btn btn-success'>Add</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                        </li>
                                    </ul> */}
                </form>

                {/* {createdata?.map((data)=>{
                                    return( */}
                {createdata ? (
                  <div className="text-center">
                    Email ID{" "}
                    <button type="submit" className="btn btn-success">
                      {createdata?.email}
                    </button>
                    &nbsp; Password{" "}
                    <button type="submit" className="btn btn-success">
                      {createdata?.password}{" "}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
                {/* )
                                })} */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admincreatesubadmin;
