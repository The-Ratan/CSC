import React from 'react'

const Footer = () => {
  return (
    <div>

<footer className="site-footer footer-light">
      {/* FOOTER NEWSLETTER START */}
      {/* <div className="footer-top-newsletter">
        <div className="container">
          <div className="sf-news-letter">
            <span>Subscribe Our CsCwale</span>
            <form>
              <div className="form-group sf-news-l-form">
                <input type="text" className="form-control" placeholder="Enter Your Email" />
                <button type="submit" className="sf-sb-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* FOOTER BLOCKES START */}  
      <div className="footer-top">
        <div className="container">
          <div className="row">
            
            {/* Footer col 2*/}
         


            <div className="col-lg-4 col-md-6 col-sm-6  ">
              <div className="sf-site-link sf-widget-link">
                <h4 className="sf-f-title">About</h4>
                <ul>
                  <li><a href="#"><h3 style={{textAlign:''}} >CscWale aims to help in the process of completing various online forms accurately and efficiently with the help of Experts and experienced one.</h3></a></li>
                  
                </ul>
              </div>
            </div>


          


            {/* Footer col 1*/}

            {/* Footer col 1*/} 
            <div className="col-lg-3 col-md-6 col-sm-6  ">
              <div className="sf-site-link sf-widget-link">
                <h4 className="sf-f-title">Quick Links</h4>
                <ul style={{lineHeight:'36px'}}>
                  <li><a href="/" className='clickk'>Home</a></li>
                  <li><a href="/servicedetails" className='clickk'>Services</a></li>
                  <li><a href="/contact" className='clickk'>Contact</a></li>
                  <li><a href="/newregistration" className='clickk'>Registration</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6  ">
              <div className="sf-site-link sf-widget-categories">
                <h4 className="sf-f-title">Working Hours:-</h4>
                <ul >
                  <li><a href="#" className='clickk'>Monday to Saturday</a></li>
                  <li><a href="#" className='clickk'>( 9 AM to 9 PM )</a></li>
                  &nbsp;
                  <li><a href="#" className='clickk'>Sunday</a></li>
                  <li><a href="#" className='clickk'>( 11 AM to 5 PM )</a></li>
                </ul>
              </div>
            </div>
            {/* Footer col 1*/}
            <div className="col-lg-2 col-md-6 col-sm-6  ">
              <div className="sf-site-link sf-widget-contact">
                <h4 className="sf-f-title">Contact Info</h4>
                <ul>
                  <li className='clickk'>India</li>
                  <li><a href="tel:7289914425" className='clickk'> +91 886 047 4425</a></li>
                  <li><a href="tel:9582115358" className='clickk'>+91 958 211 5358</a></li>
                  <li> <a href='help@cscwale.com' className='clickk'>help@cscwale.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER COPYRIGHT */}
      <div className="footer-bottom">
        <div className="container">
          <div className="sf-footer-bottom-section">
            <div className="sf-f-logo"><img src="images/fc22.png" style={{height:'75px' , width:'100%'}} alt /></div>
            <div className="sf-f-copyright">
              <span >All Rights Reserved By Cscwale</span>
            </div>
            <div className="sf-f-social">
              <ul className="socila-box">
                <li><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>   
      </div>   
    </footer>
    </div>
  )
}

export default Footer