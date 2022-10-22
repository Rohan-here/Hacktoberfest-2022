import React from "react";
import MyNavbar from "./Booksellernavbar";
import Mypersonalnavbar from "./Bspersonalnavbar";
import Booksellerintro from "./Booksellerintro";
import Feature1 from "./Booksellerfeature1";
import "./Booksellerstyles.css";
//import Schoolname from "./Schoolname";
//import Feature2 from "./feature2";
//import FAQs from "./FAQs";
//import About_land from "../Images/About_land.png";
//import Footer from "./Footer";
function Booksellerpage()
{
  return (<div>
    <MyNavbar/>
    <Mypersonalnavbar/>
    {/* <h1>Name of the School</h1>
    <p>ADDRESS</p> */}
    {/* <img src={About_land} className="img_land"/> */}
    <Booksellerintro/>
    {/* <a href="#">Enquiry</a> */}
    <Feature1/>
    {/* <Feature2/> */}
    {/* <FAQs/>
    <Footer/> */}
  </div>)
}
export default Booksellerpage;