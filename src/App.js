import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
// import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from './components/Home';
import PERA from './components/PERA';
import Home2 from './components/Home2';


function App() {
  const [mode, setMode] = useState('light');//wether dark mode is enabled or note

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'grey';
      document.title = 'TextUtils- Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      document.title = 'TextUtils- light Mode';

    }
  }

 return (
    <>
    <div>
           <BrowserRouter>
      <Navbar title="my firsrst" Searchear="यंहा लिखो " mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/text' element={<TextForm />} />
          <Route path='/pera' element={<PERA />} />
          <Route path='/home2' element={<Home2 />} />
       </Routes>
      </BrowserRouter>
    </div>
     </>

  )
}

export default App;
