// Dependencies
import React from 'react';
import "./Footer.css";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

// Render footer for all pages
class Footer extends React.Component {
 render() {
     return (
       <div className="footer">
           <p className="left-text">Copyright ©2017 Nagarani Chandika and Chamaine Woffard.  All rights reserved.</p>
           <p className="right-text">
              <a href="#"><img className="logoStyle" src={facebook} /></a>
              <a href="#"><img className="logoStyle" src={twitter} /></a>
              <a href="#"><img className="logoStyle" src={linkedin} /></a>
              <br />
              <button className="button"> Privacy </button>
              <button className="button"> Terms </button>
              <button className="button"> Contact Us </button>


           </p>
        </div>
     );
    }
}

export default Footer;