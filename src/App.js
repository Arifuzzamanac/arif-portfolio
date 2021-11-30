import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Cmponents/Share/Navigation/Navigation';
import Home from './Cmponents/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Navigation />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// menubar color: #0d6efd
