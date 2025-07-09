import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './component/Header/Header'
import Hero from './pages/Hero'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </Header>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
