import React, { useEffect, useState } from "react";
// import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import apiurl from "../Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Adminaadharaddress = ({ data }) => {
  const [ayushmancard, setayushmancard] = useState([]);
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
      .get(`${apiurl[0].apiUrl}admin/all_aadhar_address_data` ,options)
      .then((res) => {
        setayushmancard(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  let [storeid, setstoreid] = useState("");
  let deleteid = (storeidd) => {
    setstoreid(storeidd);
  };
  const deleteayushmancard = () => {
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
      .post(`${apiurl[0].apiUrl}admin/delete_aadhar_address`, userdata ,options)
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
          <h1>Aadhar Address</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Aadhar Address</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Aadhar No.</th>
                    <th>Aadhar Link Phone No.</th>
                    <th>Address Proof</th>

                    <th>Status</th>
                    <th>Action</th>
                    <th>View</th>
                  </tr>
                </thead>

                {ayushmancard?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>{list?.aadhar_number}</td>
                        <td>{list?.aadhar_linked_phone_no}</td>
                        <td>
                          {" "}
                          <img
                            className="media-object"
                            src={
                              `${apiurl[0].apiUrl}uploads/` +
                              list?.address_proof_img
                            }
                            width={64}
                            height={64}
                            alt="User Avatar"
                          />
                        </td>

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
                                      onClick={() =>
                                        deleteayushmancard(list?._id)
                                      }
                                      className="btn btn-danger"
                                    >
                                      Delete Data
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </td>

                        <td>
                          <button
                            onClick={() => {
                              secureLocalStorage.setItem("aadhar", list?._id);
                              Navigate("/adminsingleaadhar");
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

export default Adminaadharaddress;
