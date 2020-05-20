import React, { Component } from 'react';
import PortfolioNav from './Navbar/portfolionav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './SideDrawer/SideDrawer';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      
      
      <div style={{height: '100%'}}>
         <PortfolioNav />
         <SideDrawer />
          <main style = {{marginTop: '64px'}}>
              <h1>Hi, my name is Juan Orta</h1>
              <h2>Full-stack engineer </h2>
          </main>
      </div>
     );
  }
}
 
export default App;
