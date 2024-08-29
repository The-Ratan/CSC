import React from "react";

import Navsidebar from "./Navsidebar";
import Header2 from "./Header2";

const Mybooking = () => {
  return (
    <div>
      <div className="page-wraper">
        <Header2 />
        {/* Sidebar Holder */}
        <Navsidebar />
        {/* Page Content Holder */}
        <div id="content">
          <div className="content-admin-main">
            <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
              <div className="admin-left-area">
                <a
                  className="nav-btn-admin d-flex justify-content-between align-items-center"
                  id="sidebarCollapse"
                >
                  {/* <span className="nav-btn-text">Dashboard Menu</span> */}
                  <span className="fa fa-reorder" />
                </a>
              </div>
              {/* <div className="admin-area-mid">
                <div className="admin-area-heading">
                  <span>Your Tariff Plan : </span>
                  <strong>
                    Extended <i className="fa fa-caret-down" />
                  </strong>
                </div>
                <div className="admin-area-content">
                  you Are on Extended . Use link bellow to view details or
                  upgrade.Details{" "}
                </div>
              </div>
              <div className="admin-right-area">
                <div className="pro-pic-info-wrap d-flex">
                  <div className="pro-pic-box">
                    <img src="images/user.jpg" alt="" />
                  </div>
                  <div className="pro-pic-info">
                    <strong>David Wood</strong>
                    <span>Designer</span>
                  </div>
                  <span className="feather-icon has-toltip">
                    <i className="feather-power" />
                    <span className="header-toltip">Notification</span>
                  </span>
                </div>
              </div> */}
            </div>
            <div className="aon-admin-heading">
              <h4>Manage Services</h4>
              
            </div>
            <div className="card aon-card">
              <div className="card-body aon-card-body">
                {/* Week Tabs*/}
                <div className="sf-availability-times-tab m-b50">
                  <div className="sf-custom-tabs sf-custom-new">
                    {/*Tabs*/}
                    <img src="./images/fc.png" style={{height:'200px' , width:'100%' , borderRadius:'10px'}}/>
                    {/*Tabs Content*/}
                    <div className="tab-content">
                      {/*Upcoming*/}
                      
                      <div className="table-responsive">
                        
                              <table
                                className="table table-striped table-bordered example-table aon-booking-table"
                                style={{ width: "100%" }}
                              >
                                <thead>
                                  <tr>
                                    <th>
                                      <div className="checkbox sf-radio-checkbox">
                                        {/* <input
                                          id="th1_1"
                                          name="abc"
                                          defaultValue="five"
                                          type="radio"
                                        /> */}
                                        {/* <label htmlFor="th1_1">
                                          <span className="btn btn-danger btn-xs">
                                            <i className="fa fa-trash-o" />
                                          </span>
                                        </label> */}
                                      </div>
                                    </th>
                                    <th>Booking Info</th>
                                    <th>Payment Info</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="checkbox sf-radio-checkbox">
                                        <input
                                          id="td2_2"
                                          name="abc"
                                          defaultValue="five"
                                          type="radio"
                                        />
                                        <label htmlFor="td2_2" />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="sf-booking-info-col">
                                        <span className="sf-booking-refid">
                                          #1114
                                        </span>
                                        <span className="booking-status sf-booking-incomplete">
                                          Incomplete
                                        </span>
                                        <div className="sf-booking-upcoming">
                                          Job
                                        </div>
                                        <div className="sf-booking-customer">
                                          <ul className="customer-info">
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Agent Name
                                              </strong>{" "}
                                              Heima Agency
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Customer Name
                                              </strong>{" "}
                                              LAURA BARRERA
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-phone" />{" "}
                                                Customer Phone
                                              </strong>{" "}
                                              +52 81 1911 2887
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-calendar-o" />{" "}
                                                Date
                                              </strong>{" "}
                                              2021-12-26
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-clock-o" />{" "}
                                                Time
                                              </strong>{" "}
                                              13:25:00
                                            </li>
                                          </ul>
                                        </div>
                                        <button
                                          type="button"
                                          className="admin-button assignButton margin-r-10"
                                        >
                                          <i className="fa fa-user" />
                                          Assign Now
                                        </button>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="inner">
                                        <h3>
                                          <span
                                            className="sf-booking-payment-info"
                                            data-toggle="popover"
                                            data-container="body"
                                            data-placement="top"
                                            data-html="true"
                                            id="payinfo-1115"
                                            data-trigger="hover"
                                            data-original-title
                                            title
                                          >
                                            85.00₹{" "}
                                          </span>
                                          <span className="sf-payment-status">
                                            Paid
                                          </span>
                                        </h3>
                                        <div
                                          id="popover-content-payinfo-1115"
                                          className="hide sf-pop-hide"
                                        >
                                          <ul className="list-unstyled margin-0 booking-payment-data">
                                            <li>
                                              <strong>Total Amount:</strong>{" "}
                                              85.00₹
                                            </li>
                                            <li>
                                              <strong>Providers Fee:</strong>{" "}
                                              57.00₹
                                            </li>
                                            <li>
                                              <strong>Admin Fee:</strong> 28.00₹
                                            </li>
                                            <li>
                                              <strong>Payment Method:</strong>{" "}
                                            </li>
                                            <li>
                                              <strong>
                                                Admin pay to providers:
                                              </strong>{" "}
                                              Pending
                                            </li>
                                            <li>
                                              <strong>Transaction ID:</strong>{" "}
                                              NA
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm viewBookings"
                                        title="View Booking"
                                      >
                                        <i className="fa fa-eye" />
                                      </button> */}
                                       <button
                                        type="button"
                                        className="admin-button btn-sm "
                                        title="Change Status"
                                      >
                                        Pay Now
                                      </button>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm addInvoice margin-r-5"
                                        title="Add Invoice"
                                      >
                                        <i className="fa fa-plus" />
                                      </button>  */}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="checkbox sf-radio-checkbox">
                                        <input
                                          id="td2"
                                          name="abc"
                                          defaultValue="five"
                                          type="radio"
                                        />
                                        <label htmlFor="td2" />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="sf-booking-info-col">
                                        <span className="sf-booking-refid">
                                          #1114
                                        </span>
                                        <span className="booking-status sf-booking-incomplete">
                                          Incomplete
                                        </span>
                                        <div className="sf-booking-upcoming">
                                          Job
                                        </div>
                                        <div className="sf-booking-customer">
                                          <ul className="customer-info">
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Agent Name
                                              </strong>{" "}
                                              Heima Agency
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Customer Name
                                              </strong>{" "}
                                              LAURA BARRERA
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-phone" />{" "}
                                                Customer Phone
                                              </strong>{" "}
                                              +52 81 1911 2887
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-calendar-o" />{" "}
                                                Date
                                              </strong>{" "}
                                              2021-12-26
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-clock-o" />{" "}
                                                Time
                                              </strong>{" "}
                                              13:25:00
                                            </li>
                                          </ul>
                                        </div>
                                        <button
                                          type="button"
                                          className="admin-button assignButton margin-r-10"
                                        >
                                          <i className="fa fa-user" />
                                          Assign Now
                                        </button>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="inner">
                                        <h3>
                                          <span
                                            className="sf-booking-payment-info"
                                            data-toggle="popover"
                                            data-container="body"
                                            data-placement="top"
                                            data-html="true"
                                            id="payinfo-1114"
                                            data-trigger="hover"
                                            data-original-title
                                            title
                                          >
                                            85.00₹{" "}
                                          </span>
                                          <span className="sf-payment-status">
                                            Paid
                                          </span>
                                        </h3>
                                        <div
                                          id="popover-content-payinfo-1114"
                                          className="hide sf-pop-hide"
                                        >
                                          <ul className="list-unstyled margin-0 booking-payment-data">
                                            <li>
                                              <strong>Total Amount:</strong>{" "}
                                              85.00₹
                                            </li>
                                            <li>
                                              <strong>Providers Fee:</strong>{" "}
                                              57.00₹
                                            </li>
                                            <li>
                                              <strong>Admin Fee:</strong> 28.00₹
                                            </li>
                                            <li>
                                              <strong>Payment Method:</strong>{" "}
                                            </li>
                                            <li>
                                              <strong>
                                                Admin pay to providers:
                                              </strong>{" "}
                                              Pending
                                            </li>
                                            <li>
                                              <strong>Transaction ID:</strong>{" "}
                                              NA
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm viewBookings"
                                        title="View Booking"
                                      >
                                        <i className="fa fa-eye" />
                                      </button> */}
                                      <button
                                        type="button"
                                        className="admin-button btn-sm "
                                        title="Change Status"
                                      >
                                        Pay Now
                                      </button>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm addInvoice margin-r-5"
                                        title="Add Invoice"
                                      >
                                        <i className="fa fa-plus" />
                                      </button> */}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="checkbox sf-radio-checkbox">
                                        <input
                                          id="td3"
                                          name="abc"
                                          defaultValue="five"
                                          type="radio"
                                        />
                                        <label htmlFor="td3" />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="sf-booking-info-col">
                                        <span className="sf-booking-refid">
                                          #1114
                                        </span>
                                        <span className="booking-status sf-booking-incomplete">
                                          Incomplete
                                        </span>
                                        <div className="sf-booking-upcoming">
                                          Job
                                        </div>
                                        <div className="sf-booking-customer">
                                          <ul className="customer-info">
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Agent Name
                                              </strong>{" "}
                                              Heima Agency
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Customer Name
                                              </strong>{" "}
                                              LAURA BARRERA
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-phone" />{" "}
                                                Customer Phone
                                              </strong>{" "}
                                              +52 81 1911 2887
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-calendar-o" />{" "}
                                                Date
                                              </strong>{" "}
                                              2021-12-26
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-clock-o" />{" "}
                                                Time
                                              </strong>{" "}
                                              13:25:00
                                            </li>
                                          </ul>
                                        </div>
                                        <button
                                          type="button"
                                          className="admin-button assignButton margin-r-10"
                                        >
                                          <i className="fa fa-user" />
                                          Assign Now
                                        </button>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="inner">
                                        <h3>
                                          <span
                                            className="sf-booking-payment-info"
                                            data-toggle="popover"
                                            data-container="body"
                                            data-placement="top"
                                            data-html="true"
                                            id="payinfo-11113"
                                            data-trigger="hover"
                                            data-original-title
                                            title
                                          >
                                            85.00₹{" "}
                                          </span>
                                          <span className="sf-payment-status">
                                            Paid
                                          </span>
                                        </h3>
                                        <div
                                          id="popover-content-payinfo-11113"
                                          className="hide sf-pop-hide"
                                        >
                                          <ul className="list-unstyled margin-0 booking-payment-data">
                                            <li>
                                              <strong>Total Amount:</strong>{" "}
                                              85.00₹
                                            </li>
                                            <li>
                                              <strong>Providers Fee:</strong>{" "}
                                              57.00₹
                                            </li>
                                            <li>
                                              <strong>Admin Fee:</strong> 28.00₹
                                            </li>
                                            <li>
                                              <strong>Payment Method:</strong>{" "}
                                            </li>
                                            <li>
                                              <strong>
                                                Admin pay to providers:
                                              </strong>{" "}
                                              Pending
                                            </li>
                                            <li>
                                              <strong>Transaction ID:</strong>{" "}
                                              NA
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                        {/* <button
                                        type="button"
                                        className="admin-button btn-sm viewBookings"
                                        title="View Booking"
                                      >
                                        <i className="fa fa-eye" />
                                      </button> */}
                                      <button
                                        type="button"
                                        className="admin-button btn-sm "
                                        title="Change Status"
                                      >
                                        Pay Now
                                      </button>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm addInvoice margin-r-5"
                                        title="Add Invoice"
                                      >
                                        <i className="fa fa-plus" />
                                      </button> */}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="checkbox sf-radio-checkbox">
                                        <input
                                          id="td4"
                                          name="abc"
                                          defaultValue="five"
                                          type="radio"
                                        />
                                        <label htmlFor="td4" />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="sf-booking-info-col">
                                        <span className="sf-booking-refid">
                                          #1114
                                        </span>
                                        <span className="booking-status sf-booking-incomplete">
                                          Incomplete
                                        </span>
                                        <div className="sf-booking-upcoming">
                                          Job
                                        </div>
                                        <div className="sf-booking-customer">
                                          <ul className="customer-info">
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Agent Name
                                              </strong>{" "}
                                              Heima Agency
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-user" />{" "}
                                                Customer Name
                                              </strong>{" "}
                                              LAURA BARRERA
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-phone" />{" "}
                                                Customer Phone
                                              </strong>{" "}
                                              +52 81 1911 2887
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-calendar-o" />{" "}
                                                Date
                                              </strong>{" "}
                                              2021-12-26
                                            </li>
                                            <li>
                                              <strong>
                                                <i className="fa fa-clock-o" />{" "}
                                                Time
                                              </strong>{" "}
                                              13:25:00
                                            </li>
                                          </ul>
                                        </div>
                                        <button
                                          type="button"
                                          className="admin-button assignButton margin-r-10"
                                        >
                                          <i className="fa fa-user" />
                                          Assign Now
                                        </button>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="inner">
                                        <h3>
                                          <span
                                            className="sf-booking-payment-info"
                                            data-toggle="popover"
                                            data-container="body"
                                            data-placement="top"
                                            data-html="true"
                                            id="payinfo-11123"
                                            data-trigger="hover"
                                            data-original-title
                                            title
                                          >
                                            85.00₹{" "}
                                          </span>
                                          <span className="sf-payment-status">
                                            Paid
                                          </span>
                                        </h3>
                                        <div
                                          id="popover-content-payinfo-11123"
                                          className="hide sf-pop-hide"
                                        >
                                          <ul className="list-unstyled margin-0 booking-payment-data">
                                            <li>
                                              <strong>Total Amount:</strong>{" "}
                                              85.00₹
                                            </li>
                                            <li>
                                              <strong>Providers Fee:</strong>{" "}
                                              57.00₹
                                            </li>
                                            <li>
                                              <strong>Admin Fee:</strong> 28.00₹
                                            </li>
                                            <li>
                                              <strong>Payment Method:</strong>{" "}
                                            </li>
                                            <li>
                                              <strong>
                                                Admin pay to providers:
                                              </strong>{" "}
                                              Pending
                                            </li>
                                            <li>
                                              <strong>Transaction ID:</strong>{" "}
                                              NA
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm viewBookings"
                                        title="View Booking"
                                      >
                                        <i className="fa fa-eye" />
                                      </button> */}
                                      <button
                                        type="button"
                                        className="admin-button btn-sm "
                                        title="Change Status"
                                      >
                                        Pay Now
                                      </button>
                                      {/* <button
                                        type="button"
                                        className="admin-button btn-sm addInvoice margin-r-5"
                                        title="Add Invoice"
                                      >
                                        <i className="fa fa-plus" />
                                      </button> */}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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

export default Mybooking;
