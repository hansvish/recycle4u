import React, { Component } from 'react';
import Title from "./header/title";
import Nav from "./header/nav";

class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <Nav />
      </div>
    );
  }
}

export default Header;