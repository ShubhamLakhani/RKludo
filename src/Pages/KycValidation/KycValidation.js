import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './KycValidation.css';

function KycValidation() {
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
        <div className='NotificationPageBody'>
          <Image src='/image/notification.png' />
          <h6>Your KYC in <span className='green'>Validation</span></h6>
          <p>We are verifying your details. You will be notified when your KYC is completed</p>
          <Link to="/" className='btn btn-green d-block w-100 mt-5'>Home</Link>
        </div>
      </div>
    </>
  );
}

export default KycValidation;
