import React from "react";
import MyNavbar from "./Comparisonnavbar";
import Mypersonalnavbar from "./Cpersonalnavbar";
import Cintro from "./Comparisonintro";
import Feature1 from "./Comparisonfeature1";
import Feature2 from "./Comparisonfeature2";
import Feature3 from "./Comparisonfeature3";
import "./Comparisonstyles.css";
//import Schoolname from "./Schoolname";
//import Feature2 from "./feature2";
//import FAQs from "./FAQs";
//import About_land from "../Images/About_land.png";
//import Footer from "./Footer";
function Comparisonpage()
{
  return (<div>
    <MyNavbar/>
    <Mypersonalnavbar/>
    {/* <h1>Name of the School</h1>
    <p>ADDRESS</p> */}
    {/* <img src={About_land} className="img_land"/> */}
    <Cintro/>
    {/* <h1> COMPARISON PAGE</h1> */}
    <Feature1/>
    <Feature2/>
    <Feature3/>
    {/* <a href="#">Enquiry</a> */}
    {/* <Feature1/> */}
    {/* <Feature2/> */}
    {/* <FAQs/>
    <Footer/> */}
  </div>)
}
export default Comparisonpage;