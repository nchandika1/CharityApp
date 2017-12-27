// Dependencies
import React from 'react';
import "./Footer.css";

// Render footer for all pages
class Footer extends React.Component {
  render() {
  	return (
    	<div className="footer">
    		<p className="left-text">Copyright &#169;2017 Nagarani Chandika and Chamaine Woffard.  All rights reserved.</p>
    		<p className="right-text"> 
    			<button>• Privacy </button>
    			<button>• Terms </button>
    			<button>• Contact Us </button>
    		</p>
     	</div>
  	);
 	}
}

export default Footer;