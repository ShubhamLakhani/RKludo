import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeBanner.css';

function HomeBanner() {

  return (
    <>
        <Container>
            <div className="HomeBannerBg">
                <div className="HomeBannerInfo">
                    <h3>Play games online and earn Real Money</h3>
                    <p>Users can compete for real cash in Tournaments and Battles. and encash your winnings</p>
                </div>
            </div>
        </Container>
    </>
  );
}

export default HomeBanner;
