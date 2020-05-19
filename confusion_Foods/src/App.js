import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Menu from './components/MenuComponent'
import {DISHES} from './shared/dishes'




class App extends React.Component{
  constructor(){
    super()
    this.state = {
      dishes: DISHES
    }
  }

  render(){
    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Confusion</NavbarBrand>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>

    )
  }
}

export default App;
