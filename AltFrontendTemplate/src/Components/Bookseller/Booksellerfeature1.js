import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Booksellerstyles.css";
import Block from "../Images/block.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Booksellerfeature1()
{
  return ( <div style={{backgroundColor:"#F1E4FF", paddingBottom:"50px"}}> 
  <h1 style={{paddingLeft:"80px"}}>Listed schools</h1>
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"10px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
  <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ❌
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
  <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
  <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ❌
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
  <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
  <Card.Title className="cardTit">Name of the bookseller</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Location of the school
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  {/* <Button variant="outline-dark" size="lg" style={{marginLeft:"auto",marginTop:"20px",marginBottom:"20px"}} className="button">Explore all →
      {/* <Link to="/login">Log-In</Link> */}
    {/* </Button>  */}
</div>
</div>)
}
export default Booksellerfeature1;