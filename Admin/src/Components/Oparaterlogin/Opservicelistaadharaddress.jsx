import React, { useEffect, useState } from "react";
import OpHeader from "./OpHeader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
const Opservicelistaadharaddress = () => {
  const [accessdata, setaccessdata] = useState([]);
  const Navigate = useNavigate("");
  let accessdatadid = secureLocalStorage.getItem("subadminidemail");

  useEffect(() => {
    userlist();
  });
  const userlist = () => {
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      email: accessdatadid,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/get_accassabledata`, userdata ,options)
      .then((res) => {
        setaccessdata(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const voterapprove = (item) => {
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      _id: item,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/approve_aadhar_address`, userdata ,options)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <OpHeader />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1 style={{ opacity: "0" }}>Services Listaa</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>
            {/* <li><a href="javascript:void(0);"></a></li> */}
            <li className="active">Services List</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">SERVICES LISTAADHAAR ADDRESS</div>
          <div className="panel-body">
            <div className="table-responsive">
              {accessdata?.votercard?.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Aadhaar Image</th>
                      <th>Phone Number</th>
                      <th>Aadhar Number</th>
                      <th>Approve</th>

                      <th>View</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {accessdata?.aadharaddress?.map((list, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              className="media-object"
                              src={`${apiurl[0].apiUrl}uploads/`+list?.address_proof_img}
                              width={64}
                              height={64}
                              alt="User Avatar"
                            />
                          </td>
                          <td>{list?.aadhar_linked_phone_no}</td>
                          <td>{list?.aadhar_number}</td>

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
                            <button
                              onClick={() => {
                                secureLocalStorage.setItem(
                                  "opadharaddress",
                                  list?._id
                                );
                                Navigate("/opaadharaddress");
                              }}
                              type="button"
                              className="m-w-100 btn btn-rounded btn-info"
                            >
                              View Data
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                voterapprove(list?._id);
                              }}
                              type="button"
                              className="m-w-100 btn btn-rounded btn-success"
                            >
                              Approve Ayuhman
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p>No Access By Admin</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opservicelistaadharaddress;
