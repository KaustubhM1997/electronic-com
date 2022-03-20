import "./App.css";
import logo from "./logo.png";
import { Nav } from "../src/components/Nav/nav";
import { Footer } from "../src/components/Footer/footer";
import { ParentRouter } from "./Routes/routes";

function App() {
  return (
    <>
    <Nav/>
    <ParentRouter/> 
    <Footer/>
    </>
  );
}

export default App;
