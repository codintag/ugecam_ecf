import React from 'react';
import './App.css';
import Navbars from './components/navbar'
import Carousel from './components/carousel'
import Footer from "./components/footer";
import Cardgroup from "./components/cardgroup";

function App() {
  return (
    <div className="App">
    {/*My Navbar */}
      <Navbars />
    {/*My carousel is integrated after navbar */}
      <Carousel />

      <Cardgroup />

      <Footer />
    </div>
  );
}

export default App;
