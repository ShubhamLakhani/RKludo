import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './WalletPage.css';

function WalletPage() {
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
        <div className='WalletBody'>
          <Link className='HistoryBox btn btn-white' to="/transactions"><Icon icon="ic:outline-history" /> Order History</Link>
          <div className='WalletCard BlueCard'>
            <div className='WalletCardHeader'>
              <h6>₹10 <span>DEPOSIT CASH</span></h6>
              <Link to="/addcash" className='btn btn-white'>ADD CASH</Link>
            </div>
            <p>Can be used to play Tournaments & Battles. Cannot be withdrawn to Paytm or Bank.</p>
          </div>
          <div className='WalletCard LightBlueCard'>
            <div className='WalletCardHeader'>
              <h6>₹10 <span>Withdrawn</span></h6>
              <Link to="/" className='btn btn-white'>WITHDRAW</Link>
            </div>
            <p>Can be withdrawn to Paytm or Bank. Can be used to play Tournaments & Battles.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletPage;
