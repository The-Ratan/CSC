import React, { useEffect, useState } from "react";
// import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import apiurl from "../Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Adminvoteridcard = ({ data }) => {
  const [voterid, setvoterid] = useState([]);
  const Navigate = useNavigate("");
  useEffect(() => {
    userlist();
  });
  let tokenn = secureLocalStorage.getItem("adminidtoken");
  const options = {
    headers: {
      token: tokenn,
    },
  }; 
  const userlist = () => {
    axios
      .get(`${apiurl[0].apiUrl}admin/get_voter_details` ,options)
      .then((res) => {
        setvoterid(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  let [storeid, setstoreid] = useState("");
  let deleteid = (storeidd) => {
    setstoreid(storeidd);
  };

  const deletevoteridcard = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      _id: storeid,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/delete_voterid_details`, userdata ,options)
      .then((res) => {
        toast.success(res.data.msg);
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
          <h1>Voterid Card List</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Voterid</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>User Image</th>
                    <th>Aadhar Image</th>

                    <th>Name</th>

                    <th>Status</th>
                    <th>Action</th>
                    <th>View</th>
                  </tr>
                </thead>

                {voterid?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>
                          {" "}
                          <img
                            className="media-object"
                            src={`${apiurl[0].apiUrl}uploads/`+list?.user_img}
                            width={64}
                            height={64}
                            alt="User Avatar"
                          />
                        </td>
                        <td>
                          {" "}
                          <img
                            className="media-object"
                            src={`${apiurl[0].apiUrl}uploads/`+list?.aadhar_img}
                            width={64}
                            height={64}
                            alt="User Avatar"
                          />
                        </td>
                        <td>{list?.name}</td>
                        {/* <td>{list?.email}</td> */}
                        {/* <td>{list?.phone_no}</td> */}
                        {/* <td>{list?.user_type}</td> */}
                        <td>
                          {list?.approve_status == 1 ? (
                            <button
                              type="button"
                              className="m-w-100 btn btn-rounded btn-success"
                            >
                              Approve
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="m-w-100 btn btn-rounded btn-primary"
                            >
                              Pending
                            </button>
                          )}
                        </td>
                        <td>
                          {" "}
                          <button
                            onClick={() => deleteid(list?._id)}
                            data-toggle="modal"
                            data-target="#myModal21"
                            type="button"
                            className="m-w-100 btn btn-rounded btn-danger"
                          >
                            Delete
                          </button>
                          <div
                            style={{ width: "100%", marginTop: "200px" }}
                            className="modal fade"
                            id="myModal21"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-sm modal-dialog-centered"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Do you want delete ?
                                  </h5>
                                </div>

                                <div className="modal-footer">
                                  <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    data-dismiss="modal"
                                    onClick={() => deletevoteridcard(list?._id)}
                                    className="btn btn-danger"
                                  >
                                    Delete Data
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <button
                            onClick={() => {
                              secureLocalStorage.setItem("voterid", list?._id);
                              Navigate("/adminvotercarddetails");
                            }}
                            type="button"
                            className="m-w-100 btn btn-rounded btn-info"
                          >
                            View Data
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adminvoteridcard;
