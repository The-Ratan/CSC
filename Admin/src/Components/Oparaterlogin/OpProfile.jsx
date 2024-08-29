import React from 'react'
import OpHeader from './OpHeader'
import { Link } from 'react-router-dom'

const OpProfile = () => {
  return (
    <>
      <OpHeader />

     
      {/* #END# Right Sidebar */}
      <section className="content">
        <div className="page-heading">
          <h1>CONTACT DETAIL</h1>
          <ol className="breadcrumb">
            <li><Link to="/deashboard">Dashboard</Link></li>
            <li className="active"><a href="#">Profile</a></li>
          </ol>
        </div>
        <div className="page-body">
          <div className="row  justify-content-center">
            {/* User Image */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div className="panel panel-default">
             
                <div className="panel-body">
                  <div className="align-center">
                    <img src="../../assets/images/avatars/face2.jpg" className="img-circle m-b-10" height={100} width={100} alt="User Avatar" />
                    <div className="font-15 font-bold">operator Name</div>
                    <p className="font-15 ">operator@gmail.com</p>
                    <button className="btn btn-sm btn-default m-t-25" onclick="$('.js-image-upload').click();">
                      <i className="fa fa-upload font-15 m-r-5" />Upload New Image
                    </button>
                  </div>
                  <input type="file" className="js-image-upload form-control hide" />
                </div>
              </div>

            </div>

          </div>
        </div>  
      </section>


    </>
  )
}

export default OpProfile