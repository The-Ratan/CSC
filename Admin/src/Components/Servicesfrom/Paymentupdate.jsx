import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import apiurl from "../Oparaterlogin/config";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Paymentupdate = () => {
  const [output, setOutput] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [adminemail, setAdminEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [createdata, setCreatedata] = useState("");
  const [paymentdata, setPaymentdata] = useState([]);
  const [operatorRate, setOperatorRate] = useState("");
  const [customerRate, setCustomerRate] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const handleCardChange = (e) => {
    setSelectedCard(e.target.value);
  };
  useEffect(() => {
    payment();
  }, []);

  let tokenn = secureLocalStorage.getItem("adminidtoken");

  const options = {
    headers: {
      token: tokenn,
    },
  };

  const payment = () => {
    axios
      .get(`${apiurl[0].apiUrl}admin/get_all_payment`, options)
      .then((res) => {
        setPaymentdata(res.data.data);
      })
      .catch((error) => {

      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tokenn = secureLocalStorage.getItem("adminidtoken");

    const options = {
      headers: {
        token: tokenn,
      },
    };

    const userData = {
      type: selectedCard,
      operator_rate: operatorRate,
      customer_rate: customerRate,
    };
    axios.post(`${apiurl[0].apiUrl}admin/all_payment`, userData, options).then((res) => {
        toast.success("Payment rates updated successfully");
        payment();
      })
      .catch((error) => {
        toast.error("Some error occurred, maybe an invalid request");
      });
      setOperatorRate('');
      setCustomerRate('');
      setSelectedCard('');
  };

  return (
    <>
      <Header />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1>Payment Rate </h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>
            <li className="active">Payment</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Type</th>
                    <th>Customer Rate</th>
                    <th>Operator Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(paymentdata).map(
                    ([cardType, cardData], index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{cardType}</td>
                        <td>{cardData.customer_rate}</td>
                        <td>{cardData.operator_rate}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="">
                <form onSubmit={handleSubmit} className="form-horizontal">
                  <div className="tab-content">
                    <div className="active tab-pane fade in" id="generalinfo">
                      <div className="form-group">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          Update Payment Rates




                        <select
                            value={selectedCard}
                            onChange={handleCardChange}
                            className="form-control"
                          ><option >Select One Please</option>
                            <option value="eshramcard">eshramcard</option>
                            <option  value='income'>income</option>
                            <option value='cast'>cast</option>
                            <option value='domicile'>domicile</option>
                            <option value='pfwithdrawal'>pfwithdrawal</option>
                            <option value='pfkyc' >pfkyc</option>
                            <option value='pfnomination'>pfnomination</option>

                            <option value='pfmidtransfer'>pfmidtransfer</option>
                            <option value='policeverification'>policeverification</option>
                            <option value='fir'>fir</option>
                            <option value='lostreport'>lostreport</option>
                            <option value='aadharaddress'>aadharaddress</option>
                            <option value='ayushmanaddress'>ayushmanaddress</option>

                            <option value='uprationcard'>uprationcard</option>
                            <option value='pancardcorrection'>pancardcorrection</option>

                            <option value='otherform'>otherform</option>
                            <option value='msme'>msme</option>
                            <option value='foodlicense'>foodlicense</option>
                            <option value='freshpassport'>freshpassport</option>
                            <option value='tatkalpassport'>tatkalpassport</option>
                            <option value='railwayticket'>renewelpassport</option>
                            <option value='railwayticket'>railwayticket</option>
                            <option value='insurance'>insurance</option>

                            <option value='pancard'>pancard</option>
                            <option value='votercard'>votercard</option>

                            <option value='udidcard'>udidcard</option>
                            <option value='labourcard'>labourcard</option>
                            <option value='ayushmancard'>ayushmancard</option>
                          </select> 
                          <input required
                            type="number"
                            className="form-control"
                            name="operatorRate_pancard"
                            placeholder="Operator Rate"
                            onChange={(e) => setOperatorRate(e.target.value)}
                            value={operatorRate}
                          />
                          <input required
                            type="number"
                            className="form-control"
                            name="customerRate_pancard"
                            placeholder="Customer Rate"
                            onChange={(e) => setCustomerRate(e.target.value)}
                            value={customerRate}
                          />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="text-center">
                          <button type="submit" className="btn btn-success">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paymentupdate;
