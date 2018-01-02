import React from 'react';
import "./Footer.css";
import facebook from "../../assets/images/facebook.png";

// Render footer for all pages
class Footer extends React.Component {
 render() {
     return (
       <div className="footer">
           <p className="left-text">Copyright ©2017 Nagarani Chandika and Chamaine Woffard.  All rights reserved.</p>
           <p className="right-text">
               <button> Privacy </button>
               <button> Terms </button>
               <button> Contact Us </button>
         <a href="#"><img className="logoStyle" src={facebook} /></a>
           </p>
        </div>
     );
    }
}

export default Footer;