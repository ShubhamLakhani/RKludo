import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './SupportPage.css';

function SupportPage() {
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
        <div className='SupportBody'>
          <Image src='/image/ContactUs.png' />
          <h6>Support timing is from 11:00 AM to 8:00 PM <br/> (Monday to Saturday) </h6>
          <div className='BtnWrap'>
            <a href='#' className='btn Btn-White'><Icon icon="logos:whatsapp-icon" /> WhatsApp</a>
            <a href='#' className='btn Btn-White'><Icon icon="logos:telegram" /> Telegram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
