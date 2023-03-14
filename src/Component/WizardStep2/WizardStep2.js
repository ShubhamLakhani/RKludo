import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import './WizardStep2.css';

function WizardStep2(props) {

  return (
    <>
     <div className='KycFrom'>
        <h4>KYC Verification</h4>
        <p>Step 2 of 3</p>
        <small>Enter details of AadharCard: <span>717941459866</span></small>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"  />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"  />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State</Form.Label>
              <Form.Select>
                <option>State</option>
                <option>State</option>
                <option>State</option>
                <option>State</option>
              </Form.Select>
            </Form.Group> 
        </Form>
     </div>
     <Button variant='' className='btn btn-green btn-block w-100 mt-5' onClick={props.nextStep}>Next</Button>
    </>
  );
}

export default WizardStep2;
