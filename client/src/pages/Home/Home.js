import React from 'react';
import Content from '../../components/Content';
import Login from '../../components/Login';

// require("../assets/index.css")
class Home extends React.Component {
   render() {
      	return (
       		<div>
            	<Content buttface={true} />   
            	<Login />         
        	</div>
      	);
   	}
}


export default Home;