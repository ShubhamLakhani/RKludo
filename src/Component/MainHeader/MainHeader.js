import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './MainHeader.css';

function MainHeader({handleClick}) {

  return (
    <>
        <div className='MainScreenHeader'>
          <Link onClick={handleClick} className='LogoIcon' to="#"><Image src="/image/LogoIcon.png" /></Link>
          <div className='moneyWrap d-none'>
            <Link className='AddMoney' to="#">
              <span><Icon icon="fluent-emoji:money-with-wings" /></span>
              <h6>
                <small>CASH</small>
                10
              </h6>
              <i><Icon icon="material-symbols:add-box" /></i>
            </Link>
            <Link className='AddMoney EarnMoney' to="/Earning">
              <span><Icon icon="noto-v1:money-bag" /></span>
              <h6>
                <small>EARNING</small>
                10
              </h6>
            </Link>
          </div>
          <div className='HeaderLoginWrap'>
            <Link className='btn btn-white' to="/">SIGNUP</Link>
            <Link className='btn btn-green' to="/">LOGIN</Link>
          </div>
        </div>
    </>
  );
}

export default MainHeader;
