import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './PanCardPage.css';

function PanCardPage() {
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
          <h6>Update Your Pan Card</h6>
          <p>Please update your correct pan-card, as we will cut TDS (Tax Deducted at Source!</p>
          <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Pan Card Number</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" placeholder="" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Upload Photo of your Pan Card.</Form.Label>
                <Form.Control type="file" placeholder="" />
            </Form.Group>
          </Form>
          <div className='mt-5'>
            <Link to="/" className='btn btn-green d-block w-100 '>COMPLETE</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PanCardPage;
