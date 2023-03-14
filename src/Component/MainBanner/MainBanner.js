import { Icon } from "@iconify/react";
import React from "react";
import { Container, Image } from "react-bootstrap";
import './MainBanner.css';

function MainBanner() {

  return (
    <>
        <Container>
            <div className="MainBannerBody">
                <div className="MainBannerBodyLogo">
                    <Image src="/image/logo.svg" />
                </div>
                <h1>RK-Ludo <strong>WIN REAL CASH!</strong></h1>
                <h6>For best experience, open KhelBro.com on <span><Icon icon="logos:chrome" /></span>  chrome mobile</h6>
            </div>
        </Container>
    </>
  );
}

export default MainBanner;
