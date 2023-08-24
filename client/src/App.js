import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegPage from './pages/RegPage/RegPage';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element = {<HomePage></HomePage>}></Route>
    <Route path="/reg" element = {<RegPage></RegPage>}></Route>
    </Routes>
  );
}

export default App;