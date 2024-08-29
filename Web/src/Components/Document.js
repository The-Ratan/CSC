import React, { useEffect, useState } from 'react'
import axios from "axios";

import Navsidebar from './Navsidebar'
import Header2 from './Header2'
import apiurl from './config';
import secureLocalStorage from 'react-secure-storage';

const Document = () => {
  const [documentfile, setdocumentfile] = useState([]);

  useEffect(() => {
    getdocument();
  }); 
  let tokenn = secureLocalStorage.getItem("operatortoken");
  const options = {
    headers: {
      token: tokenn,
    },
  };
  const getdocument = () => {
    axios.get(`${apiurl[0].apiUrl}website/get_document`,options).then((res) => {
      setdocumentfile(res.data.data);
    });
  };




  return (
    <div>
   
    <div className="page-wraper">
    <Header2/>           
      {/* Sidebar Holder */}
     <Navsidebar/>
      {/* Page Content Holder */}
      <div id="content">
          <div className="content-admin-main">
            <div className="aon-admin-heading">
              <h4>CSCWALE Documentation</h4>
            </div>
            <div class="section-content  sf-owl-arrow">
              <div className="container" style={{ background: "#022279" }}>
                {/*Title Section Start*/}
                <div className="section-head">
                  <div className="col-md-6">
                    <br />
                    {/* <h3 className="sf-title text-white">My Business </h3> */}
                  </div>
                </div>
                {documentfile?.map((data) => {
                  return (
                    <div class="d-flex">
                      <div class="aon-w-choose-right">
                        <h4 class="aon-title">
                          {data?.file}{" "}


<button className="site-button">
  <a href={`http://103.104.74.215:3099/uploads/${data?.file}`} download="document.pdf">
    Download pdf
  </a>
</button>



                        </h4>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  );
                })}

                <br />
              </div>
            </div>
          </div>
        </div>
    </div>       
  
   
  </div>
  )
}

export default Document


