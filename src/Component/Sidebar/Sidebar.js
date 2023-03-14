
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Sidebar.css';
function Sidebar() {

  return (
    <ul className='SideMenu'>
        <li><Link to="/profile"><span><Icon icon="mdi:user-circle" /></span> My Profile</Link></li>
        <li><Link to="/"><span><Icon icon="ph:game-controller-fill" /></span> Win Cash</Link></li>
        <li><Link to="/wallet"><span><Icon icon="material-symbols:account-balance-wallet" /></span> My Wallet</Link></li>
        <li><Link to="/game-history"><span><Icon icon="ion:trophy" /></span> Games History</Link></li>
        <li><Link to="/transactions"><span><Icon icon="ic:baseline-history" /></span> Transaction History</Link></li>
        <li><Link to="/referral-history"><span><Icon icon="material-symbols:group-add" /></span> Refer History</Link></li>
        <li><Link to="/refer-earn"><span><Icon icon="fluent-mdl2:add-friend" /></span> Refer & Earn</Link></li>
        <li><Link to="/notification"><span><Icon icon="clarity:notification-solid" /></span> Notification</Link></li>
        <li><Link to="/support"><span><Icon icon="fluent:person-support-16-filled" /></span> Support</Link></li>
    </ul>

  );
}

export default Sidebar;
