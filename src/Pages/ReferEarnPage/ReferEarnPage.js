import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './ReferEarnPage.css';

function ReferEarnPage() {
const [toggleMenu, setToggleMenu] = useState(false)
const handleClick = () =>{
  setToggleMenu(!toggleMenu)
}
  return (
    <>
      <div className={`MainScreen  ${toggleMenu ? 'show' : ''}`}>
        <MainHeader handleClick={handleClick} />
        <hr/>
        <Sidebar />
        <div className='ReferBody'>
          <Image className='mx-50' src='/image/refer.png' />
          <div className='earnInfo'>
            <h3>Earn now unlimited</h3>
            <p>Refer your friends now!</p>
            <h5>Your Refer Code :<input value="LDVS7YHH" /><Link to="/"><Icon icon="mdi:edit-circle" color="#60a8ff" /></Link></h5>
            <h6>Total Refers: <strong>0</strong></h6>
          </div>
          <hr />
          <div className='referrules'>
            <h4>Refer & Earn Rules</h4>
            <ul>
              <li>
                <span><Image src='/image/refer-01.png' /></span>
                <h6>When your friend signs up on RkLudo from your referral link, <i>You get 1% Commission on your referral's winnings.</i></h6>
              </li>
              <li>
                <span><Image src='/image/refer-02.png' /></span>
                <h6>Suppose your referral plays a battle for ₹10000 Cash, <i>You get ₹100 Cash</i></h6>
              </li>
            </ul>
          </div>
          <hr />
          <h6>SHARE IN LISTED CHANNELS:</h6>
          <div className='BtnWrap'>
            <a href='#' className='btn Btn-White'><Icon icon="logos:whatsapp-icon" /> WhatsApp</a>
            <a href='#' className='btn Btn-White'><Icon icon="logos:telegram" /> Telegram</a>
            <a href='#' className='btn Btn-White'><Icon icon="logos:twitter" /> Twitter</a>
            <a href='#' className='btn Btn-White'><Icon icon="material-symbols:content-copy" color="#60a8ff" /> Copy Code</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferEarnPage;
