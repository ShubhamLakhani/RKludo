import React from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HowToWinMoney.css';

function HowToWinMoney() {

  return (
    <>
            <div className="HowToWinMoneybanner">
                <h3>How to win Money <Link to="#">X</Link> </h3>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="LudoTab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Hindi</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">English</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="YtLink">
                                <iframe  src="https://www.youtube.com/embed/T-ztCxK4H00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className="YtLink">
                                <iframe  src="https://www.youtube.com/embed/syFZfO_wfMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
   
                </Tab.Container>
            </div>
    </>
  );
}

export default HowToWinMoney;
