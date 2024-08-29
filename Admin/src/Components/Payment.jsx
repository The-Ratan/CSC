import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'
import axios from 'axios'
import apiurl from './Oparaterlogin/config'

const Payment = () => {



    const [payment, setpayment] = useState([]);

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
        .post(`${apiurl[0].apiUrl}admin/payment_list` ,options)
        .then((res) => {
          setpayment(res.data.data);
        })
        .catch((error) => {

        });
    };


    const downloadImage = (imageUrl, imageName) => {
        axios({
          url: imageUrl,
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", imageName);
          document.body.appendChild(link);
          link.click();
        });
      };





    //   const createdAt = payment?.createdAt;
    //   const formattedDateTime = new Date(createdAt).toLocaleString(undefined, {
    //     year: 'numeric',
    //     month: 'numeric',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
        
    //   });
    return (
        <>
            <Header />
            <section className="content">
                <div className="page-heading">
                    <h1>Payment History</h1>
                    <ol className="breadcrumb">
                        <li><Link to="/deashboard">Dashboard</Link></li>
                        {/* <li><a href="javascript:void(0);"></a></li> */}
                        <li className="active">Payment</li>
                    </ol>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Amount <i className="fa fa-wallet"> </i> 
                    {/* : 1500 Rs */}
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Document</th>
                                        <th>Screenshot</th>
                                        <th>Screenshot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payment?.map((paymentdata ,index)=>{
                                        return(
<tr>
                                        <td>{index+1}</td>
                                        <td>
                                            <label className="label label-danger">{paymentdata?.type}</label>
                                        </td>
                                        <td>{paymentdata?.payment} Rs</td>
                                        <td>{paymentdata?.collection}</td>
                                        
<td>

                  <img
                    disabled
                    src={`${apiurl[0].apiUrl}uploads/` + paymentdata?.payment_img}
                    height={200}
                    width={200}
                  /></td>
                                        
                                        <td><a
                  onClick={() =>
                    downloadImage(
                      `${apiurl[0].apiUrl}uploads/` + paymentdata?.payment_img,
                      `payment_img_${paymentdata?._id}.png`
                    )
                  }
                >
                  Download
                </a></td>
                                    </tr>
                                        )
                                    })}
                                    
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Payment