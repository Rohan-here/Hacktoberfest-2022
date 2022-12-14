import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import 'font-awesome/css/font-awesome.min.css';
import { Container} from '@material-ui/core';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./style_home.css";
import Logo from "../Images/logo.png";
function MyNavbar()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
return (<Navbar expand="lg" className="colorNav_home">
<Container>
{(winWidth>=991)&&(<div className="myToggle_home">  
  <img src={Logo} className="Imagestyle_home"/>
  <input type="text" className="Inputstyle_home" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Search School-e-Store..."} placeholder="Search School-e-Store..."></input>
  <i class="fa fa-search" className="symbol_home"></i>
    <Nav className="me-auto">
    <div style={{marginLeft:"100px"}}>
    <Button variant="outline-dark" size="md" onClick={()=>console.log(window.innerWidth>991)} className="button_home">Cart
      {/* <Link to="/cart">Cart</Link> */}
    </Button>
    <Button variant="outline-dark" size="md" className="button_home">Log-In
      {/* <Link to="/login">Log-In</Link> */}
    </Button>
    <Button variant="outline-dark" size="md">Sign-Up
      {/* <Link to="/signup">Sign-Up</Link> */}
    </Button>
    </div>
    </Nav>
  </div>)
    }    
  {(winWidth<991)&&(<div>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <div className="myToggle_home">  
  <img src={Logo} className="Imagestyle_home"/>
  <input type="text" className="Inputstyle_home" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Search School-e-Store..."} placeholder="Search School-e-Store..."></input>
  <i class="fa fa-search" className="symbol_home"></i>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link to="#link"><ShoppingCartIcon/> Cart</Nav.Link>
    <Nav.Link to="#link">Log-In</Nav.Link>    
    <Nav.Link to="#link">Sign-Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
  </div>)}
</Container>
</Navbar>)
}
export default MyNavbar;