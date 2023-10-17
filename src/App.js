import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Sslc from "./components/Sslc"
import Hsc from "./components/Hsc"
import Neet from "./components/Neet"
import Jee from "./components/Jee"
import Home from './components/Home';
function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/sslc' element={<Sslc/>}></Route>
          <Route path='/hsc' element={<Hsc/>}></Route>
          <Route path='/neet' element={<Neet/>}></Route>
          <Route path='/jee' element={<Jee/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
