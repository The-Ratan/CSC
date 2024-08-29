import React, { useState } from 'react'
import './section.css';
const Section = () => {

    const [showLogin, setShowLogin] = useState(true);
    const [activeButton, setActiveButton] = useState('beneficiary'); 

    const toggleForm = (buttonType) => {
      setShowLogin(!showLogin);
      setActiveButton(buttonType);
    };
    const handleLogin = () => {
      
    };
  
    const handleRegister = () => {
      
    };
  return (
    <div>

<section className="aon-banner-wrap" style={{paddingTop:'46px'}}>
                            {/*Left Section*/}
                            <div className="aon-banner-outer sf-overlay-wrapper" >
                                <div className="aon-banner-pic" >
                                    <div className="aon-curve-area"  />
                                    <div className="aon-overlay-main" style={{ opacity: '0.20', backgroundColor: 'cornflowerblue' }} />
                                    <img src="./images/client.png"   alt  />
                                </div>
                                <div className="aon-banner-text">
                                    <div className="container">
                                        <div className="aon-bnr-write">
                                            <h2 className="text-top-line">Linked <span className="text-secondry">Experts</span> &amp; </h2>
                                            <h2 className="text-bot-line">Get Your Choice Of</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
             
                        </section>
    </div>
  )
}

export default Section