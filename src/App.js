import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
