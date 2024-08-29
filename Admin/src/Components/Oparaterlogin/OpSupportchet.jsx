import React, { useEffect, useState } from "react";
import "./Opsupport.css";
import OpHeader from "./OpHeader";
import axios from "axios";
import apiurl from "./config";
import secureLocalStorage from "react-secure-storage";
const OpSupportchet = () => {
  const [subadmin, setsubadmin] = useState([]);
  const [message, setmessage] = useState("");

  let subadminid = secureLocalStorage.getItem("subadminid");

  useEffect(() => {
    userlist();
  }, [0]);

  const userlist = () => {
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      sub_admin_id: subadminid,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/get_message`, userdata, options)
      .then((res) => {
        setsubadmin(res.data.data);
      })
      .catch((error) => {});
  };

  const sendmessage = (e) => {
    e.preventDefault();
    let tokenn = secureLocalStorage.getItem("subadminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      admin_id: "65b24de458b2f28a37f30293",
      sub_admin_id: subadminid,
      message: message,
    };

    axios
      .post(`${apiurl[0].apiUrl}subadmin/send_message`, userdata, options)
      .then((response) => {
        setmessage(" ");
      })
      .catch((error) => {});
  };

  return (
    <>
      <OpHeader />
      <section className="content dashboard">
        <div className="container-scroller ">
          <div className=" page-body-wrapper">
            <div className="main-panel">
              <div className="">
                <div id="">
                  <main style={{ width: "100%" }}>
                    <header style={{ backgroundColor: "#0cbee7" }}>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                        alt
                      />
                      <div>
                        <h2 className="text-white mt-2">Chat with Admin</h2>
                        <h3 className="text-white mt-2">
                          already 100 messages
                        </h3>
                      </div>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
                        alt
                      />
                    </header>
                    <ul id="chat">
                      {subadmin?.map((msg) => (
                        <React.Fragment key={msg.id}>
                          {msg?.admin_id !== "656dae2356f0bc286d42d8d2" ? (
                            <li className="you">
                              <div className="entete">
                                <span className="status green" />
                                <h2>Admin</h2>
                                {/* <h3>10:12AM, Today</h3> */}
                              </div>
                              <div className="triangle" />
                              <div className="message">{msg?.message}</div>
                            </li>
                          ) : (
                            <li className="me">
                              <div className="entete">
                                {/* <h3>10:12AM, Today</h3> */}
                                <h2>Manager</h2>
                                <span className="status blue" />
                              </div>
                              <div className="triangle" />
                              <div className="message">{msg?.message}</div>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                    {/* <div className='shadow p-2'>
                      <input type="text" className='p-2' style={{ width: "90%" }} />
                      <button className='btn btn-primary' style={{ padding: "13px", marginBottom: "1px" }} >Send</button>
                    </div> */}

                    <form onSubmit={sendmessage}>
                      <div className="shadow p-2">
                        <input
                          value={message}
                          onChange={(e) => {
                            setmessage(e.target.value);
                          }}
                          type="text"
                          className="p-2"
                          style={{
                            borderRadius: "5px",
                            height: "45px",
                            width: "90%",
                          }}
                        />
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ padding: "13px", marginBottom: "1px" }}
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpSupportchet;
