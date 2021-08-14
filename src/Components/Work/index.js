import React from "react";
import "./index.css";
import { Row, Col } from "reactstrap";
import VGT from "../../img/vgt.PNG";
import cloudix from "../../img/cloudix.png";
import hr from "../../img/HRblusky.png";
import RoaDo from "../../img/RoaDo.png";
const Work = () => {
  return (
    <div className="work">
      <div className="text-uppercase position-sticky">
        <h3 className="text-light text-center display-4">Intern & Work</h3>
      </div>
      <div className="container">
        <Row className="img-block">
          <Col md={6} lg={3} className="text-center">
            <img src={VGT} loading="eager" alt="VGT" />
            <p className="text-muted">Virtualgodown Technologies. </p>
          </Col>
          <Col md={6} lg={3} className="text-center">
            <img src={cloudix} loading="eager" alt="cloudix" />
            <p className="text-muted mt-4">
              Jaishu Consulting Pvt Ltd, (now Cloudix at Chennai).
            </p>
          </Col>
          <Col md={6} lg={3} className="text-center">
            <img src={hr} loading="eager" alt="HR" />
            <p className="text-muted">HRBluSky</p>
          </Col>
          <Col md={6} lg={3} className="text-center">
            <img src={RoaDo} loading="eager" alt="HR" />
            <p className="text-muted">RoaDo, Bangalore</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Work;
