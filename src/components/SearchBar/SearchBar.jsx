import { useState } from 'react';
import styles from './SearchBar.module.css'

const {searchBar} = styles

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleInputChange = (e) => {
      setId(e.target.value);
   }

   return (
      <div className={searchBar}>
         <input type='search' value={id} onChange={handleInputChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
