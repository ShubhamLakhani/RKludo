import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import SupportPage from './Pages/SupportPage/SupportPage';
import NotificationPage from './Pages/NotificationPage/NotificationPage';
import ReferEarnPage from './Pages/ReferEarnPage/ReferEarnPage';
import TransactionsPage from './Pages/TransactionsPage/TransactionsPage';
import GameHistory from './Pages/GameHistory/GameHistory';
import WalletPage from './Pages/WalletPage/WalletPage';
import './App.css';
import AddCashPage from './Pages/AddCashPage/AddCashPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import EarningPage from './Pages/EarningPage/EarningPage';
import PanCardPage from './Pages/PanCardPage/PanCardPage';
import DashBoardPage from './Pages/DashBoardPage/DashBoardPage';
import KycPage from './Pages/KycPage/KycPage';
import KycValidation from './Pages/KycValidation/KycValidation';
import GameList from './Pages/GameList/GameList';
import MainBanner from './Component/MainBanner/MainBanner';
import TermsCondition from './Pages/TermsCondition/TermsCondition';
import PrivacyPolicy from './Pages/TermsCondition/PrivacyPolicy';
import RefundPolicy from './Pages/TermsCondition/RefundPolicy';
import ResponsibleGaming from './Pages/TermsCondition/ResponsibleGaming';

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/refer-earn" element={<ReferEarnPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/game-history" element={<GameHistory />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/addcash" element={<AddCashPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/Earning" element={<EarningPage />} />
      <Route path="/Kyc" element={<KycPage />} />
      <Route path="/kyc-validation" element={<KycValidation />} />
      <Route path="/gamelist" element={<GameList />} />
      <Route path="/TermsCondition" element={<TermsCondition />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/RefundPolicy" element={<RefundPolicy />} />
      <Route path="/ResponsibleGaming" element={<ResponsibleGaming />} />
      
      
        
    </Routes>
    {/* <Footer /> */}
    <MainBanner /> 
    </BrowserRouter>
  );
}

export default App;
