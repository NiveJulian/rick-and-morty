import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importar el icono de logout

const { container, link, logOut } = styles;

export default function Nav({ onSearch, onLogout, onAddRandomCharacter }) {

    
    return (
        <div className={container}> 
            <Link className={link} to='/home'>Home</Link>
            <Link className={link} to='/about'>About</Link>
            <Link className={link} to='/favorites'>♥</Link>
            <Link className={link} onClick={onAddRandomCharacter}>Random</Link>
            <SearchBar onSearch={onSearch} />
            <button className={logOut} onClick={onLogout} title='Salir'>
                <FontAwesomeIcon icon={faSignOutAlt} /> 
            </button>
        </div>
    );
}
