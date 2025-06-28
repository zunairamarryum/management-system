import { Fragment } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Hero from './pages/Hero'
import Footer from './component/Footer';


function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
