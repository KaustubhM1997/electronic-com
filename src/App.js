import "./App.css";
import logo from "./logo.png";
import {Routes, Route, Link} from "react-router-dom";
import { Home } from "../src/pages/Home/Home";

function App() {
  return (
    
    <Routes>

      <Route path= "/" element = {<Home/>}></Route>


    </Routes>
    
  );
}

export default App;