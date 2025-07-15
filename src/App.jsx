import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';  // Assuming Header component
import Hero from './pages/Home/Hero';
import CategoryPage from './pages/categorypage/categorypage';
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
  const shouldHideFooter = location.pathname === '/login' || location.pathname === '/signup';
  const shouldHideIcons = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {/* Pass shouldHideIcons to Header */}
      <Header shouldHideIcons={shouldHideIcons} />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
