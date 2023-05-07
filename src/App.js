import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Place from "./pages/place/Place";
import List from "./pages/list/List";
import Info from "./pages/info/Info";
import Contact from "./pages/contact/Contact"
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/places" element={<List/>}/>
        <Route path="/places/:id" element={<Place/>}/>
				<Route path="/info" element={<Info/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
