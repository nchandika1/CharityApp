import React from 'react';
// import Header from '../../components/Header';
import Navigation from '../../components/Nav';
<<<<<<< HEAD
// import Login from '../../components/Login';

import Footer from '../../components/Footer';
=======
>>>>>>> 2767326b4efce242ff71bc44204de7b858bb2296
import Content from '../../components/Content';
import Login from '../../components/Login';

// require("../assets/index.css")
class Home extends React.Component {
   render() {
      return (
         <div>
            <Content buttface={true} />   
            <Navigation /> 
            <Footer /> 

         </div>


      );
   }
}


export default Home;