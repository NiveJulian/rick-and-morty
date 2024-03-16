import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./Views/About/About.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Error from "./Views/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/";
      let response = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = response.data;
      setAccess(response.data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate("/home");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (id) => {
    const filteredState = characters.filter((char) => char.id !== id);
    setCharacters(filteredState);
  };

  const location = useLocation();

  const searchCharacters = async (id) => {
    try {
      if (!id) {
        window.alert("¡No se ingreso un ID!");
        return;
      }
      // const parseId= parseInt(id, 10);
      const existe = characters.some((characters) => characters.id === id);
      if (!existe) {
        // axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-matijvillagran}`).then(({ data }) => {
        let response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (response.data.name) {
          setCharacters((characters) => [...characters, response.data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      } else {
        window.alert("¡Personaje ya existente!");
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const random = () => {
    const num = Math.floor(Math.random() * 825) + 1;
    const existe = characters.some((characters) => characters.id === num);
    if (!existe) {
      // axios(`https://rym2.up.railway.app/api/character/${num}?key={pi-matijvillagran}`
      axios(`http://localhost:3001/rickandmorty/character/${num}`).then(
        ({ data }) => {
          setCharacters((characters) => [...characters, data]);
        }
      );
    } else {
      random();
    }
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav
          onSearch={searchCharacters}
          random={random}
          onLogout={logout}
        />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
