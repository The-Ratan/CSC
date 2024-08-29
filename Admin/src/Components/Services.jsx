import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    
    <Header/>
    <section className="content dashboard">
    <div className="page-heading">
      <h1>OUR SERVICES</h1>
    </div>
    <div className="page-body">
      {/* Infobox */}
      {/* Hover Zoom Effect */}
      <div className="block-header">
        {/* <h2>HOVER ZOOM EFFECT</h2> */}
      </div>
      <div className="row clearfix">

      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpancard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Pancard</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminvoteridcard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Voteridcard</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminlabourcard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Labour Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminudidcard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Udid Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminayushmancard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-default">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Ayushman Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/admineshramcard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Eshram Card</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminincome" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Income Certificate</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/admindomicile" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Domicile Certificate</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/admincast" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Cast Certificate</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpfwithdraw" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-default">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">PF Withdraw</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpfkyc" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">PF Kyc</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpfnomination" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">PF Nomination</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpfmidtransfer" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">PF Midtransfer</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpoliceverification" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Police Verification</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminfir" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Fir</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminlostreport" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Lost Report</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminaadharaddress" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Aadhar Address </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminaayushmanaddress" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Aayushman Address </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminuprationcard" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Up Ration Card </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminpancardcorrection" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-info">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Pancard Correction </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminotherform" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Other Form </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminmsme" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Msme </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminfoodlicense" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Food License </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminfreshpassport" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-success">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Fresh Passport </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/admintatkalpassport" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-primary">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Tatkal Passport </div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminrenewal" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-warning">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Renewal</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/adminrailwayticket" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-danger">
              <div className="icon"><i className="material-icons">payment</i></div>
              <div className="content">
                <div className="text">Railway Ticket</div>
                <div className="number count-to" data-from={0} data-to={143} data-speed={1000} data-fresh-interval={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
          <Link to="/admininsurance" style={{cursor:"pointer"}}>
            <div className="info-box infobox-type-2 bg-warning">
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

export default Services