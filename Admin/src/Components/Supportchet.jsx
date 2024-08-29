import React, { useEffect, useState } from "react";
import "./support.css";
import Header from "./Header";
import axios from "axios";
import apiurl from "./Oparaterlogin/config";
import secureLocalStorage from "react-secure-storage";
const Supportchet = () => {
  const [subadmin, setsubadmin] = useState([]);
  const [message, setmessage] = useState("");
  const [subadminn, setsubadminn] = useState([]);
  let [storeid, setstoreid] = useState("");

  let deleteid = (storeidd) => {
    setstoreid(storeidd);
  };

  useEffect(() => {
    userlistchat();
  },[0]);

  const userlistchat = () => {
    let tokenn = secureLocalStorage.getItem("adminidtoken");

    const options = {
      headers: {
        token: tokenn,
      },
    };
    const dataofsubadmin = {
      sub_admin_id: storeid,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/Get_Message`, dataofsubadmin, options)
      .then((res) => {
        setsubadminn(res.data.data);
      })
      .catch((error) => {});
  };

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
      .get(`${apiurl[0].apiUrl}admin/get_subadmins`, options)
      .then((res) => {
        setsubadmin(res.data.data);
      })
      .catch((error) => {});
  };

  let adminid = secureLocalStorage.getItem("adminid");

  const sendmessage = (e) => {
    e.preventDefault();
    let tokenn = secureLocalStorage.getItem("adminidtoken");
    const options = {
      headers: {
        token: tokenn,
      },
    };
    const userdata = {
      admin_id: adminid,
      sub_admin_id: storeid,
      message: message,
    };

    axios
      .post(`${apiurl[0].apiUrl}admin/Send_Message`, userdata, options)
      .then((response) => {
        setmessage(" ");
      })
      .catch((error) => {

      });
  };

  return (
    <>
      <Header />
      <section className="content dashboard">
        <div className="container-scroller ">
          <div className=" page-body-wrapper">
            <div className="main-panel">
              <div className="">
                <div id="">
                  <aside>
                    {/* <header>
                      <input type="text" placeholder="search" />
                    </header> */}
                    <ul>
                      {subadmin?.map((list) => {
                        return (
                          <li onClick={() => deleteid(list?._id)}>
                            <img
                              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                              alt
                            />
                            <div>
                              <h2>{list?.email.slice(0, 8)}</h2>
                              {/* <h3>
                            <span className="status orange" />
                            offline
                          </h3> */}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </aside>
                  <main>
                    <header style={{ backgroundColor: "rgb(57, 185, 115)" }}>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                        alt
                      />
                      <div>
                        <h2 className="text-white mt-2">Chat with Manager</h2>
                        <h3 className="text-white mt-2">
                          already 000 messages
                        </h3>
                      </div>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
                        alt
                      />
                    </header>
                    <ul id="chat">
                      {subadminn?.map((msg) => (
                        <React.Fragment key={msg.id}>
                          {msg?.admin_id === "656dae2356f0bc286d42d8d2" ? (
                            <li className="you">
                              <div className="entete">
                                <span className="status green" />
                                <h2> Manager</h2>
                                {/* <h3>10:12AM, Today</h3> */}
                              </div>
                              <div className="triangle" />
                              <div className="message">{msg?.message}</div>
                            </li>
                          ) : (
                            <li className="me">
                              <div className="entete">
                                {/* <h3>10:12AM, Today</h3> */}
                                <h2>Admin</h2>
                                <span className="status blue" />
                              </div>
                              <div className="triangle" />
                              <div className="message">{msg?.message}</div>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
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

export default Supportchet;
