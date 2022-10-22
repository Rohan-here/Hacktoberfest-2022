import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Bschoolstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import IITD from "../Images/IITD.png";
function Bschoolintro()
{
  return (<div>  
  {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
   {/* <h3 >About Us</h3> */}
    <Row className="p-0 m-0">
        <Col 
        lg={7} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"50px" , paddingBottom:"80px" , paddingLeft:"200px" , width: "1100px"}}>
        <Card style={{alignItems: "center" ,border: "none"}}>
        <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large"}} >List of top 20 best schools in Delhi</Card.Title>
    <Card.Img variant="top" src={IITD} style={{height: "200px" ,width: "200px"}}/>
    <Card.Body>
      <Card.Text style={{ paddingTop: "10px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem tortor, vitae,
       aenean eget sed bibendum eu. Egestas enim viverra tristique sed nisl tempor, a, 
       ultricies elit. Nunc eget eget pulvinar eu mattis nisi. Vel id commodo tincidunt
        tempus eu posuere nibh neque, sed. Sit sapien et diam in quis consectetur lectus morbi 
        pellentesque. At purus lorem aliquam tincidunt eu nulla facilisis nunc a. Nunc arcu 
        dignissim ultrices sed vulputate. Nulla nibh viverra egestas massa. Est eros sodales
         fringilla sit lacus sed amet orci sed. Mauris ut ante pulvinar id arcu tristique sapien 
         dignissim nunc.Tincidunt dictumst iaculis pulvinar lacinia dui, mattis sed. A sed pretium 
         tincidunt tincidunt nulla dui urna vehicula viverra. Non sem massa morbi odio. Diam nec lo
      </Card.Text>
     
    </Card.Body>
  </Card>
        </Col>
    </Row>
   </div>);
}
export default Bschoolintro;