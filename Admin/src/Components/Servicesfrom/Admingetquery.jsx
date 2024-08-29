import React, { useEffect, useState } from "react";
// import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header";
import apiurl from "../Oparaterlogin/config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Admingetquery = ({ data }) => {
  const Navigate = useNavigate();
  const [contact, setcontact] = useState([]);
 
  useEffect(() => {
    userlist();
  },[0]);
  let tokenn = secureLocalStorage.getItem("adminidtoken");
  const options = {
    headers: {
      token: tokenn,
    },
  }; 
  const userlist = () => {
    axios
      .post(`${apiurl[0].apiUrl}admin/all_querybox` ,options)
      .then((res) => {

        setcontact(res.data.data);
      })
      .catch((error) => {

      });
  };

  return (
    <>
      <Header />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1>Query Data List</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Query By User</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>

                    <th>Phone No.</th>

                   

                    <th>Conern</th>
                    <th>Details</th>
                  </tr>
                </thead>

                {contact?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>{list?.name}</td>
                        <td>{list?.email}</td>
                        <td>{list?.phone_no}</td>

                        
                        <td>{list?.concern}</td>
                        <td><button onClick={(()=>{
                          secureLocalStorage.setItem("query",list?._id);
                          Navigate("/adminsinglequery")
                        })} className="btn btn-primary">Detail</button></td>
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

export default Admingetquery;



