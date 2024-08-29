import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import apiurl from "./Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const LoginuserOTP = () => {
  const Navigate = useNavigate();
  const [userlisttotp, setuserlistotp] = useState([]);

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
      .get(`${apiurl[0].apiUrl}admin/user_self_list`,options)
      .then((res) => {
        setuserlistotp(res.data.data);
      
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <Header />
      <section className="content">
        <div className="page-heading">
          <h1>Self Login User</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>
            {/* <li><a href="javascript:void(0);"></a></li> */}
            <li className="active">Self Login User</li>
          </ol>
        </div>
        <div className="panel panel-default ml-2">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mobile Number</th>
                    <th>Type</th>
                    <th>Otp</th>
                    <th>View</th>
                  </tr>
                </thead>
                {userlisttotp?.map((list) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{list?.phone_no}</td>
                        <td>{list?.user_type}</td>
                        <td>
                          <button
                            type="button"
                            className=" btn btn-rounded btn-success"
                          >
                            {list?.otp}
                          </button>
                        </td>

                        <td>
                          <button onClick={() => {
        secureLocalStorage.setItem("userdetails", list?._id);
        Navigate('/adminuserdetails');
      }}
                            type="button"
                            className=" btn btn-rounded btn-primary"
                          >
                            View-details
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
    </div>
  );
};

export default LoginuserOTP;
