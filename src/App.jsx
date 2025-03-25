import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Info from "./component/Info";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mealid"  element={<Info/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App