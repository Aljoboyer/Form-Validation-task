import Login from "./Login/Login";
import './Styles/SCSS/Login.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <main className="main__conatiner">
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/Home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
