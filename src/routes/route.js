import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; // Updated import
// import AuctionListPage from '../pages/AuctionListPage'; // Updated import
 import LoginPage from '../pages/LoginPage'; // Updated import
 import GetStartedPage from '../pages/GetStartedPage'; // Updated import
 import SignupSuccessPage from '../pages/SignupSuccessPage'; // Updated import
// import ProfilePage from '../pages/ProfilePage'; // Updated import
// import NotFoundPage from '../pages/NotFoundPage'; // Updated import

const AppRoutes = ({ user, onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage user={user} />} />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/signup-success" element={<SignupSuccessPage />} />
    {/*   <Route path="/auction-list" element={<AuctionListPage />} />
      <Route path="/profile" element={user ? <ProfilePage user={user} /> : <LoginPage onLogin={onLogin} />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
