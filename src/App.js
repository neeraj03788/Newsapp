import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';


const App = ()=> {
  const pageSize = 5;
  
  const [ setProgress] = useState(0)
  const apiKey= "6f68f8d565a34cfcb4fa84e4d620541e"
 
    return (
      <div>
        <Router>
        <NavBar/> 
        
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
          <Route exact path="/business" element={<News setProgress={setProgress}apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress}apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/> 
          <Route exact path="/general" element={<News setProgress={setProgress}apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
          <Route exact path="/health" element={<News setProgress={setProgress}apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/> 
          <Route exact path="/science" element={<News setProgress={setProgress}apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/> 
          <Route exact path="/sports" element={<News setProgress={setProgress}apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
          <Route exact path="/technology" element={<News setProgress={setProgress}apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> 
        </Routes>
        <Footer />
        </Router>
      </div>
    )
 
}

export default App;
