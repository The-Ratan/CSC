import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import apiurl from "./Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Userlogin = ({ data }) => {
  const Navigate = useNavigate();
  const [userlistt, setuserlist] = useState([]);

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
      .get(`${apiurl[0].apiUrl}admin/user_operator_list` ,options)
      .then((res) => {
        setuserlist(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const approveoperator = (id) => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    }; 
    const Userapprove = {
      _id: id,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/Approve_Status`, Userapprove ,options)
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
          <h1>Manager Login User</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

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
                    <th>Image</th>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th>Action</th>
                    <th>View</th>
                  </tr>
                </thead>

                {userlistt?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>
                          {" "}
                          <img
                            className="media-object"
                            src={`${apiurl[0].apiUrl}uploads/`+list?.aadhar_image}
                            width={64}
                            height={64}
                            alt="User Avatar"
                          />
                        </td>
                        <td>{list?.name}</td>
                        <td>{list?.email}</td>
                        <td>{list?.phone_no}</td>
                        <td>{list?.user_type}</td>
                        <td>
                          {list?.approve_status == 1 ? (
                            <button
                              onClick={() => approveoperator(list?._id)}
                              type="button"
                              className="m-w-100 btn btn-rounded btn-success"
                            >
                              Approve
                            </button>
                          ) : (
                            <button
                              onClick={() => approveoperator(list?._id)}
                              type="button"
                              className="m-w-100 btn btn-rounded btn-primary"
                            >
                              Pending
                            </button>
                          )}
                        </td>
                        <td><button
                              onClick={() => {
                                secureLocalStorage.setItem("userdetails", list?._id);
                                Navigate('/adminuserdetails');
                              }}
                              type="button"
                              className="m-w-100 btn btn-rounded btn-primary"
                            >
                              View Detail
                            </button></td>
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

export default Userlogin;
