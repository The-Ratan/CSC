import React, { useEffect, useState } from "react";
import OpHeader from "./OpHeader";
import axios from "axios";
import apiurl from "./config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const OpServiceslist = () => {
  const [accessdata, setaccessdata] = useState([]);
  
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
    }

    axios
      .post(`${apiurl[0].apiUrl}subadmin/get_accassabledata`, userdata ,options)
      .then((res) => {
        setaccessdata(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <OpHeader />
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
          <div className="panel-heading">SERVICES LIST PANCARD</div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Aadhaar Image</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                
                    <tbody>
                    {accessdata?.pancard?.map((list,index)=>{
                        return(
<tr>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="media-object"
                            src={`${apiurl[0].apiUrl}uploads/`+list?.aadhar_img}
                            width={64}
                            height={64}
                            alt="User Avatar"
                          />
                        </td>
                        <td>{list?.name}</td>
                        <td>{list?.father_name}</td>
                        
                        
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
                      </tr>
                        )
                    })}
                      
                    </tbody>
                 
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpServiceslist;
