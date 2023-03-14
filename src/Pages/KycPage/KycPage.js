import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import MainHeader from '../../Component/MainHeader/MainHeader';
import StepWizard from "react-step-wizard";
import './KycPage.css';
import WizardStep1 from '../../Component/WizardStep1/WizardStep1';
import WizardStep2 from '../../Component/WizardStep2/WizardStep2';
import WizardStep3 from '../../Component/WizardStep3/WizardStep3';

function KycPage() {
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
        <div className='KycPageBody'>
          <StepWizard>
          <WizardStep1 />
          <WizardStep2 />
          <WizardStep3 />
        </StepWizard>
        </div>
      </div>
    </>
  );
}

export default KycPage;
