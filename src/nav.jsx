import React, { Component } from "react";
import { Navbar, Nav, NavItem ,Form,FormControl,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
class navbar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">GitHub</Navbar.Brand>
     <Nav >
     <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      <Nav.Link href="/" className="text-light">Pull request</Nav.Link>
      <Nav.Link href="issues"  className="text-light">issues</Nav.Link>
      <Nav.Link href="Marketplace"  className="text-light">Marketplace</Nav.Link>
      <Nav.Link href="Explore"  className="text-light">Explore</Nav.Link>
    </Nav>
  </Navbar>

    );
  }
}

export default navbar;