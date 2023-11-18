
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import { Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Error from './Pages/Error/Error';

function App() {
  return (
    <div>
      
      <NavBar/>
      <Routes>
         <Route path="/" element={<Home/>}  />
         <Route path="/*" element={<Error/>}  />
      </Routes>
      
    </div>
  );
}

export default App;
