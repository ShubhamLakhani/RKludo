import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './TermsCondition.css';

function RefundPolicy() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <div className={`MainScreen  ${toggleMenu ? 'show' : ''}`}>
        <MainHeader handleClick={handleClick} />
        <hr />
        <Sidebar />
        <div className='TermsBody'>
          <div><h1>Refund Policy</h1><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><Link  to="/">Home</Link></li><li class="breadcrumb-item active" aria-current="page">Refund Policy</li></ol></nav><h4><strong>Refund Policy</strong></h4><p class="p1">Refund Policy</p><p class="p2">Thanks for being a patron with Mama shakuni gaming private limited (referred as “Rkludo”)<span class="Apple-converted-space">&nbsp; </span>. If you are not entirely satisfied with your subscription, we are here to help.</p><p class="p1">Refund</p><p class="p2">Once we receive your Refund request, we will inspect it and notify you on the status of your refund.</p><p class="p2">If your refund request is approved, we will initiate a refund to your credit card (or original method of payment) within 7 working days. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p><p class="p2">In case of unforeseen technical glitch, Mama shakuni gaming private limited would refund subscription upon reviewing the complaint. Final decision lies with the company.</p></div>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
