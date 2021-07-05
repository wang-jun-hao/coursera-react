import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">My React App</NavbarBrand>
            </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
