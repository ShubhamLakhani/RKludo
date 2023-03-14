import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import './GameList.css';

function GameList() {
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
        <div className='GameListBody'>
          <div className='createBattle'>
            <h6>CREATE A BATTLE!</h6>
            <div className='d-flex gap-3'><Form.Control type="text" placeholder="Amount" /> <Link className='btn btn-green noRadius d-flex align-items-center' to="/">Set</Link></div>
          </div>
          <hr />
          <div className='GameListMain'>
            <div className='GameListHeader'>
              <h6><span><Image src='/image/BettleIcon.png' /></span> Open Battles</h6>
              <Link to="/">Rules</Link>
            </div>
            <div className='GameListBody'>
              <div className='GameListItem'>
                <h6>CHALLENGE FROM <span>RADHE RADHE</span></h6>
                <div className='GameListItemWrap'>
                  <ul>
                    <li>
                      <small>ENTRY FEE</small>
                      <p><i><Icon icon="fluent-emoji:money-with-wings" /></i> 5000</p>
                    </li>
                    <li>
                      <small>PRIZE</small>
                      <p><i><Icon icon="fluent-emoji:money-with-wings" /></i> 10000</p>
                    </li>
                  </ul>
                  <Link className='btn btn-gray'>Play</Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='GameListMain'>
            <div className='GameListHeader'>
              <h6><span><Image src='/image/BettleIcon.png' /></span> Running Battles</h6>
            </div>
            <div className='GameListBody'>
              <div className='GameListItem'>
                <div className='GameRunningHeader'>
                  <h6>PLAYING FOR <i><Icon icon="fluent-emoji:money-with-wings" /></i> 10000</h6>
                  <Link className='btn btn-green'>View</Link>
                </div>
                <div className='GameRunningBody'>
                  <div className='GameProfile'>
                    <span><Image src='https://static.khelbro.com/profile-pic/1672651888387_1lIwjo.png' /></span>
                    <p>Raaz Bhai</p>
                  </div>
                  <i><Image src='https://khelbro.com/images/versus.png' /></i>
                  <div className='GameProfile'>
                    <span><Image src='https://static.khelbro.com/profile-pic/1672651888387_1lIwjo.png' /></span>
                    <p>Raaz Bhai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameList;
