import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Footer.css';
function Footer() {

  return (
    <footer>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className="FooterInfo">
                        <Link to="/"><Image src="/image/logo.svg" /></Link>
                        <p>RK Ludo is a skill-based real-money gaming platform accessible only for our users in India.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="FooterWrap">
                        <div className="Footer-50">
                            <h6>Navigation</h6>
                            <ul>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Games</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="Footer-50">
                            <h6>Help</h6>
                            <ul>
                                <li><Link to="/">Terms & Condition</Link></li>
                                <li><Link to="/">Refund/Cancellation Policy</Link></li>
                                <li><Link to="/">Responsible Gaming</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Platform Commission</Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <h5>Download the App</h5>
                    <Link className="DownloadApkBtn"><Image src="/image/DownloadGame.svg" /></Link>
                </Col>
            </Row>       
            <hr/>
            <div className="CopyRightWrap">
                <p>©2022 | All Rights Reserved | sdfghjkjhdsfgh PVT LTD</p>
                <ul>
                    <li><a href="/"><Image src="/image/FacebookIcon.svg" /></a></li>
                    <li><a href="/"><Image src="/image/TwitterIcon.svg" /></a></li>
                    <li><a href="/"><Image src="/image/InstagramIcon.svg" /></a></li>
                    <li><a href="/"><Image src="/image/LinkedinIcon.svg" /></a></li>
                </ul>
            </div>
        </Container>
    </footer>
  );
}

export default Footer;
