
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router ,Routes , Route , Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App(){
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}
const App = () => {
  return (
    <div>
      
</div>
  )
}

export default App
