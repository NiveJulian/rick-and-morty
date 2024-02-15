import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
    const [characters, setCharacters] = useState([]);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    const EMAIL = 'julian@gmail.com';
    const PASSWORD = '123456';

    function login(userData) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        }
    }

    function logout() {
        setAccess(false);
        navigate('/');
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const onClose = (id) => {
        const filteredState = characters.filter((char) => char.id !== id);
        setCharacters(filteredState);
    };

    const onSearch = (id) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            (response) => {
                if (response.data.name) {
                  if (!characters.find(char => char.id === response.data.id)) {
                     setCharacters((oldChars) => [...oldChars, response.data]);
                   } else {
                     window.alert(`El personaje ${id} ha sido seleccionado`);
                   }
                 } else {
                   window.alert(`¡No hay personajes con este ID!: ${id}`);
                 }
            }
        );
    };

    const onAddRandomCharacter = () => {
      const randomID = Math.floor(Math.random() * 827) + 1;
      axios(`https://rickandmortyapi.com/api/character/${randomID}`).then(
        (response) => {
          if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
          } else {
            window.alert('No se pudo agregar un personaje aleatorio en este momento.');
          }
        }
      );
    };

    return (
        <div className='App'>
            {pathname !== "/" && <Nav onAddRandomCharacter={onAddRandomCharacter} onSearch={onSearch} onLogout={logout} />} {/* Pasar la función de logout como prop */}
            <Routes>
                <Route path='/' element={<Form login={login} />} />
                <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
