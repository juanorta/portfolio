import React, { Component } from 'react';
import PortfolioNav from './Navbar/portfolionav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Backdrop from './Backdrop/Backdrop';
import DrawerExitButton from './SideDrawer/DrawerExitButton.js';
import drawerToggleButton from './SideDrawer/DrawerToggleButton';

class App extends Component {
  state = { 
    sideDrawerOpen : false
   };

  //sets the state of sideDrawerOpen to the opposite of the previous state
  drawerToggleClickHandler = () => {
    
    this.setState((prevState) => {
      
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
      
    
      
    });
    console.log(this.state.sideDrawerOpen);
  }

  //closes the side drawer
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
    console.log('backdrop ' + this.state.sideDrawerOpen);
  }

  /*
  exitButtonHandler = () => {
    console.log('button clicked');
  }
*/
  render() { 
    console.log(this.state.sideDrawerOpen);
    //variables used to send 'click' and 'close' to other components
    let sideDrawerExitButton;
    let backdrop;
    
    

    
  
    //different calls to close drawer
    if(this.state.sideDrawerOpen){
      
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }



    return ( 
      
      
      <div style={{height: '100%'}}>
         
         <PortfolioNav 
          drawerClickHandler = {this.drawerToggleClickHandler}
          open = {this.state.sideDrawerOpen}
         />
         <SideDrawer show = {this.state.sideDrawerOpen}/>
         
         {backdrop}
         
         
         
         
          <main style = {{marginTop: '64px'},{textAlign: 'center'}}>
              <h1 style={{marginTop: '19rem'}}>Hi, my name is Juan Orta</h1>
              <h2>Full-stack engineer </h2>
          </main>
      </div>
     );
  }
}
 
export default App;
