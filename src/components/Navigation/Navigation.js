import React from "react";
import { Link } from "react-router-dom";
import {NavItem, Navbar, Icon} from 'react-materialize'
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navigation = props => (
  <div>
    <Navbar brand='Dennyela Reever' right>
      <NavItem href='https://drive.google.com/open?id=0B_Wvi2DmfHuGMVYwU21kb0dFZGMzOW9yczlNTVFuXzJSOHRZ'>Resume</NavItem>
    </Navbar>
  </div>
);

export default Navigation;
