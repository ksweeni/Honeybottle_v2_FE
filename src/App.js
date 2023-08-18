import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash.js';
import Main from './Main.js';
import Login from './Login.js';
import Activity from "./components/Activity.js";
import Place from "./components/Place.js";
import Eat from "./components/Eat.js";
import Information from './components/Information'
import Admin from "./components/Admin/Admin.js";
import './font.css'
import './style.css'

function App() {
    return(
      <Router> 
        <Routes>
          <Route path="/" exact={true} element={<Splash />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Place" element={<Place />} />
          <Route path="/information/:title" element={<Information />} />
        </Routes>
    </Router>
    );
}
export default App;