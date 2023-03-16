import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites"


const URL_BASE = "https://be-a-rym.up.railway.app/api"
const API_KEY = "465227fb1860.d1ecf39944176f3eda20"

function App() {
  const [oldChars, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'tomassandoval079@gmail.com';
  const password = '112233';
  useEffect(() => {
  !access && navigate('/');
  }, [access]);

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

function logOut () {
  setAccess(false)
}
  
  function onSearch(id) {
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !oldChars.find((char)=> char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }
  
  const onClose = (pj) => {
    setCharacters(oldChars.filter((obj) => obj.id !== pj.id));
  }
  
  const location = useLocation()
  return (
    <div className="App">
        <Nav onSearch = {onSearch} location = {location} logOut= {logOut}></Nav>
        <Routes>
          <Route path="/" element = {<Form login = {login}></Form>}/>
          <Route path="/home" element= {<Home characters = {oldChars} location= {location} onClose= {onClose}></Home>}></Route>
          <Route path="/about" element = {<About></About>}></Route>
          <Route path="/favorites" element={<Favorites location={location}/>}></Route>
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
    </div>

  );
}

export default App;

