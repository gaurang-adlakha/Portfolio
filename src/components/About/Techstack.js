import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAws,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiAmazonapigateway,
  SiAwslambda,
  SiAmazoncloudwatch,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazons3,
  SiAmazonecs,
  SiAmazoneks,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiAwslambda/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonecs />
      
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoneks />
      
        
      </Col>
    </Row>
  );
}

export default Techstack;
