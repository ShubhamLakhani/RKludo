import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import './WizardStep1.css';

function WizardStep1(props) {

  return (
    <>
     <div className='KycFrom'>
        <h4>KYC Verification</h4>
        <p>Step 1 of 3</p>
        <small>You need to submit a document that shows that you are above 18 years of age and not a resident of Assam, Odisha, Sikkim, Nagaland, Telangana, Andhra Pradesh, Tamil Nadu and Karnataka.</small>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Document type</Form.Label>
              <Form.Control type="text" value="Aadhar Card" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Document ID Number</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>OTP</Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group> 
        </Form>
     </div>
     <Button variant='' className='btn btn-green btn-block w-100 mt-5' onClick={props.nextStep}>Next</Button>
    </>
  );
}

export default WizardStep1;
