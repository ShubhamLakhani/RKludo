import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './AddCashPage.css';

function AddCashPage() {
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
        <div className='AddCashBody'>
          <h4>Choose amount to add</h4>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Enter Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter ₹" />
              <Form.Text className="">
                Min: 10, Max: 20000
              </Form.Text>
            </Form.Group>
            <Row>
              <Col lg={6}>
                <label className="customPriceBox" htmlFor="Price01">
                  <input id="Price01" type="radio" name='PriceRadio' />
                  <p className='btn-white'>₹100</p>
                </label>
              </Col>
              <Col lg={6}>
                <label className="customPriceBox" htmlFor="Price02">
                  <input id="Price02" type="radio" name='PriceRadio' />
                  <p className='btn-white'>₹250</p>
                </label>
              </Col>
              <Col lg={6}>
                <label className="customPriceBox" htmlFor="Price03">
                  <input id="Price03" type="radio" name='PriceRadio' />
                  <p className='btn-white'>₹500</p>
                </label>
              </Col>
              <Col lg={6}>
                <label className="customPriceBox" htmlFor="Price04">
                  <input id="Price04" type="radio" name='PriceRadio' />
                  <p className='btn-white'>₹1000</p>
                </label>
              </Col>
            </Row>
          </Form>
          <hr/>
          <div className='CashbackBox'>
            <h6>CASHBACK OFFER!</h6>
            <p>Mobikwik Wallet (Upto Rs. 750)</p>
            <ul>
              <li>Use Code: <strong>MBK750</strong> On The MobiKwik Payment Page To Avail Per Offer</li>
              <li>Offer Valid Twice Per User In A Month</li>
              <li>Offer Valid On A Minimum Transaction Of Rs.1999</li>
            </ul>
          </div>
          <Link to="/" className='btn btn-green d-block w-100 text-center'>NEXT</Link>
        </div>
      </div> 
    </>
  );
}

export default AddCashPage;
