import './App.css';
import { Routes, Route} from "react-router-dom";
import Task from './Components/State/State'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

function App() {
  return (
      
      <>
         <Navbar />
         <br />
        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      
      </>
  );
}

export default App;
