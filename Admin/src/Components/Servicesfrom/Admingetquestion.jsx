import React, { useEffect, useState } from "react";
// import Header from "./Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header";
import apiurl from "../Oparaterlogin/config";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const Admingetquestion = ({ data }) => {
  const [questions, setquestions] = useState([]);
  const [message, setmessage] = useState();

  useEffect(() => {
    userlist();
  }, [0]);
  let tokenn = secureLocalStorage.getItem("adminidtoken");
  const options = {
    headers: {
      token: tokenn,
    },
  };
  const userlist = () => {
    axios
      .get(`${apiurl[0].apiUrl}admin/get_question` , options)
      .then((res) => {
        setquestions(res.data.data);
      })
      .catch((error) => {});
  };

  let [storeid, setstoreid] = useState("");
  let deleteid = (storeidd) => {
    setstoreid(storeidd);
  };

  const sendquestions = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      _id: storeid,
      answer: message,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/send_answer`, userdata ,options)
      .then((res) => {
        toast.success(res.data.message);
        setmessage(" ");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Header />
      <Toaster />
      <section className="content">
        <div className="page-heading">
          <h1>Question List</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/deashboard">Dashboard</Link>
            </li>

            <li className="active">Contact By User</li>
          </ol>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Reply</th>
                    <th>Question</th>

                    <th>Message</th>
                  </tr>
                </thead>

                {questions?.map((list, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>

                        <td>
                          {" "}
                          {list?.answer ? (
                            <button
                              type="button"
                              className="m-w-100 btn btn-rounded btn-success"
                            >
                              Already Reply
                            </button>
                          ) : (
                            <button
                              onClick={() => deleteid(list?._id)}
                              data-toggle="modal"
                              data-target="#myModal21"
                              type="button"
                              className="m-w-100 btn btn-rounded btn-danger"
                            >
                              Reply
                            </button>
                          )}
                          <div
                            style={{ width: "100%", marginTop: "200px" }}
                            className="modal fade"
                            id="myModal21"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-sm modal-dialog-centered"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5>Reply Questions</h5>
                                  <textarea
                                    type="text"
                                    onChange={(e) => {
                                      setmessage(e.target.value);
                                    }}
                                  />
                                  <br />
                                  <br />
                                  <button
                                    data-dismiss="modal"
                                    onClick={() => sendquestions(list?._id)}
                                    className="btn btn-primary"
                                  >
                                    Send
                                  </button>
                                  &nbsp;{" "}
                                  <button
                                    className="btn btn-danger"
                                    type="button"
                                    data-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                </div>

                                <div className="modal-footer"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{list?.question}</td>

                        <td>{list?.message}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admingetquestion;
