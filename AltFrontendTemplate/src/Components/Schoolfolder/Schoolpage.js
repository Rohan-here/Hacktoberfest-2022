import MyNavbar from "./Schoolnavbar";
import Mypersonalnavbar from "./Schoolpersonalnavbar";
import Schoolintro from "./Schoolintro";
import "./Schoolstyles.css";
//import Schoolname from "./Schoolname";
//import Feature2 from "./feature2";
//import FAQs from "./FAQs";
//import About_land from "../Images/About_land.png";
//import Footer from "./Footer";
function Schoolpage()
{
  return (<div>
    <MyNavbar/>
    <Mypersonalnavbar/>
    {/* <h1>Name of the School</h1>
    <p>ADDRESS</p> */}
    {/* <img src={About_land} className="img_land"/> */}
    <Schoolintro/>
    {/* <a href="#">Enquiry</a> */}
    {/* <Feature1/> */}
    {/* <Feature2/> */}
    {/* <FAQs/>
    <Footer/> */}
  </div>)
}
export default Schoolpage;