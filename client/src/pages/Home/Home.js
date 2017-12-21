import React from 'react';
// import Header from '../../components/Header';
import Navigation from '../../components/Nav';
// import Login from '../../components/Login';

import Footer from '../../components/Footer';
import Content from '../../components/Content';

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