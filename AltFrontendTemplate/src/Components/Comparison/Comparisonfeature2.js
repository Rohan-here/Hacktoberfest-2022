import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Comparisonstyles.css";
import Block from "../Images/block.png";
import Table from 'react-bootstrap/Table'
import "bootstrap/dist/css/bootstrap.min.css";
function Comparisonfeature1()
{
  return ( <div style={{backgroundColor:"white", paddingBottom:"50px"}}> 
  {/* <h1 style={{paddingLeft:"80px"}}>Listed schools</h1> */}
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"90%",paddingLeft:"110px",paddingTop:"40px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Table  bordered hover size="sm" >
  <thead>
    <tr>
      <th style={{paddingBottom:"17px",paddingTop:"17px"}}>Brand</th>
      <th style={{paddingBottom:"17px",paddingTop:"17px"}}>Option 1</th>
      <th style={{paddingBottom:"17px",paddingTop:"17px"}}>Option 2</th>
      <th style={{paddingBottom:"17px",paddingTop:"17px"}}> Option 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Best for</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Best for Different Topic Choices</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Best for Career Paths</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Best for Kids & Parents</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Ease of use </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> 1.5 of 2</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Pros </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Huge variety of courses</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Professional service</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>100% free</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Cons </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Huge variety of courses</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>Professional service</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>100% free</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Value for money </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>2</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Content quality </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}> </td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>1.5</td>
    </tr>
    <tr>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#F1E4FF" , color:"#8C30F5"}}>Customer support</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>good</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>excellent</td>
      <td style={{paddingBottom:"17px",paddingTop:"17px", backgroundColor:"#D5FAFC" , color:"black"}}>good</td>
    </tr>
  </tbody>
</Table>
  </Col>
  </Row>

</div>
</div>)
}
export default Comparisonfeature1;