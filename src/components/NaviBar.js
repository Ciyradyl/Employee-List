import React from "react";
import { Nav } from "react-bootstrap";

const NaviBar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NaviBar;
