import "./App.css";
import { Nav } from "../src/components/Nav/nav";
import { Footer } from "../src/components/Footer/footer";
import { ParentRouter } from "./Routes/routes";


function App() {

  return (
    <div className="App">
    <Nav/>
    <ParentRouter/> 
    <Footer/>
    </div>
  );
}

export default App;
