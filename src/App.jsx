import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Support from './pages/Support';

import Documentation from './pages/Documentation';
import Developers from './pages/Developers';
import Commerce from './pages/Commerce';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';

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
  const location = useLocation();
  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/pos" element={<Commerce />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />

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
          </Route>
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
