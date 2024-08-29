import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Navsidebar from "./Navsidebar";
import Header2 from "./Header2";

const Recharge = () => {
  const data = [
    {
      id: 1,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 2,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 3,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },

    {
      id: 4,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 5,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 6,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 7,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 8,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 9,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 10,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 11,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 12,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 13,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 14,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 15,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 16,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 17,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 18,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 19,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 20,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 21,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 22,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    {
      id: 23,
      date: "10-02-2023",
      time: "03:50",
      txnid: 123452,
      servicedes: "good service",
      transremark: "done",
      debitamount: 450,
      creditamount: 500,
      balance: 800,
    },
    
  ];

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "date", text: "Transaction Date" },
    { dataField: "time", text: "Transaction Time" },
    { dataField: "txnid", text: "Txn ID" },
    { dataField: "servicedes", text: "Service Description(Service ID)" },
    { dataField: "transremark", text: "Transaction Remarks" },
    { dataField: "debitamount", text: "Debit Amount (INR)" },
    { dataField: "creditamount", text: "Credit Amount (INR)" },
    { dataField: "balance", text: "Balance" },
  ];

  const handleReset = (event) => {
    const form = document.getElementById("rechargeForm");
    if (form) {
      form.reset();
    }
  };

  const handleSearch = (event) => {};
  return (
    <div>
      <div className="page-wraper">
        <Header2 />
        {/* Sidebar Holder */}
        <Navsidebar />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            {/* <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                  <span className="fa fa-reorder" />
                </a>
              </div>
            </div> */}
            <div className="aon-admin-heading">
              <h4>Recharge History</h4>
            </div>
            <div
              class="section-content  sf-owl-arrow"
              style={{
                border: "1px solid #022279",

                boxShadow: "5px 5px 5px 5px #022279",
              }}
            >
              <div className="container pt-5">
                {/*Title Section Start*/}

                <div class="section-content  sf-owl-arrow">
                  <div className="container">
                    <div className="sf-contact-form-wrap">
                      {/*Contact Information*/}
                      <div className="sf-contact-form">
                        <form
                          id="rechargeForm"
                          className="contact-form"
                          method="post"
                          style={{ color: "#022279" }}
                        >
                          <div className="row">
                            {/* COLUMNS 1 */}

                            <div className="col-md-6">
                              <div className="form-group">
                                <label>* From Date</label>
                                <input
                                  type="date"
                                  name="fullname"
                                  placeholder="Name"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label>* To Date</label>
                                <input
                                  type="date"
                                  name="email"
                                  placeholder="Email"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Csc ID</label>
                                <input
                                  disabled
                                  type="text"
                                  name="phone"
                                  placeholder="1415263528"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Select Company Name</label>

                                <select class="form-control">
                                  <option>
                                    NIC UP EDISTRICT SERVICE - 126n Govt{" "}
                                  </option>
                                  <option>Govt </option>
                                  <option>Aeps </option>
                                  <i
                                    class="fa fa-caret-down displl"
                                    style={{ fontSize: "17px" }}
                                  ></i>
                                </select>
                              </div>
                            </div>

                            <div className="sf-contact-submit-btn">
                              <button
                                className="site-button"
                                type="submit"
                                onClick={handleReset}
                              >
                                Reset
                              </button>{" "}
                              <button
                                className="site-button"
                                type="submit"
                                onClick={handleSearch}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <br />
                      <div class="col-xl-12">
                        <div class="aon-staff-avtar">
                          <div
                            class="aon-staff-avtar-footer pt-3"
                            style={{ background: "rgb(2, 34, 121)" }}
                          >
                            <h4
                              class="aon-staff-avtar-title"
                              style={{ color: "white" }}
                            >
                              Total Aamount ={" "}
                              <button
                                type="button"
                                class="admin-button btn-sm "
                                title="Change Status"
                              >
                                140
                              </button>
                            </h4>
                            <h4
                              class="aon-staff-avtar-title"
                              style={{ color: "white" }}
                            >
                              Avilable Amount ={" "}
                              <button
                                type="button"
                                class="admin-button btn-sm "
                                title="Change Status"
                              >
                                140415263652
                              </button>
                            </h4>
                            <h4
                              class="aon-staff-avtar-title"
                              style={{ color: "white" }}
                            >
                              Pending Amount ={" "}
                              <button
                                type="button"
                                class="admin-button btn-sm "
                                title="Change Status"
                              >
                                1441520
                              </button>
                            </h4>
                            <h4
                              class="aon-staff-avtar-title"
                              style={{ color: "white" }}
                            >
                              Reserve Amount ={" "}
                              <button
                                type="button"
                                class="admin-button btn-sm "
                                title="Change Status"
                              >
                                35263140
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <br />
                      <div className="sf-bs-data-table">
                        <div className="row" style={{ color: "#022279" }}>
                          <div className="col-md-2">
                            <label>Show</label>
                            <select className="form-control">
                              <option>5</option>
                              <option>15</option>
                              <option>25</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label>Search</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <br />
                        <div className="table-responsive">
                          <BootstrapTable
                            keyField="id"
                            data={data}
                            columns={columns}
                            pagination={paginationFactory()}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
