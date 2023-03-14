import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './LoginPage.css';

function LoginPage() {

  return (
    <>
      <div className='loginPage'>
        <div className='Loginbox'>
        <div className='LoginBoximage'>
            <Image src='/image/ludoBanner.jpg' />
        </div>
        <Link className='BackBtn'><Icon icon="ic:baseline-arrow-back-ios-new" /></Link>
            <Form>
                <h6>Sign in or Sign up</h6>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter OTP</Form.Label>
                    <div className='OTPWrap'>
                        <Form.Control type="number" />
                        <Form.Control type="number" />
                        <Form.Control type="number" />
                        <Form.Control type="number" />
                        <Form.Control type="number" />
                        <Form.Control type="number" />
                    </div>
                    <Link className='ResendOtp' to="/">Resend OTP</Link>
                </Form.Group>
                <Link to="/" variant='' className='btn-green d-block text-center w-100 mt-4'>Continue</Link>
            </Form>
            <p className='Terms'>By proceeding, you agree to our <a href='#'>Terms of Use</a>, <a href='#'>Privacy Policy</a> and that you are 18 years or older. You are not playing from Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana.</p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
