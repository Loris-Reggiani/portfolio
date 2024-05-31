// App.js

import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
// import LoadingScreen from './components/LoadingScreen';  // Import LoadingScreen
import SiteTitle from './components/SiteTitle';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<SiteTitle/>}></Route>
        </Routes>    
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

