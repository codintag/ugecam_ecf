import React from 'react';
import './App.css';
import Navbars from './components/navbar'
import Carousel from './components/carousel'
import Footer from "./components/footer";
import Cardgroup from "./components/cardgroup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Formations from "./pages/formations"
import Vision from "./pages/vision"
import Histoire from "./pages/histoire"
import Contact from "./pages/contact"
import Inscription from "./pages/inscription"
import NotFound from "./pages/notfound"

function App() {
  return (
    <Router>

    <div className="App">
    {/*My Navbar */}
      <Navbars />
      {/*My carousel is integrated after navbar  and before pages/components that will be loaded*/}
          <Carousel />
      <Switch>
        <Route exact path="/" />
        {/* <Route exact path="/" component = { Accueil }/> */}
        <Route exact path="/vision" component = { Vision }/>
        <Route exact path="/histoire" component = { Histoire }/>
        <Route exact path="/formations" component = {Formations}/>
        <Route exact path="/contact" component = {Contact}/>
        <Route exact path="/inscription" component = {Inscription}/>
        <Route><NotFound titre = "Page Not Found!" /></Route>
      </Switch>
    
      
      <Cardgroup />

      <Footer />
    </div>

    </Router>
  );
}

export default App;
