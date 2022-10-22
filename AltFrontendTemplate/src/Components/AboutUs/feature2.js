import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect,useState } from "react";
import "./style_about.css";
import Block from "../Images/block.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Tag from "./tags";
import About_fea1 from "../Images/about_fea1.png";
import About_fea2 from "../Images/about_fea2.png";
function Feature2() {
    const[winWidth,setWidth]=useState(window.innerWidth);
    useEffect(() => {
       function handleResize() {
         setWidth(window.innerWidth);
   }
       window.addEventListener('resize', handleResize)
     })
  return (
    <div>
      <Row className="m-0">
        <Col lg={4} md={5} sm={12} xs={12}>
          <img
            className="image3"
            src={About_fea1}
          />
        </Col>
        <Col lg={8} md={7} sm={12} xs={12}>
          <div className="fea2-tit" >
            We connect you with the right {winWidth>913&&<br/>}people, Product & Services:
          </div>
          {winWidth>767&&<Tag/>}
        </Col>
      </Row>
      {winWidth<=767&&<Tag/>}
 <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"40px"}}>
 {(winWidth<768)&&<Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={4} sm={12} xs={12}> 
  <img className="image4" src={About_fea2}/>
  </Col>}
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={8} md={8} sm={12} xs={12}>
  <Row className="m-0 fea-row">
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
      <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Col>
  {(winWidth>767)&&<Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={4} sm={12} xs={12}> 
  <img className="image4" src={About_fea2}/>
  </Col>}    
 </Row>
    </div>
  );
}
export default Feature2;