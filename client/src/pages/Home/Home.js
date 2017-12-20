import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Nav';

import Content from '../../components/Content';

// require("../assets/index.css")
class Home extends React.Component {
   render() {
      return (
         <div>
            <Content buttface={true} />            
         </div>
      );
   }
}


export default Home;