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
  

const App = () => {
    return (
        <Router>
            <div>
                <h1>Bitcoin App</h1>
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