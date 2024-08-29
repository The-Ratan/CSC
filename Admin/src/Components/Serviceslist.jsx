import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Serviceslist = () => {
  return (
    <div>
    
    <Header/>


    
    <section className="content">
        <div className="page-heading">
            <h1>Pancard List</h1>
            <ol className="breadcrumb">
                <li><Link to="/deashboard">Dashboard</Link></li>
                {/* <li><a href="javascript:void(0);"></a></li> */}
                <li className="active">Follower</li>
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
                            <th>Pan-No.</th>
                            <th>Date-of-Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
                            </td>
                            <td>Shubham</td>
                            <td>AAAAA9999A</td>
                            <td>14-04-1999</td>
                            <td>
                            <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
                            <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
                            
                            </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>
                            <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
                        </td>
                        <td>Shubham</td>
                        <td>AAAAA9999A</td>
                        <td>14-04-1999</td>
                        <td>
                        <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
                        <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
                        
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>
                        <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
                    </td>
                    <td>Shubham</td>
                    <td>AAAAA9999A</td>
                    <td>14-04-1999</td>
                    <td>
                    <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
                    <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
                    
                    </td>
                </tr>
                <tr>
                <td>1</td>
                <td>
                    <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
                </td>
                <td>Shubham</td>
                <td>AAAAA9999A</td>
                <td>14-04-1999</td>
                <td>
                <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
                <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
                
                </td>
            </tr>
            <tr>
            <td>1</td>
            <td>
                <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
            </td>
            <td>Shubham</td>
            <td>AAAAA9999A</td>
            <td>14-04-1999</td>
            <td>
            <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
            <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
            
            </td>
        </tr>
        <tr>
        <td>1</td>
        <td>
            <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
        </td>
        <td>Shubham</td>
        <td>AAAAA9999A</td>
        <td>14-04-1999</td>
        <td>
        <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
        <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
        
        </td>
    </tr>
    <tr>
    <td>1</td>
    <td>
        <img className="media-object" src="https://5.imimg.com/data5/XC/LH/BB/ANDROID-13177721/product-jpeg.jpg" width={64} height={64} alt="User Avatar" />
    </td>
    <td>Shubham</td>
    <td>AAAAA9999A</td>
    <td>14-04-1999</td>
    <td>
    <button type="button" className="m-w-100 btn btn-rounded btn-success">Edit</button>
    <button type="button" className="m-w-100 btn btn-rounded btn-danger">Remove</button>
    
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </section>
    
    </div>
  )
}

export default Serviceslist