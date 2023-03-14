import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './ProfilePage.css';

function ProfilePage() {
const [toggleMenu, setToggleMenu] = useState(false)
const handleClick = () =>{
  setToggleMenu(!toggleMenu)
}

const [emailShow, setEmailShow] = useState(false)
const emailClick = () =>{
  setEmailShow(!emailShow)
}
  return (
    <>
      <div className={`MainScreen  ${toggleMenu ? 'show' : ''}`}>
        <MainHeader handleClick={handleClick} />
        <hr/>
        <Sidebar />
        <div className='ProfileBody'>
          <div className='ProfileInfo'>
            <span><Image src='https://khelbro.com/images/avatars/Avatar6.png' /></span>
            <small>+917874712144</small>
            <h6>asssadas <Link to="/"><Icon icon="mdi:edit-circle" color="#60a8ff" /></Link></h6>
          </div>
          <Link to="/" className='btn btn-white btn-Wallet'><Icon icon="material-symbols:account-balance-wallet" /> My Wallet</Link>
          <br />
          <hr />
          <div className='AddahrProfile'>
            <h6>Complete Profile</h6>
            <div className='BtnWrap'>
              <Link to="/Kyc" className='btn btn-green'>Complete KYC</Link>
              <Link className='btn btn-green' to="#" onClick={emailClick}>Update Email ID</Link>
            </div>
            <Form className={`emailUpdate ${emailShow ? 'show' : ''}`}>
              <Form.Group className="mt-3" controlId="formBasicEmail">
                <Form.Label className='text-white'>Upload Your Email</Form.Label>
                <Form.Control type="email"  />
              </Form.Group> 
            </Form>
          </div>
          <br />
          <hr />
          <br />
          <ul className='referCashBox'>
            <li>
              <i><Icon icon="fluent-mdl2:add-friend" /></i>
              <Form.Group >
                    <Form.Label>USE REFER CODE</Form.Label>
                    <div className='d-flex align-items-center'><Form.Control type="text" placeholder="" /> <Link to="/"><Icon icon="material-symbols:check" /></Link></div>
                </Form.Group>
            </li>
            <li>
              <i><Image src='/image/cashIcon.png' /></i>
              <h6>CASH WON <span><Icon icon="fluent-emoji:money-with-wings" /> ₹0</span></h6>
            </li>
            <li>
              <i><Image src='/image/BettleIcon.png' /></i>
              <h6>BATTLE PLAYED <span><Icon icon="fluent-emoji:money-with-wings" /> ₹0</span></h6>
            </li>
            <li>
              <i><Image src='/image/refer-01.png' /></i>
              <h6>REFERRAL EARNING <span><Icon icon="fluent-emoji:money-with-wings" /> ₹0</span></h6>
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <Link className='btn btn-red'><Icon icon="uiw:logout" /> Logout</Link>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
