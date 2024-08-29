import React, { useEffect, useState } from 'react'
import OpHeader from './OpHeader'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiurl from './config'
import secureLocalStorage from "react-secure-storage";
const OpDeashboard = () => {
  const [perdaydata , setperdaydata] = useState();
  
  const [ayushmancard , setayushmancard] = useState();

  
  useEffect(() => {
    userlist();
  },[0]);

  const userlist = () => {
    axios
      .get(`${apiurl[0].apiUrl}admin/get_all_form_data`)
      .then((res) => {
        
        setayushmancard(res.data);
      })
      .catch((error) => {
        
      });
  };

let emailid=secureLocalStorage.getItem("subadminidemail")
  useEffect(() => {
    perday();
  },[0]);

  const perday = () => {
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      email: emailid,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/per_day_pending_data`, userdata ,options)
      .then((res) => {
        console.log("asd",res)
        setperdaydata(res.data);
      })
      .catch((error) => {

      });
  };




  return (
    <>
    
    <OpHeader/>
    <section className="content dashboard">
    <div className="page-heading">
      <h1>All SERVICES</h1>
    </div>
    <div className="page-body">
  
    
      
      <div className="row clearfix">




      {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
        <Link to="#" style={{cursor:"pointer"}}>
          <div className="info-box infobox-type-2 bg-warning" style={{height:'120px'}}>
           
            <div className="content">
              <div className="text"><h4>Total Document </h4></div>
              <div className="btn btn-warning"><h2>{ayushmancard?.allData} </h2></div>
              
              <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
            </div>
          </div>
        </Link>
      </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
        <Link to="#" style={{cursor:"pointer"}}>
          <div className="info-box infobox-type-2 bg-danger" style={{height:'120px'}}>
           
            <div className="content">
              <div className="text"><h4>Reject Document</h4></div>
              <div className="btn btn-danger"><h2>{ayushmancard?.allData} </h2></div>
              <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
            </div>
          </div>
        </Link>
      </div> */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="#" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary" style={{height:'120px'}}>
              
              <div className="content">
                <div className="text"><h4>Pending Document</h4></div>
                <div className="btn btn-primary"><h2>{perdaydata?.perdayPendingData} </h2></div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

         {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
         <Link to="#" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success" style={{height:'120px'}}>
              
              <div className="content">
                <div className="text"><h4>Approved Document</h4></div>
                <div className="btn btn-success"><h2>{ayushmancard?.approveData} </h2></div>
                <div className="number count-to" data-from={0} data-to={245} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>  */}

        <br/>
        <br/>
        <br/>




        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistayushman">
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">star_border</i></div>
              <div className="content">
                <div className="text">Ayushman-Card</div>
                <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistvoterid">
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Voter-Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpancard">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Pan-Card</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelisteshram">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">star_border</i></div>
              <div className="content">
                <div className="text">E-Card</div>
                <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistlabour">
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Labour-Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistudid">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Udid-Card</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistincome">
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">star_border</i></div>
              <div className="content">
                <div className="text">Income Certificate</div>
                <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistdomicile">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Domicile Certificate</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistcast">
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Cast Certificate</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpfwithdraw">
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">star_border</i></div>
              <div className="content">
                <div className="text">Pf Withdraw</div>
                <div className="number count-to" data-from={0} data-to={348} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpfkyc">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Pf-Kyc</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpfnomination">
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Pf-Nomination</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpfmidtransfer">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Pf Midtransfer</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpoliceverification">
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Police Verification</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistfir">
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Fir</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistlostreport">
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Lost Report</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistaadharaddress">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Aadhar Address</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistaayusman">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">group_add</i></div>
              <div className="content">
                <div className="text">Aayusman Address</div>
                <div className="number count-to" data-from={0} data-to={2158} data-speed={1500} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistupration">
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Up Ration Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>









        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistpancardcorrection">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Pancard Correction</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistotherform">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Other Form</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistmsme">
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Msme</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistfoodlicense">
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Food License</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistfreshpassport">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Fresh Passport</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelisttatkalpassport">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Tatkal Passport</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistrenewal">
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Renewal</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistrailwayticket">
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Railway Ticket</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/opservicelistinsurance">
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Insurance</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

       

      </div>


      <div className="main-graph">
      </div>

    </div>
  </section>
    
    </>
  )
}

export default OpDeashboard