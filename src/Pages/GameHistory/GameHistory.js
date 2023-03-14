import { Button, Col, Form, Image, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './GameHistory.css';

function GameHistory() {
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
        <div className='GameHistoryBody'>
          <Pagination>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item >{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
          </Pagination>
          <div className='GameHistoryItem'>
            <div className='GameHistoryTime'>
              <h6>8 Feb</h6>
              <small>8:44 AM</small>
            </div>
            <div className='GameHistoryInfo'>
              <span><Image src='/image/bonus.png' /></span>
              <h6>Signup Bonus! 😍 <small>Play and enjoy 😁.</small></h6>
            </div>
            <div className='GameHistoryCash'>
              <p><span className='green'>(+)</span> <Icon icon="fluent-emoji:money-with-wings" /> 0.1</p> 
              <small>Closing Balance: 10</small>
            </div>
          </div>
          <div className='GameHistoryItem'>
            <div className='GameHistoryTime'>
              <h6>8 Feb</h6>
              <small>8:44 AM</small>
            </div>
            <div className='GameHistoryInfo'>
              <span><Image src='/image/bonus.png' /></span>
              <h6>Signup Bonus! 😍 <small>Play and enjoy 😁.</small></h6>
            </div>
            <div className='GameHistoryCash'>
              <p><span className='red'>(-)</span> <Icon icon="fluent-emoji:money-with-wings" /> 0.1</p> 
              <small>Closing Balance: 10</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameHistory;
