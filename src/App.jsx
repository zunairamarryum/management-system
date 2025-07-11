import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';
import Hero from './pages/Hero';
import CategoryPage from './pages/Category/category'; // Ensure this import path is correct
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <RouteWithHeaderFooter />
    </Router>
  );
}

const RouteWithHeaderFooter = () => {
  const location = useLocation();

  // Check if the current path is either '/login' or '/signup'
  const shouldHideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {/* Conditionally render Header */}
      {!shouldHideHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category" element={<CategoryPage />} /> {/* Category route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App