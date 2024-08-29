import React, { useState } from 'react'
import './section.css';
const Section = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [beneficiaryChecked, setBeneficiaryChecked] = useState(true);
  const [operatorChecked, setOperatorChecked] = useState(false);

  const handleCheckboxChange = (type) => {
    if (type === 'beneficiary') {
      setBeneficiaryChecked(!beneficiaryChecked);
      setOperatorChecked(false);
    } else if (type === 'operator') {
      setOperatorChecked(!operatorChecked);
      setBeneficiaryChecked(false);
    }
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <div>

<section className="aon-banner-wrap">
                            {/*Left Section*/}
                            <div className="aon-banner-outer sf-overlay-wrapper">
                                <div className="aon-banner-pic">
                                    <div className="aon-curve-area" />
                                    <div className="aon-overlay-main" style={{ opacity: '0.85', backgroundColor: '#022278' }} />
                                    <img src="https://vlesociety.com/wp-content/uploads/2021/09/csc-Ucl-Center-Outside-Banner-Poster-Aadhaar-Online-demographic-update-center-600x206.jpg" width={1919} height={976} alt />
                                </div>
                                <div className="aon-banner-text">
                                    <div className="container">
                                        <div className="aon-bnr-write">
                                            <h2 className="text-top-line">Hire <span className="text-secondry">Experts</span> &amp; </h2>
                                            <h2 className="text-bot-line">Get Your Job Done</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Right Section*/}
                            <div className="aon-find-bar aon-findBar-vertical">
      <div className="container">
        {/* Search Form start*/}
        <div className="search-form ">
          <form className="clearfix search-providers" method="get">
            <input type="hidden" name="s" defaultValue />
            <div className="aon-searchbar-table">
              {/* <div className="aon-searchbar-left">
                <div className='text-center p-4'>
                  <span>Welcome Back</span> <br />
                  <span>One Login for all CsC Services</span>
                </div>
              </div> */}
             <div className="aon-searchbar-right">
                  <label className="checkbox-label">
                    Beneficiary
                    <input
                      type="checkbox"
                      className="site-checkbox"
                      checked={beneficiaryChecked}
                      onChange={() => handleCheckboxChange('beneficiary')}
                    />
                  </label>
                  <label className="checkbox-label">
                    Operator
                    <input
                      type="checkbox"
                      className="site-checkbox"
                      checked={operatorChecked}
                      onChange={() => handleCheckboxChange('operator')}
                    />
                  </label>


                
                {showLogin ? (
                  <div>
                    <ul className="clearfix sf-searchfileds-count-5">
                      <h4>Beneficiary</h4>
                      <li>
                        <label>User Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control sf-form-control" />
                      </li>
                      <li>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control sf-form-control" />
                      </li>
                    </ul>
                    <button type="button" className="site-button" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                ) : (
                  <div>
                    <ul className="clearfix sf-searchfileds-count-5">
                      <h4>Operator</h4>
                      <li>
                        <label>User Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control sf-form-control" />
                      </li>
                      <li>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control sf-form-control" />
                      </li>
                      <li>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control sf-form-control" />
                      </li>
                    </ul>
                    <button type="button" className="site-button" onClick={handleRegister}>
                      Register
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        {/* Search Form End*/}
      </div>
    </div>
                        </section>
    </div>
  )
}

export default Section