import React from 'react'

import Navsidebar from './Navsidebar'
import Header2 from './Header2'

const Message = () => {
  return (
    <div>
    
    <div className="page-wraper">
      <Header2/>            
      {/* Sidebar Holder */}
      <Navsidebar/>
      {/* Page Content Holder */}
      <div id="content" >
        <div className="content-admin-main" >
          <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
            <div className="admin-left-area">
              <a className="nav-btn-admin d-flex justify-content-between align-items-center" id="sidebarCollapse">
                {/* <span className="nav-btn-text">Dashboard Menu</span> */}
                <span className="fa fa-reorder" />
              </a>
            </div>
            {/* <div className="admin-area-mid">
              <div className="admin-area-heading">
                <span>Your Tariff Plan : </span>
                <strong>Extended <i className="fa fa-caret-down" /></strong>
              </div>
              <div className="admin-area-content">you Are on Extended . Use link bellow to view details or upgrade.Details </div>
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
            <h4>Messenger</h4>
          </div>                
          <div className="card aon-card" style={{background:'rgb(2, 34, 121)'}}>
            <div className="card-body aon-card-body">
              <div className="content-admin-main2">
                <div className="wt-admin-dashboard-msg-2">
                  <div className="wt-dashboard-msg-user-list">
                    {/* Search Section Start*/}
                    <div className="wt-dashboard-msg-search">
                      <div className="input-group">
                        <input className="form-control" placeholder="Search Provider" type="text" />
                        <button className="btn" type="button"><i className="fa fa-search" /></button>
                      </div>
                    </div>
                    {/* Search Section End*/}
                    {/* Search Section End*/}
                    <div className="msg-find-list">
                      <select className="sf-select-box bs-select-hidden">
                        <option>Recent Chats</option>
                        <option>Short by Time</option>
                        <option>Short by Unread</option>
                      </select>
                    </div>                        
                    {/* Search Section End*/}
                    {/* user msg list start*/}
                    <div id="msg-list-wrap" className="wt-dashboard-msg-search-list">
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">Fri</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">Fri</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic2.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">Fri</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">Thu</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic2.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic2.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic2.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>
                      <div className="wt-dashboard-msg-search-list-wrap">
                        <a href="javascript:;" className="msg-user-info clearfix">
                          <div className="msg-user-timing">16/07/2019</div>
                          <div className="msg-user-info-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="msg-user-info-text">
                            <div className="msg-user-name">Devid Huker</div>
                            <div className="msg-user-discription">All created by our Global</div>
                          </div>
                        </a>
                      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                    
                    </div>
                    {/* user msg list End*/}
                  </div>
                  <div className="wt-dashboard-msg-box">
                    <div className="single-msg-user-name-box">
                      <h4 className="single-msg-user-name">Devid Huker</h4>
                      <div className="single-msg-short-discription">Independent Web Designers and Developers.</div>
                    </div>
                    <div id="msg-chat-wrap" className="single-user-msg-conversation">
                      <div className="single-user-comment-wrap">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                      <div className="single-user-comment-wrap sigle-user-reply">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div> 
                      <div className="single-user-comment-wrap">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                      <div className="single-user-comment-wrap sigle-user-reply">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>     
                      <div className="single-user-comment-wrap">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                      <div className="single-user-comment-wrap sigle-user-reply">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>     
                      <div className="single-user-comment-wrap">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                      <div className="single-user-comment-wrap sigle-user-reply">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>     
                      <div className="single-user-comment-wrap">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                          <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                      <div className="single-user-comment-wrap sigle-user-reply">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                          <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>                                                                                                                                                
                    </div>
                    <div className="single-msg-reply-comment">
                      <div className="input-group">
                        <textarea className="form-control" placeholder="Type a message here" defaultValue={""} />
                        <button className="btn" type="button"><i className="fa fa-send-o" /></button>
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
  )
}

export default Message
