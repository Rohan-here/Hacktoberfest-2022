import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Comparisonstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from 'react-bootstrap/Card';
// //import About from "../Images/About.png"
// import Button from 'react-bootstrap/Button';
// import IITD from "../Images/IITD.png";
function Comparisonintro()
{
  return (<div>  
  {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
   {/* <h3 >About Us</h3> */}
    <Row className="p-0 m-0">
        <Col lg={7} md={7} sm={12} xs={12} style={{ paddingLeft: "130px" , justifyContent:"space-around",paddingTop:"20px" , paddingBottom:"20px"}}>
          <h1>Comparison </h1>
        </Col>
    </Row>
   </div>);
}
export default Comparisonintro;