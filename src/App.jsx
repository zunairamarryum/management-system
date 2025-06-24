import { Fragment } from 'react'
import './App.css'
import Header from './component/Header/Header'

function App() {
  return ( <div className="overflow-x-hidden">
    <Header/>
    <Hero/>
  </div>
  );
};
import { Container } from 'postcss';
import Hero from './pages/Hero';

export default App
