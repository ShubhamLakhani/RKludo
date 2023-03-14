import { Button, Col, Form, Image, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './TransactionsPage.css';

function TransactionsPage() {
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
        <div className='transactionsBody'>
        <Pagination>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item >{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
        </Pagination>
          <Image src='/image/transactions.png' />
          <h6>No transactions yet!</h6>
          <p>Seems like you haven't done any activity yet</p>
        </div>
      </div>
    </>
  );
}

export default TransactionsPage;
