import React from 'react';
import "./Content.css";
import Modal from 'react-modal';


class Content extends React.Component {
   render() {
      return (
         <div id="Container">
            <div className="image-container">
               <h1 className="title">HOPEAPP</h1>
            </div>
            <div className="modal">
            	<button className="Facebook-Login" onClick={this.handleFacebookLogin}>Continue with Facebook</button>
		        <button className="Google-Login" onClick={this.handleGoogleLogin}>Continue with Google</button>

		    </div>
         </div>   
      );
   }


// <button onClick={() => this.openModal()}>Open modal</button>
// 		          <h1>Modal title</h1>
// 		          <p>hello</p>
// 		          <p><button onClick={() => this.closeModal()}>Close</button></p>

// openModal() {
//     this.setState({ isModalOpen: true })
//   }

// closeModal() {
//     this.setState({ isModalOpen: false })
//   }

}

export default Content;