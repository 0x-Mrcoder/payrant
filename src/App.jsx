import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';

import Documentation from './pages/Documentation';
import Developers from './pages/Developers';
import Commerce from './pages/Commerce';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

import GetStarted from './pages/GetStarted';
import DashboardLayout from './layouts/DashboardLayout';
import Transactions from './pages/Transactions';
import Refunds from './pages/Refunds';
import Disputes from './pages/Disputes';
import Balances from './pages/Balances';
import Settlements from './pages/Settlements';
import VirtualAccounts from './pages/VirtualAccounts';
import PaymentLinks from './pages/PaymentLinks';
import CreatePaymentLink from './pages/CreatePaymentLink';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/developers" element={<Developers />} /> {/* Public Dev Page? Or Dashboard? Assume public if external link */}
      <Route path="/commerce" element={<Commerce />} /> {/* Public Commerce Page? */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />

      {/* Dashboard Routes (Protected by Layout) */}
      <Route element={<DashboardLayout />}>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/disputes" element={<Disputes />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/settlements" element={<Settlements />} />
        <Route path="/virtual-accounts" element={<VirtualAccounts />} />
        <Route path="/payment-links" element={<PaymentLinks />} />
        <Route path="/payment-links/create" element={<CreatePaymentLink />} />
        <Route path="/settings" element={<Settings />} />

        {/* If developers page is also internal, it can be here too. 
            The sidebar links to /developers, which might be different from the public landing /developers.
            Let's assume standard routing for now. */}
      </Route>
    </Routes>
  );
}

export default App;
