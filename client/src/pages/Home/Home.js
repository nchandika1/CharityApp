import React from 'react';
// import Header from '../../components/Header';
import Navigation from '../../components/Nav';
import Content from '../../components/Content';
import Login from '../../components/Login';

// require("../assets/index.css")
class Home extends React.Component {
   render() {
      return (
         <div>
            <Content buttface={true} />   
            <Navigation />         
         </div>
      );
   }
}


export default Home;