import React from "react";
import {
    NavLink,
    Route,
    Routes,
    BrowserRouter as Router,
  } from "react-router-dom";
  import Home from "./components/Home";
  import Stats from "./components/Stats";
  import Contact from "./components/Contact";
  import icon from "./bitcoin-icon.png";
  

const App = () => {
    return (
        <Router>
            <div>
                <div className="title-section">
                    <img src={icon} width="90" alt="Bitcoin Icon" />
                    <h1>itcoin App</h1>
                </div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stats">Statistics</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                  <Routes>
                      <Route exact path="/" element={<Home />}/>
                      <Route path="/stats" element={<Stats />}/>
                      <Route path="/contact" element={<Contact />}/>
                  </Routes>
                </div>
            </div>
        </Router>
    );
}

 
export default App;