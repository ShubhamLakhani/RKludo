import { Accordion, Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './DashBoardPage.css';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import HowToWinMoney from '../../Component/HowToWinMoney/HowToWinMoney';

function DashBoardPage() {
const [toggleMenu, setToggleMenu] = useState(false)
const handleClick = () =>{
  setToggleMenu(!toggleMenu)
}
const [playPopup, setPlayPopup] = useState(false)
const popupHandleClick = () =>{
  setPlayPopup(!playPopup)
}
  return (
    <>
      <div className={`MainScreen  ${toggleMenu ? 'show' : ''}`}>
        <MainHeader handleClick={handleClick} />
        <hr/>
        <Sidebar />
        <Link to="#" onClick={popupHandleClick} className='VideoHelp'>
          <span><Icon icon="logos:youtube-icon" />VIDEO HELP</span>
          <p>How to win money?</p>
          </Link>
          <hr />
        <div className='DashboardMain'>
          <h4>Our Games</h4>
          <p> is for Battles and  is for Tournaments. Know more here.</p>
          <Row>
            <Col lg={6}>
              <Link to="/gamelist" className="HproductCard GameCard">
                <div className="HproductCardImg">
                  <Image src='/image/Game-01.png' />
                </div>
                <div className="HproductCardInfo">
                  <h6>Ludo Classic <span><Image src="/image/BettleIcon.png" /></span></h6>
                  <p><span className="live"></span> Live</p>
                </div>
              </Link>
            </Col>
            <Col lg={6}>
              <Link to="/gamelist" className="HproductCard GameCard">
                <div className="HproductCardImg">
                  <Image src='/image/Game-01.png' />
                </div>
                <div className="HproductCardInfo">
                  <h6>Ludo Popular <span><Image src="/image/BettleIcon.png" /></span></h6>
                  <p><span className="live"></span> Live</p>
                </div>
              </Link>
            </Col>
            <Col lg={6}>
              <Link to="/gamelist" className="HproductCard GameCard">
                <div className="HproductCardImg">
                  <Image src='/image/Game-01.png' />
                </div>
                <div className="HproductCardInfo">
                  <h6>Ludo No Cut <span><Image src="/image/BettleIcon.png" /></span></h6>
                  <p><span className="live"></span> Live</p>
                </div>
              </Link>
            </Col>
            <Col lg={6}>
              <Link to="/gamelist" className="HproductCard GameCard">
                <div className="HproductCardImg">
                  <Image src='/image/Game-01.png' />
                </div>
                <div className="HproductCardInfo">
                  <h6>Ludo Ulta <span><Image src="/image/BettleIcon.png" /></span></h6>
                  <p><span className="live"></span> Live</p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
        <hr />
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header className='TermsAccordion'> <span><Image src='/image/logo.svg' /></span> <i>Terms, Privacy, Support</i></Accordion.Header>
            <Accordion.Body>
              <ul className='TermSLinkWrap'>
                <li><Link to="/TermsCondition">Terms & Condition</Link></li>
                <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                <li><Link to="/RefundPolicy">Refund/Cancellation Policy</Link></li>
                <li><Link to="/support">Contact Us</Link></li>
                <li><Link to="/ResponsibleGaming">Responsible Gaming</Link></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr />
        <div className='RkLuDoInfo'>
          <h6>About Us</h6><br/>
          <p>RK Ludo is a real-money gaming product owned and operated by Mama Shakuni Private Limited ("RK Ludo" or "We" or "Us" or "Our").</p><br/>
          <h6>Our Business & Products</h6><br/>
          <p>We are an HTML5 game-publishing company and our mission is to make accessing games fast and easy by removing the friction of app-installs.</p>
          <p>RK Ludo is a skill-based real-money gaming platform accessible only for our users in India. It is accessible on <a target="_blank" href='https://www.rkludo.in/'>https://www.RKLudo.in</a>. On RK Ludo, users can compete for real cash in Tournaments and Battles. They can encash their winnings via popular options such as Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.</p><br/>
          <h6>Our Games</h6><br/>
          <p>RK Ludo has a wide-variety of high-quality, premium HTML5 games. Our games are especially compressed and optimised to work on low-end devices, uncommon browsers, and patchy internet speeds.</p>
          <p>We have games across several popular categories: Arcade, Action, Adventure, Sports & Racing, Strategy, Puzzle & Logic. We also have a strong portfolio of multiplayer games such as Ludo, Chess, 8 Ball Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more! Some of our popular titles are: Escape Run, Bubble Wipeout, Tower Twist, Cricket Gunda, Ludo With Friends. If you have any suggestions around new games that we should add or if you are a game developer yourself and want to work with us, don't hesitate to drop in a line at <a href='mailto:info@rkludo.com!'>info@rkludo.com!</a></p><br/>
        </div>
      <div className={`MobilePopup  ${playPopup ? 'show' : ''}`}>
        <HowToWinMoney />
        </div>
      </div>
    </>
  );
}

export default DashBoardPage;
