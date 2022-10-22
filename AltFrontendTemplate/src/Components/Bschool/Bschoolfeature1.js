import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Bschoolstyles.css";
import Block from "../Images/block.png";
import IITD from "../Images/IITD.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Bschoolfeature1()
{
  return ( <div style={{backgroundColor:"#F1E4FF", paddingBottom:"50px"}}> 
  {/* <h1 style={{paddingLeft:"80px"}}>Listed schools</h1> */}
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"10px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>School name</Card.Title>
  <img className="feature_img" src={IITD } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Lorem ipsum dolor
    </p>
    <p style={{fontSize:"larger" }}> 
    Hostel facility: Lorem ipsum dolor
    </p>
    To ensure the highest level of data accuracy, 
    we gather only fact-based and verified information. 
    That’s why the results revealed in this Khan Academy online 
    learning platform comparison will surely help you make an informed and rational decision.
    To ensure the highest level of data accuracy, 
    we gather only fact-based and verified information. 
    That’s why the results revealed in this Khan Academy online 
    learning platform comparison will surely help you make an informed and rational decision.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>School name</Card.Title>
  <img className="feature_img" src={IITD } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Lorem ipsum dolor
    </p>
    <p style={{fontSize:"larger" }}> 
    Hostel facility: Lorem ipsum dolor
    </p>
    To ensure the highest level of data accuracy, 
    we gather only fact-based and verified information. 
    That’s why the results revealed in this Khan Academy online 
    learning platform comparison will surely help you make an informed and rational decision.
    To ensure the highest level of data accuracy, 
    we gather only fact-based and verified information. 
    That’s why the results revealed in this Khan Academy online 
    learning platform comparison will surely help you make an informed and rational decision.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>
</div>
</div>)
}
export default Bschoolfeature1;