import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "./Oparaterlogin/config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Alloperator = () => {
  const [subadmin, setsubadmin] = useState([]);

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
      .get(`${apiurl[0].apiUrl}admin/get_subadmins` ,options)
      .then((res) => {
        setsubadmin(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  let [storeid, setstoreid] = useState("");
  let deleteid = (storeidd) => {
    setstoreid(storeidd);
  };

  const deletesubadmin = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const subadmindata = {
      email: storeid,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/delete_subadmin`, subadmindata ,options)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((error) => {});
  };
  return (
    <>
      <Header />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1>Approved Manager List</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>
            {/* <li><a href="javascript:void(0);"></a></li> */}
            <li className="active">Operator</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Operator Eamil</th>
                    <th>Operator Password</th>

                    <th>Action</th>
                  </tr>
                </thead>

                {subadmin?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>{list?.email}</td>
                        <td>{list?.password}</td>

                        <td>
                          <button
                            onClick={() => deleteid(list?.email)}
                            data-toggle="modal"
                            data-target="#myModal21"
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
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
                                  onClick={() => deletesubadmin(list?.email)}
                                  className="btn btn-danger"
                                >
                                  Delete Data
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Alloperator;
