import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Comparisonstyles.css";
import Block from "../Images/block.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Comparisonfeature1()
{
  return ( <div style={{backgroundColor:"#F1E4FF", paddingBottom:"50px"}}> 
  {/* <h1 style={{paddingLeft:"80px"}}>Listed schools</h1> */}
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"10px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"400px" , textAlign: "left"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{color:"#8C30F5"}}>1. We Gather</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    To ensure the highest level of data accuracy, 
    we gather only fact-based and verified information. 
    That’s why the results revealed in this Khan Academy online 
    learning platform comparison will surely help you make an informed and rational decision.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"400px" , textAlign: "left"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{color:"#8C30F5"}}>2. We Analyse</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Raw data is not enough to make sense for the reader, 
    so to make it easier for you, we analyze tons of gathered user comments,
     feedback & technical features. The analyzed information is represented 
     in the most understandable manner for smoother comparison.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"400px" , textAlign: "left"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{color:"#8C30F5"}}>3. We Score</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    To make it easy to compare, every feature is scored 
    according to the general market. It’s really easy to put 
    different brands head-to-head and see which provider has the highest evaluation.
    learning platform comparison will surely help you make an informed and rational decision.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"400px" , textAlign: "left"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{color:"#8C30F5"}}>4. You Choose</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Once all the gathered and analyzed information is 
    scored and put into omparison charts, so that students pick the suitable one.
     Of course, it does depend on students needs and preferences, so make sure 
     to know your learning goals first.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>

</div>
</div>)
}
export default Comparisonfeature1;