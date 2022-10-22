import React from "react";
import MyNavbar from "./Bschoolnavbar";
import Mypersonalnavbar from "./Bschoolpersonalnavbar";
import Bschoolintro from "./Bschoolintro";
import Feature1 from "./Bschoolfeature1";
import "./Bschoolstyles.css";
//import Schoolname from "./Schoolname";
//import Feature2 from "./feature2";
//import FAQs from "./FAQs";
//import About_land from "../Images/About_land.png";
//import Footer from "./Footer";
function Bschoolpage()
{
  return (<div>
    
    <MyNavbar/>
    <Mypersonalnavbar/>
    {/* <h1>Name of the School</h1>
    <p>ADDRESS</p> */}
    {/* <img src={About_land} className="img_land"/> */}
    <Bschoolintro/>
    {/* <a href="#">Enquiry</a> */}
    <Feature1/>
    {/* <Feature2/> */}
    {/* <FAQs/>
    <Footer/> */}
  </div>)
}
export default Bschoolpage;