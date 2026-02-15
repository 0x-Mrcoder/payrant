import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import LandingPage from './pages/Lending/LandingPage';
import AboutUs from './pages/Lending/AboutUs';
import Blog from './pages/Lending/Blog';
import BlogPost from './pages/Lending/BlogPost';
import Support from './pages/Lending/Support';

import Documentation from './pages/Lending/Documentation';
import Developers from './pages/Lending/Developers';
import Commerce from './pages/Lending/Commerce';
import Pricing from './pages/Lending/Pricing';
import TermsOfService from './pages/Lending/TermsOfService';
import PrivacyPolicy from './pages/Lending/PrivacyPolicy';
import Contact from './pages/Lending/Contact';
import CaseStudies from './pages/Lending/CaseStudies';

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
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
}



export default App;
