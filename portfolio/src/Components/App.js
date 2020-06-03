import React, { Component } from 'react';
import PortfolioNav from './Navbar/portfolionav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Backdrop from './Backdrop/Backdrop';
import drawerToggleButton from './SideDrawer/DrawerToggleButton';
import Home from './PageSections/Home/Home'
import Stack from './PageSections/Stack/Stack';
import Projects from './PageSections/Projects/Projects';
import Contact from './PageSections/Contact/Contact';
import ScrollArrow from './ScrollArrow/ScrollArrow';


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
         <ScrollArrow/>
         {backdrop}
         
         
  
          <Home/>
          <Stack/>
          <Projects/>
          <Contact/>
      </div>
     );
  }
}
 
export default App;
