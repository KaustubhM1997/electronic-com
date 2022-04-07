import "./App.css";
import { Nav } from "../src/components/Nav/nav";
import { Footer } from "../src/components/Footer/footer";
import { ParentRouter } from "./Routes/routes";
import toast, {Toaster} from 'react-hot-toast';


function App() {
  return (
    <div className="App">
    <Nav/>
    <ParentRouter/> 
    <Footer/>
    <Toaster
      position="top-right"
      containerStyle={{
        top: "5rem",
      }}
    />
    </div>
  );
}

export default App;
