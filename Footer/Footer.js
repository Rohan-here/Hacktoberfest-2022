import "./Footer.css"
import { Link } from "react-router-dom";
import React, { useLayoutEffect, useState } from 'react';

export const Footer = () => {

  return (

    <div className=" mt-5" style={{fontFamily: 'Poppins',minHeight:'100%'}}>
    <div className="card1 " >
      <div className="row ">
        <div className="col-md-3 col-sm-11 col-xs-11 ">
          <div className="footer-text pull-left">
            <div className="d-flex">
              <h1  style={{fontWeight: "620"}}>Elekrity</h1><p  style={{fontWeight: "590"}} className="superscript">TM</p>
            </div>
            <p className="card1-text" style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-1 col-xs-1 mb-2" />
        <div className="col-md-3 col-sm-4 col-xs-4">
          <h5 className="heading1 " style={{ fontWeight: "550"}}>Terms & Policies</h5>
          <ul className="card1-text" style={{lineHeight: '32px', fontSize:"14px" }}>
          <li><Link to='/Policy' style={{textDecoration: 'none', color:'inherit'}}>Privacy Policy</Link></li>
          <li><Link to='/' style={{textDecoration: 'none', color:'inherit'}}>Terms and Conditions</Link></li>
          <li><Link to='/CommunityGuidelines' style={{textDecoration: 'none', color:'inherit'}}>Community Guidlines</Link></li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-4">
          <h5 className="heading1" style={{ fontWeight: "550"}}>Company</h5>
          <ul className="card1-text" style={{lineHeight: '32px', fontSize:"14px" }}>
          <li><Link to='/aboutus' style={{textDecoration: 'none', color:'inherit'}}>About Us</Link></li>
          <li><Link to='/contactus' style={{textDecoration: 'none', color:'inherit'}}>Contact Us</Link></li>

          </ul>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-4">
          <h5 className="heading1" style={{ fontWeight: "550"}}>Resources</h5>
          <ul className="card1-text" style={{lineHeight: '32px', fontSize:"14px" }}>
          <li><Link to='/FAQ' style={{textDecoration: 'none', color:'inherit'}}>FAQs</Link></li>
          <li><Link to='/thescience' style={{textDecoration: 'none', color:'inherit'}}>The Science</Link></li>
          {/* <li><Link to='/' style={{textDecoration: 'none', color:'inherit'}}>Membership</Link></li> */}

          </ul>
        </div>
      </div>
      <div className="divider mb-3 mt-1"> </div>
      <p class=" mb-0 mt-0 text-center" style={{fontWeight:"600",  fontSize:"14px"}}>© 2022 Elekrity | All Rights Reserved</p>
    </div>
  </div>
  );
}
export default Footer;