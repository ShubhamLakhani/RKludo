import { Alert, Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './EarningPage.css';

function EarningPage() {
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
        <div className='EarningPageBody'>
          <Link to="/pancard">
            <Alert variant="danger">
              <Icon icon="jam:triangle-danger-f" color="red" />Update your pan card to redeem balance.
            </Alert>
          </Link>
          <h6>Redeem your refer balance</h6>
          <p>TDS (5%) will be deducted after annual referral earning of ₹0.</p>
          <Form.Group >
              <Form.Label>Enter Amount (Min: 100, Max: 10000)</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="">
                Money will be added to KhelBro cash.
              </Form.Text>
          </Form.Group>
          <Link to="/" className='btn btn-green d-block text-center w-100 mt-5'>REDEEM</Link>
        </div>
      </div>
    </>
  );
}

export default EarningPage;
