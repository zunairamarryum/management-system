import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';
import Hero from './pages/Hero'
import Category from './pages/category/mainpage'; // Correctly import Category (mainpage)
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

  // Check if the current path is either '/login', '/signup', or '/'
  const shouldHideIcons = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {/* Header will always show, but conditionally hide icons */}
      <Header shouldHideIcons={shouldHideIcons} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category" element={<Category />} /> {/* Fixed the route for category */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Footer will be hidden on the Login and Signup pages */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
    </div>
  );
}

export default App;
