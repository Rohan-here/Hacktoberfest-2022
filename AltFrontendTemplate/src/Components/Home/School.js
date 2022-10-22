import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DPS from "../Images/DPS.png";
import IITM from "../Images/IITM.png";
import IITD from "../Images/IITD.png";
import "./style_home.css";
function School() {
  return (
    <div>
      <Row className="m-0">
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={DPS}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITM}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }}  lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITD}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={DPS}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITM}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }}  lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITD}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={DPS}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITM}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }}  lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITD}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={DPS}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }} lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITM}
          />
        </Col>
        <Col style={{display:"flex",justifyContent: "space-around" }}  lg={1} md={2} sm={3} xs={4}>
          <img
            className="cardImageSize_home"
            src={IITD}
          />
        </Col>
      </Row>
    </div>
  );
}
export default School;
