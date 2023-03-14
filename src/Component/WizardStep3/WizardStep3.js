import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import './WizardStep3.css';

function WizardStep3(props) {

  return (
    <>
     <div className='KycFrom'>
        <h4>KYC Verification</h4>
        <p>Step 3 of 3</p>
        <small>Enter details of AadharCard: <span>717941459866</span> <br/><br/> Ensure that your Name, Birthdate and Document Number are clearly visible in the document photo.</small>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upload Front Photo</Form.Label>
              <Form.Control type="file"  />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upload Back Photo</Form.Label>
              <Form.Control type="file"  />
            </Form.Group> 
           
        </Form>
     </div>
     <Link className='btn btn-green mt-5 d-block w-100' to="/kyc-validation" >Complete</Link>
    </>
  );
}

export default WizardStep3;
